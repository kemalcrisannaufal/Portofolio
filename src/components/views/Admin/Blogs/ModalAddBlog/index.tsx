import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import InputFile from "@/components/ui/InputFile";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import TextArea from "@/components/ui/TextArea";
import Title from "@/components/ui/Title";
import { uploadFile } from "@/lib/firebase/service";
import { FormEvent, useState } from "react";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import { getExtension } from "@/utils/image";
import { Blog } from "@/types/blog";
import blogsServices from "@/services/blogs";
import Checkbox from "@/components/ui/Checkbox";

type Proptypes = {
  onClose: () => void;
  isOpen: boolean;
};

const ModalAddBlog = (props: Proptypes) => {
  const { onClose, isOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [category, setCategory] = useState<string[]>([]);

  const uploadImage = async (id: string) => {
    const thumbnailName =
      "thumbnail" + "." + getExtension(thumbnail?.name || "");
    await uploadFile(
      id,
      thumbnail,
      thumbnailName,
      "blogs",
      async (status: boolean, imageUrl: string) => {
        if (status) {
          const result = await blogsServices.updateBlog(id, {
            thumbnail: imageUrl,
          });

          if (result.status === 200) {
            setIsLoading(false);
            alert("Add blog success!");
            onClose();
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
      const data: Blog = {
        title: form.blogTitle.value,
        slug: form.slug.value,
        content: form.content.value,
        category: category,
        thumbnail: "",
        visibility: form.visibility.value,
        topFeatured: form.topFeatured.value === "true" ? true : false,
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await blogsServices.postBlog(data);
      if (result.status === 200) {
        form.reset();
        await uploadImage(result.data.data.id);
      }
    } else {
      alert("Please upload thumbnail!");
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <Title>Add Blog</Title>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div>
            <Divider />
            <p className="mb-1 font-mono font-semibold text-lg">
              Blog Information
            </p>
            <Divider />
            <Input
              name="blogTitle"
              label="Title"
              placeholder="Blog's title"
              required
            />
            <Input
              name="slug"
              label="Slug"
              placeholder="Blog's slug"
              required
            />

            <TextArea
              name="content"
              label="Content"
              placeholder="Blog's content"
              rows={20}
              maxLength={10000}
              required
            />
            <Checkbox
              name="topFeatured"
              label="Top featured"
              options={[
                "Coding",
                "Software Engineering",
                "Data Science",
                "Artificial Intelligence",
                "Tips",
                "Life",
                "Inspiration",
              ]}
              checked={category}
              setChecked={setCategory}
            />

            <Select
              name="visibility"
              label="Visibility"
              options={[
                { name: "Public", value: "Public" },
                { name: "Private", value: "Private" },
              ]}
            />
            <Select
              name="topFeatured"
              label="Top featured"
              options={[
                { name: "True", value: "true" },
                { name: "False", value: "false" },
              ]}
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

export default ModalAddBlog;
