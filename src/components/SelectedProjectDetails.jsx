import Button from "./shared/Button";
import Tasks from "./Tasks";

export default function SelectedProjectDetails({ project, onDelete, onAddTask }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </header>
      <div className="border-b-2 border-stone-300 mb-4 pb-4">
        <p className="text-stone-600 mb-2 font-semibold">{formattedDate}</p>
        <p className="text-stone-400 mb-2 font-semibold">{project.description}</p>
      </div>
      <Tasks onAddTask={onAddTask} />
    </div>
  );
}
