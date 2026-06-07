import {
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  const isOverdue =
    task.dueDate &&
    !task.completed &&
    new Date(task.dueDate) < new Date();

  return (
    <div
      className="
        group
        bg-slate-900/70
        backdrop-blur-lg
        border
        border-slate-800
        rounded-2xl
        p-5
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-blue-500/10
      "
    >
      {/* Top Section */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3
              className={`
                text-xl
                font-semibold
                transition-all
                ${
                  task.completed
                    ? "line-through text-slate-500"
                    : "text-white"
                }
              `}
            >
              {task.title}
            </h3>

            {task.completed && (
              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  bg-green-500/20
                  text-green-400
                  border
                  border-green-500/30
                "
              >
                Completed
              </span>
            )}

            {isOverdue && (
              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  bg-red-500/20
                  text-red-400
                  border
                  border-red-500/30
                "
              >
                Overdue
              </span>
            )}
          </div>

          {task.description && (
            <p
              className={`
                leading-relaxed
                ${
                  task.completed
                    ? "text-slate-500"
                    : "text-slate-300"
                }
              `}
            >
              {task.description}
            </p>
          )}

          {task.dueDate && (
            <div
              className="
                inline-flex
                items-center
                gap-2
                mt-4
                px-3
                py-1.5
                rounded-xl
                bg-slate-800
                border
                border-slate-700
              "
            >
              <FaCalendarAlt
                className="text-blue-400"
              />

              <span
                className="
                  text-sm
                  text-slate-300
                "
              >
                {task.dueDate}
              </span>
            </div>
          )}
        </div>

        {/* Checkbox */}

        <button
          onClick={() => onToggle(task.id)}
          className="
            flex
            items-center
            justify-center

            w-8
            h-8

            rounded-full

            transition-all
          "
        >
          {task.completed ? (
            <FaCheckCircle
              className="
                text-3xl
                text-green-500
              "
            />
          ) : (
            <div
              className="
                w-6
                h-6

                rounded-full

                border-2
                border-slate-500

                group-hover:border-blue-400
              "
            />
          )}
        </button>
      </div>

      {/* Overdue Warning */}

      {isOverdue && (
        <div
          className="
            flex
            items-center
            gap-2

            mt-4

            text-red-400
            text-sm
            font-medium
          "
        >
          <FaExclamationTriangle />

          This task is overdue.
        </div>
      )}

      {/* Footer */}

      <div
        className="
          flex
          justify-end
          gap-3

          mt-6
          pt-4

          border-t
          border-slate-800
        "
      >
        <button
          onClick={() => onEdit(task)}
          className="
            flex
            items-center
            gap-2

            px-4
            py-2

            rounded-xl

            bg-blue-500/10
            text-blue-400

            border
            border-blue-500/20

            hover:bg-blue-500/20

            transition-all
          "
        >
          <FaEdit />
          Edit
        </button>

        <button
          onClick={() => {
            const confirmed =
              window.confirm(
                `Delete "${task.title}"?`
              );

            if (confirmed) {
              onDelete(task.id);
            }
          }}
          className="
            flex
            items-center
            gap-2

            px-4
            py-2

            rounded-xl

            bg-red-500/10
            text-red-400

            border
            border-red-500/20

            hover:bg-red-500/20

            transition-all
          "
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;