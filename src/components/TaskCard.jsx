import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/task/${task.id}`)}
      sx={{
        cursor: "pointer",
        minHeight: {
          sm: "100px",
          md: "150px"
        },
        width: "90%"
      }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Chip
          variant="outlined"
          label={task.completed ? "Completed" : "Pending"}
          sx= {{
            mt: 1,
            backgroundColor: task.completed ? "#57bd86" : "#fff38e",
            color: task.completed ? "#ffffff" : "#b77504",
            borderColor: "#ffffff00"
          }}
          color={task.completed ? "success" : "warning"}
        />
      </CardContent>
    </Card>
  );
}
