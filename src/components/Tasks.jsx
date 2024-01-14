import NewTask from "./NewTask"

export default function Tasks({onAddTask}) {
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask}/>
            <p className="text-stone-800 mb-4 mt-4">This project does not have tasks yet.</p>
            <ul>

            </ul>
        </section>
    )
}