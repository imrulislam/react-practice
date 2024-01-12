import ProjectsSidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";
import SelectedProjectDetails from "./components/SelectedProjectDetails";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleAddCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectedProjectDetails(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }


  console.log(projectState)

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProjectDetails project={selectedProject}/>;


  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleAddCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar onSelectProject={handleSelectedProjectDetails} onStartAddProject={handleStartAddProject} projects ={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
