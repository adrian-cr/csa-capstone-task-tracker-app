import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import { Box } from "@mui/material";

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks, updateTask, deleteTask } = useContext(TaskContext);
  const task = tasks.find((t) => t.id === id);
  const navigate = useNavigate();

  if (!task) return <p>Task not found</p>;

  const handleSubmit = (updatedTask) => {
    updateTask(id, { ...updatedTask, id });
    navigate("/");
  };

  const handleDelete = () => {
    deleteTask(id);
    navigate("/");
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "#ffffff23",
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        margin: 0,
        padding: {
          sm: "30px",
          md: "0 calc(5vh + 10px)"
        }
    }}>
      <TaskForm task={task} onSubmit={handleSubmit} onDelete={handleDelete} />
    </Box>);
}
