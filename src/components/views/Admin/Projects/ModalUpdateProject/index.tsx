import { techStacks } from "@/components/common/constant/techStack";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import InputFile from "@/components/ui/InputFile";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import TextArea from "@/components/ui/TextArea";
import Title from "@/components/ui/Title";
import { deleteFile, uploadFile } from "@/lib/firebase/service";
import projectServices from "@/services/projects";
import { Project } from "@/types/project.type";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import { getExtension } from "@/utils/image";

type Proptypes = {
  onClose: () => void;
  project: Project;
  setProjects: Dispatch<SetStateAction<Project[]>>;
};

const ModalUpdateProject = (props: Proptypes) => {
  const { onClose, project, setProjects } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [techStackChecked, setTechStackChecked] = useState<string[]>([]);
  const [details, setDetails] = useState<string[]>([""]);
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    setTechStackChecked(project.techStacks);
    setDetails(project.details || []);
  }, [project]);

  const uploadImages = async (id: string, images: File[]) => {
    const imagesUrl: string[] = await Promise.all(
      images.map(async (image, index) => {
        const imageName =
          "image" +
          (index + (project.images?.length || 0)) +
          "." +
          getExtension(image.name);
        return new Promise((resolve, reject) => {
          uploadFile(
            id,
            image,
            imageName,
            "projects",
            async (status: boolean, imageUrl: string) => {
              if (status) {
                resolve(imageUrl);
              } else {
                reject();
              }
            }
          );
        });
      })
    );
    return imagesUrl;
  };

  const uploadImageAndUpdate = async (id: string, data: Project) => {
    if (thumbnail) {
      const thumbnailName = "thumbnail" + "." + getExtension(thumbnail.name);
      await deleteFile(project.thumbnail, async (status: boolean) => {
        if (status) {
          await uploadFile(
            id,
            thumbnail,
            thumbnailName,
            "projects",
            async (status: boolean, imageUrl: string) => {
              if (status) {
                if (images.length > 0) {
                  const imagesUrl: string[] = await uploadImages(id, images);
                  const result = await projectServices.updateProject(id, {
                    ...data,
                    images:
                      imagesUrl.length > 0
                        ? [...(project.images || []), ...imagesUrl]
                        : project.images,
                    thumbnail: imageUrl,
                  });
                  return result;
                } else {
                  const result = await projectServices.updateProject(id, {
                    ...data,
                    thumbnail: imageUrl,
                  });
                  return result;
                }
              }
            }
          );
        }
      });
    } else {
      if (images) {
        const imagesUrl: string[] = await uploadImages(id, images);
        const result = await projectServices.updateProject(id, {
          ...data,
          images:
            imagesUrl.length > 0
              ? [...(project.images || []), ...imagesUrl]
              : project.images,
        });
        return result;
      } else {
        const result = await projectServices.updateProject(id, data);
        return result;
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data: Project = {
      name: form.projectName.value,
      thumbnail: project.thumbnail,
      category: form.category.value,
      description: form.description.value,
      github: form.github.value,
      link: form.link.value,
      details: details.filter((detail) => detail !== ""),
      techStacks: techStackChecked,
      updatedAt: new Date(),
    };

    setIsLoading(true);
    const result = await uploadImageAndUpdate(project.id!, data);
    if (result && result.status === 200) {
      alert("Update project success!");
      const { data } = await projectServices.getAllProjects();
      setProjects(data.data);
    }
    setIsLoading(false);
  };

  return (
    <Modal onClose={onClose}>
      <Title>Update Project</Title>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div>
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">
              Project Information
            </p>
            <Divider />
            <Input
              name="projectName"
              label="Name"
              placeholder="Project Name"
              defaultValue={project.name}
              required
            />
            <TextArea
              name="description"
              label="Description"
              placeholder="Project Description"
              defaultValue={project.description}
              required
            />
            <Select
              name="category"
              label="Category"
              defaultValue={project.category}
              options={[
                { name: "Software Engineering", value: "Software Engineering" },
                { name: "Data Science", value: "Data Science" },
                {
                  name: "Artificial Intelligence",
                  value: "Artificial Intelligence",
                },
              ]}
            />
          </div>

          <div className="mt-5">
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">Links</p>
            <Divider />
            <Input
              name="github"
              label="Github Link"
              placeholder="Github Link"
              defaultValue={project.github}
            />
            <Input
              name="link"
              label="Project Link"
              placeholder="Project Link"
              defaultValue={project.link}
            />
          </div>

          <div className="mt-5">
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">Thumbnail</p>
            <Divider />
            <div className="flex items-center gap-2 w-full">
              <div className="bg-neutral-200 w-48 h-28">
                <Image
                  src={
                    thumbnail
                      ? URL.createObjectURL(thumbnail)
                      : project.thumbnail
                  }
                  width={100}
                  height={100}
                  alt={"thumbnail"}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <InputFile
                name="thumbnail"
                label="Click here to upload"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                }}
                required
              />
            </div>

            <div className="mt-3">
              <p className="mb-1 font-mono font-semibold text-lg">Images</p>

              {images.length === 0 ? (
                <div className="flex justify-center items-center bg-neutral-200 mb-3 w-full h-28">
                  No More Image Uploaded
                </div>
              ) : (
                <div className="gap-2 grid grid-cols-2 mb-3 w-full">
                  {images.map((image, index) => {
                    return (
                      <div key={index} className="relative w-full">
                        <Image
                          src={URL.createObjectURL(image)}
                          width={100}
                          height={100}
                          alt={"image"}
                          priority
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          className="top-2 right-2 absolute cursor-pointer"
                          onClick={() =>
                            setImages(
                              images.filter((image) => image !== images[index])
                            )
                          }
                        >
                          <i className="bg-black p-1 rounded-full text-white text-xl bx bx-x" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              <InputFile
                name="images"
                label="Click here to upload"
                onChange={(e) => {
                  setImages([...images, e.target.files[0]]);
                }}
              />
            </div>
          </div>

          <div className="mt-5">
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">Tech Stack</p>
            <Divider />
            <Checkbox
              name="tech"
              label="Tech Stack"
              checked={techStackChecked}
              setChecked={setTechStackChecked}
              options={techStacks.map((stack) => stack.name)}
            />
          </div>

          <div className="my-5">
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">Details</p>
            <Divider />
            {details.map((detail, index) => {
              return (
                <Input
                  key={index}
                  name={`detail-${index}`}
                  label={`Detail ${index + 1}`}
                  placeholder={`Detail ${index + 1}`}
                  defaultValue={detail}
                  onChange={(e) => {
                    const newDetails = [...details];
                    newDetails[index] = e.target.value;
                    setDetails(newDetails);
                  }}
                />
              );
            })}
            <div className="flex justify-end">
              <Button onClick={() => setDetails([...details, ""])}>
                <i className="bx bx-plus" />
              </Button>
            </div>
          </div>

          <Divider />
          <div className="flex justify-end mt-3">
            <Button onClick={() => {}} type="submit">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <div className="flex items-center">
                  <i className="mr-2 text-xl bx bx-save" />
                  <p>Save Project</p>
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalUpdateProject;
