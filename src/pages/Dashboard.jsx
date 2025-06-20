import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filteredTasks =
    filter === "completed"
      ? tasks.filter((task) => task.completed)
      : filter === "pending"
      ? tasks.filter((task) => !task.completed)
      : tasks;

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
      <ButtonGroup
        variant="contained"
        color="none"
        fullWidth
        sx={{
          display: "flex",
          "*": {
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem"
            },
          },
          justifyContent: "space-around",
          mb: 2,
        }}>
        {[
          { label: "All", value: "all", activeBg: "#78a9ea", activeColor: "#fff", inactiveBg: "#74a9e568" },
          { label: "Completed", value: "completed", activeBg: "#57bd86", activeColor: "#fff", inactiveBg: "#60d99868" },
          { label: "Pending", value: "pending", activeBg: "#fff38e", activeColor: "#926311", inactiveBg: "#fff38e68" }
        ].map(({ label, value, activeBg, activeColor, inactiveBg}) => (
          <Button
            key={value}
            onClick={() => setFilter(value)}
            sx={{
              backgroundColor: filter===value? activeBg : inactiveBg,
              color: filter ===value? activeColor : "#000",
              fontWeight: filter===value? "bold" : "normal",
              "&:hover": {
                backgroundColor: activeBg,
                color: activeColor,
                transition: "300ms"
              }
            }}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
      <TaskList tasks={filteredTasks} />
      <Button
        variant="contained"
        onClick={() => navigate("/add-task")}
        sx={{
          m: 2,
          width: "200px"
        }}>
        Add New Task
      </Button>
    </Box>
  );
}
