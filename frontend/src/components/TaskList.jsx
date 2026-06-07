import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-5">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="
            animate-fadeIn
          "
        >
          <TaskCard
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;