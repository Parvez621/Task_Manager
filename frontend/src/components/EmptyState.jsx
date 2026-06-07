import { FaClipboardList } from "react-icons/fa";

function EmptyState() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      py-16
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      backdrop-blur-lg
      "
    >
      <FaClipboardList
        className="
        text-5xl
        text-slate-500
        mb-4
        "
      />

      <h3
        className="
        text-xl
        font-semibold
        text-slate-200
        "
      >
        No Tasks Found
      </h3>

      <p
        className="
        mt-2
        text-slate-400
        text-center
        "
      >
        Add a task and begin your heroic
        struggle against deadlines.
      </p>
    </div>
  );
}

export default EmptyState;