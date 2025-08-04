import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { useState } from "react";
import ModalAddBlog from "./ModalAddBlog";

const ProjectsAdminView = () => {
  const [modalAddBlog, setModalAddBlog] = useState(false);
  return (
    <>
      <div className="px-10 md:px-20 lg:px-48 pb-10">
        <div className="flex justify-between items-center">
          <Title>Projects</Title>
          <Button onClick={() => setModalAddBlog(true)}>
            <div className="flex items-center">
              <i className="mr-2 bx bx-plus" />
              <p>Add Blog</p>
            </div>
          </Button>
        </div>
      </div>

      <ModalAddBlog
        onClose={() => setModalAddBlog(false)}
        isOpen={modalAddBlog}
      />
    </>
  );
};

export default ProjectsAdminView;
