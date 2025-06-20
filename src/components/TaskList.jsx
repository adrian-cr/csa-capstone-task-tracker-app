import React from "react";
import TaskCard from "./TaskCard";
import { Stack, Typography } from "@mui/material";

export default function TaskList({ tasks }) {
  return (
    <Stack
      spacing={2}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none"
        },
        alignItems: "center",
        backgroundColor: {
          sm: "none",
          md: "#e7e7e782"
        },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        overflowY: "auto",
        minHeight: {
          sm: "0",
          md: "200px",
          lg: "300px"
        },
        maxHeight: "70%",
        padding: "5%",
        width: "100%"
      }}>
      {tasks.length>0?
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} style={{width: "90%"}}/>
        ))
        :
        <Typography
          variant="h4"
          sx={{
            color: "#00000085"
          }}
        >
          Hmm, no tasks here...
        </Typography>
      }
    </Stack>
  );
}
