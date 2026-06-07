import {
  FaList,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function FilterBar({
  filter,
  setFilter,
}) {
  const filters = [
    {
      id: "all",
      label: "All",
      icon: <FaList />,
    },
    {
      id: "active",
      label: "Active",
      icon: <FaClock />,
    },
    {
      id: "completed",
      label: "Completed",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div
      className="
        inline-flex

        p-1

        rounded-2xl

        bg-slate-800

        border
        border-slate-700
      "
    >
      {filters.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            setFilter(item.id)
          }
          className={`
            flex
            items-center
            gap-2

            px-4
            py-2.5

            rounded-xl

            text-sm
            font-medium

            transition-all

            ${
              filter === item.id
                ? `
                  bg-blue-600
                  text-white
                `
                : `
                  text-slate-400
                  hover:text-white
                `
            }
          `}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;