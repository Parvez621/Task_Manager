import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "./tasks.db",
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to SQLite");
    }
  }
);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      dueDate TEXT,
      completed INTEGER DEFAULT 0,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

export default db;