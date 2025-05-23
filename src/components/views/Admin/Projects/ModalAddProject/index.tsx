import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import InputFile from "@/components/ui/InputFile";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import TextArea from "@/components/ui/TextArea";
import Title from "@/components/ui/Title";
import { uploadFile } from "@/lib/firebase/service";
import projectServices from "@/services/projects";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import { getExtension } from "@/utils/image";
import { TECH_STACK } from "@/constants/list.constanst";
import { Project } from "@/types/project";

type Proptypes = {
  onClose: () => void;
  setProjects: Dispatch<SetStateAction<Project[]>>;
};

const ModalAddProject = (props: Proptypes) => {
  const { onClose, setProjects } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [techStackChecked, setTechStackChecked] = useState<string[]>([]);
  const [details, setDetails] = useState<string[]>([""]);

  const uploadImage = async (id: string) => {
    let thumbnailUrl = "";
    const thumbnailName =
      "thumbnail" + "." + getExtension(thumbnail?.name || "");
    await uploadFile(
      id,
      thumbnail,
      thumbnailName,
      "projects",
      async (status: boolean, imageUrl: string) => {
        if (status) {
          thumbnailUrl = imageUrl;
          const imagesUrl: string[] = await Promise.all(
            images.map(async (image, index) => {
              const imageName =
                "image" + index + "." + getExtension(image.name);
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

          const result = await projectServices.updateProject(id, {
            thumbnail: thumbnailUrl,
            images: imagesUrl,
          });

          if (result.status === 200) {
            const { data } = await projectServices.getAllProjects();
            setProjects(data.data);
            alert("Add project success!");
          } else {
            alert("Add project failed!");
          }
        }
      }
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (thumbnail) {
      setIsLoading(true);
      const form = e.target as HTMLFormElement;

      const data: Project = {
        name: form.projectName.value,
        slug: form.slug.value,
        thumbnail: "",
        category: form.category.value,
        description: form.description.value,
        github: form.github.value,
        link: form.link.value,
        details: details.filter((detail) => detail !== ""),
        techStacks: techStackChecked,
        isTopFeatured: form.topFeatured.value === "true" ? true : false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await projectServices.addProject(data);
      if (result.status === 200) {
        await uploadImage(result.data.data.id);
        onClose();
      } else {
        alert("Add project failed!");
      }

      setIsLoading(false);
    } else {
      alert("Please upload thumbnail!");
    }
  };

  return (
    <Modal onClose={onClose}>
      <Title>Add Project</Title>
      <div className="mt-5 dark:text-neutral-300">
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
              required
            />
            <Input
              name="slug"
              label="Slug"
              placeholder="Project Slug"
              required
            />
            <TextArea
              name="description"
              label="Description"
              placeholder="Project Description"
              required
            />
            <Select
              name="category"
              label="Category"
              options={[
                { name: "Software Engineering", value: "Software Engineering" },
                { name: "Data Science", value: "Data Science" },
                {
                  name: "Artificial Intelligence",
                  value: "Artificial Intelligence",
                },
              ]}
            />
            <Select
              name="topFeatured"
              label="Top Featured"
              options={[
                { name: "Yes", value: "true" },
                { name: "No", value: "false" },
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
            />
            <Input
              name="link"
              label="Project Link"
              placeholder="Project Link"
            />
          </div>

          <div className="mt-5">
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">
              Thumbnail & Images
            </p>
            <Divider />
            <div className="flex items-center gap-2 w-full">
              <div className="bg-gray-200 w-48 h-28">
                {thumbnail ? (
                  <Image
                    src={URL.createObjectURL(thumbnail)}
                    width={100}
                    height={100}
                    alt={"thumbnail"}
                    priority
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              <InputFile
                name="thumbnail"
                label="Click here to upload thumbnail"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                }}
                required
              />
            </div>

            <div className="mt-3">
              <p className="mb-1 font-mono font-semibold text-lg">Images</p>

              {images.length === 0 ? (
                <div className="flex justify-center items-center bg-gray-200 mb-3 w-full h-28">
                  No Image Uploaded
                </div>
              ) : (
                <div className="gap-2 grid grid-cols-2 mb-3 w-full">
                  {images.map((image, index) => {
                    return (
                      <div key={index} className="relative w-full h-full">
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
              options={TECH_STACK.map((stack) => stack.name)}
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

export default ModalAddProject;
