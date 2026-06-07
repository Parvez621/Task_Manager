import db from "../database/db.js";

export const getAllTasks = (req, res) => {
  const query = `
    SELECT *
    FROM tasks
    ORDER BY createdAt DESC
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: rows,
    });
  });
};

export const createTask = (req, res) => {
  const {
    title,
    description,
    dueDate,
  } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  const query = `
    INSERT INTO tasks
    (
      title,
      description,
      dueDate
    )
    VALUES (?, ?, ?)
  `;

  db.run(
    query,
    [title, description, dueDate],
    function (err) {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.status(201).json({
        success: true,
        id: this.lastID,
      });
    }
  );
};

export const toggleTask = (req, res) => {
  const { id } = req.params;

  const query = `
    UPDATE tasks
    SET completed =
      CASE
        WHEN completed = 1 THEN 0
        ELSE 1
      END
    WHERE id = ?
  `;

  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "Task updated",
    });
  });
};

export const deleteTask = (req, res) => {
  const { id } = req.params;

  db.run(
    "DELETE FROM tasks WHERE id = ?",
    [id],
    function (err) {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message: "Task deleted",
      });
    }
  );
};

export const updateTask = (req, res) => {
  const { id } = req.params;

  const {
    title,
    description,
    dueDate,
  } = req.body;

  const query = `
    UPDATE tasks
    SET
      title = ?,
      description = ?,
      dueDate = ?
    WHERE id = ?
  `;

  db.run(
    query,
    [
      title,
      description,
      dueDate,
      id,
    ],
    function (err) {
      if (err) {
        return res.status(500).json({
          success: false,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message: "Task updated",
      });
    }
  );
};