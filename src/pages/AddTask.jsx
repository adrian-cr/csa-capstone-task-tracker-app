import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";

export default function AddTask() {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    addTask({ ...task, id: uuidv4(), completed: false });
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
    <TaskForm onSubmit={handleSubmit} />
  </Box>
  );
}
