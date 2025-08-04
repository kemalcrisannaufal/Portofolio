import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import ModalAddProject from "./ModalAddProject";
import { Project } from "@/types/project";
import Image from "next/image";
import ModalUpdateProject from "./ModalUpdateProject";
import { deleteFile } from "@/lib/firebase/service";
import projectServices from "@/services/projects";
import useProjectsAdmin from "./useProjectsAdmin";

const ProjectsAdmin = () => {
  const { dataProjects } = useProjectsAdmin();
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalAddProject, setModalAddProject] = useState(false);
  const [modalUpdateProject, setModalUpdateProject] = useState<Project>(
    {} as Project
  );

  useEffect(() => {
    if (dataProjects) setProjects(dataProjects);
  }, [dataProjects]);

  const handleDelete = async (project: Project) => {
    await deleteFile(project.thumbnail, async (status: boolean) => {
      if (status) {
        if (project.images) {
          const isImagesDeleted = await Promise.all(
            project.images.map((image) => {
              return new Promise<boolean>((resolve, reject) => {
                deleteFile(image, (status: boolean) => {
                  if (status) {
                    resolve(true);
                  } else {
                    reject(false);
                  }
                });
              });
            })
          );
          if (isImagesDeleted) {
            const result = await projectServices.deleteProject(project.id!);
            if (result.status === 200) {
              const { data } = await projectServices.getAllProjects();
              setProjects(data.data);
              alert("Delete project success!");
            }
          }
        } else {
          const result = await projectServices.deleteProject(project.id!);
          if (result.status === 200) {
            const { data } = await projectServices.getAllProjects();
            setProjects(data.data);
            alert("Delete project success!");
          }
        }
      }
    });
  };

  const cellStyle = "p-2 text-center";
  return (
    <>
      <div className="dark:text-neutral-300">
        <div className="flex justify-between items-center">
          <Title>Projects</Title>
          <Button onClick={() => setModalAddProject(true)}>
            <div className="flex items-center">
              <i className="mr-2 bx bx-plus" />
              <p>Add Project</p>
            </div>
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="mt-10 w-full table-auto">
            <thead>
              <tr>
                <th>No</th>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => {
                return (
                  <tr key={index}>
                    <td className={cellStyle}>{project.id}</td>
                    <td className="w-1/6 h-36">
                      <Image
                        src={project.thumbnail}
                        width={200}
                        height={200}
                        alt={project.name}
                        priority
                        className="w-full h-auto object-cover"
                      />
                    </td>
                    <td className={cellStyle}>{project.name}</td>
                    <td className={cellStyle}>{project.category}</td>
                    <td
                      className={`${cellStyle} flex gap-2 justify-center items-center h-36`}
                    >
                      <Button onClick={() => setModalUpdateProject(project)}>
                        <i className="bx bx-edit" />
                      </Button>
                      <Button onClick={() => handleDelete(project)}>
                        <i className="bx bx-trash" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalAddProject
        onClose={() => setModalAddProject(false)}
        setProjects={setProjects}
        isOpen={modalAddProject}
      />

      <ModalUpdateProject
        onClose={() => setModalUpdateProject({} as Project)}
        project={modalUpdateProject}
        setProjects={setProjects}
        isOpen={Object.keys(modalUpdateProject).length > 0}
      />
    </>
  );
};

export default ProjectsAdmin;
