import { useEffect, useState } from "react";

import TaskForm from "../components/TaskForm";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import StatsBar from "../components/StatsBar";
import TaskList from "../components/TaskList";

import {
  getTasks,
  createTask,
  updateTask as updateTaskAPI,
  deleteTask as deleteTaskAPI,
  toggleTask as toggleTaskAPI,
} from "../services/api";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();

      const normalizedTasks = (response.data || []).map(
        (task) => ({
          ...task,
          completed: Boolean(task.completed),
        })
      );

      setTasks(normalizedTasks);
    } catch (error) {
      console.error(
        "Failed to fetch tasks:",
        error
      );
    }
  };

  const toggleTask = async (id) => {
    try {
      await toggleTaskAPI(id);

      fetchTasks();
    } catch (error) {
      console.error(
        "Failed to toggle task:",
        error
      );
    }
  };

  const addTask = async (taskData) => {
    try {
      await createTask(taskData);

      fetchTasks();
    } catch (error) {
      console.error(
        "Failed to create task:",
        error
      );
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskAPI(id);

      fetchTasks();
    } catch (error) {
      console.error(
        "Failed to delete task:",
        error
      );
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await updateTaskAPI(
        updatedTask.id,
        updatedTask
      );

      await fetchTasks();

      setEditingTask(null);
    } catch (error) {
      console.error(
        "Failed to update task:",
        error
      );
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);

    return matchesSearch && matchesFilter;
  });

  const activeCount = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    {/* Background Glow */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          TaskFlow
        </h1>

        <p className="mt-3 text-slate-400 text-lg">
          Organize tasks. Finish work. Pretend life is under control.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8">
        <StatsBar
          activeCount={activeCount}
          completedCount={completedCount}
        />
      </div>

      {/* Task Form Card */}
      <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg p-6 shadow-2xl">
        <TaskForm
          onAdd={addTask}
          onUpdate={updateTask}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      </div>

      {/* Search + Filter */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg p-4">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg p-4">
          <FilterBar
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>

      {/* Tasks */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg p-6 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">
          Your Tasks
        </h2>

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />
      </div>
    </div>
  </div>
);
}

export default Home;