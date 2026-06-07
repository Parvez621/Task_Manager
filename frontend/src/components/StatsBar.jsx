import {
  FaTasks,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

function StatsBar({
  activeCount,
  completedCount,
}) {
  const total =
    activeCount + completedCount;

  const completionRate =
    total === 0
      ? 0
      : Math.round(
          (completedCount / total) * 100
        );

  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-3
        mb-8
      "
    >
      {/* Active Tasks */}

      <div
        className="
          bg-slate-900/70
          backdrop-blur-lg
          border
          border-slate-800
          rounded-2xl
          p-5
          shadow-xl
          hover:-translate-y-1
          transition-all
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Active Tasks
            </p>

            <h3
              className="
                text-3xl
                font-bold
                text-blue-400
                mt-2
              "
            >
              {activeCount}
            </h3>
          </div>

          <FaTasks
            className="
              text-3xl
              text-blue-400
            "
          />
        </div>
      </div>

      {/* Completed Tasks */}

      <div
        className="
          bg-slate-900/70
          backdrop-blur-lg
          border
          border-slate-800
          rounded-2xl
          p-5
          shadow-xl
          hover:-translate-y-1
          transition-all
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Completed
            </p>

            <h3
              className="
                text-3xl
                font-bold
                text-green-400
                mt-2
              "
            >
              {completedCount}
            </h3>
          </div>

          <FaCheckCircle
            className="
              text-3xl
              text-green-400
            "
          />
        </div>
      </div>

      {/* Progress */}

      <div
        className="
          bg-slate-900/70
          backdrop-blur-lg
          border
          border-slate-800
          rounded-2xl
          p-5
          shadow-xl
          hover:-translate-y-1
          transition-all
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Progress
            </p>

            <h3
              className="
                text-3xl
                font-bold
                text-purple-400
                mt-2
              "
            >
              {completionRate}%
            </h3>
          </div>

          <FaChartLine
            className="
              text-3xl
              text-purple-400
            "
          />
        </div>

        <div
          className="
            w-full
            h-2
            bg-slate-800
            rounded-full
            mt-4
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-purple-500
              rounded-full
              transition-all
              duration-500
            "
            style={{
              width: `${completionRate}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatsBar;