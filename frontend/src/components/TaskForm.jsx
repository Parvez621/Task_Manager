import { useState, useEffect } from "react";
import {
  FaPlus,
  FaSave,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";

function TaskForm({
  onAdd,
  onUpdate,
  editingTask,
  setEditingTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [dueDate, setDueDate] =
    useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(
        editingTask.description || ""
      );
      setDueDate(
        editingTask.dueDate || ""
      );
    }
  }, [editingTask]);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Task title is required");
      return;
    }

    if (editingTask) {
      onUpdate({
        ...editingTask,
        title,
        description,
        dueDate,
      });
    } else {
      onAdd({
        title,
        description,
        dueDate,
      });
    }

    clearForm();
  };

  const handleCancel = () => {
    setEditingTask(null);
    clearForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        animate-floatUp
        space-y-5
      "
    >
      {/* Heading */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          {editingTask
            ? "Edit Task"
            : "Create New Task"}
        </h2>

        <p className="text-slate-400 mt-1">
          {editingTask
            ? "Update your task details."
            : "Add a new task and stay productive."}
        </p>
      </div>

      {/* Title */}

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        />
      </div>

      {/* Description */}

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Description
        </label>

        <textarea
          rows="4"
          placeholder="Describe the task..."
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            text-white
            placeholder:text-slate-500
            resize-none
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        />
      </div>

      {/* Due Date */}

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Due Date
        </label>

        <div className="relative">
          <FaCalendarAlt
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(
                e.target.value
              )
            }
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              pl-12
              pr-4
              py-3
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="
            flex
            items-center
            gap-2

            bg-blue-600
            hover:bg-blue-700

            px-5
            py-3

            rounded-xl

            text-white
            font-semibold

            transition-all
            duration-200

            hover:-translate-y-0.5
          "
        >
          {editingTask ? (
            <>
              <FaSave />
              Save Changes
            </>
          ) : (
            <>
              <FaPlus />
              Add Task
            </>
          )}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={handleCancel}
            className="
              flex
              items-center
              gap-2

              bg-slate-700
              hover:bg-slate-600

              px-5
              py-3

              rounded-xl

              text-white
              font-semibold

              transition-all
              duration-200
            "
          >
            <FaTimes />
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;