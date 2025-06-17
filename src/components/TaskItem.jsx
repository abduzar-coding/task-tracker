function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-700 px-4 py-3 shadow-sm hover:shadow-md transition">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-blue-600"
        />
        <span
          className={`text-base ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {task.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;