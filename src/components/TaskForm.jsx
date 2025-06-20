import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  Alert,
  Typography,
} from "@mui/material";

export default function TaskForm({ task = {}, onSubmit, onDelete }) {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [completed, setCompleted] = useState(task.completed || false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    onSubmit({ title, description, completed });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#e7e7e782",
        boxSizing: "border-box",
        maxHeight: "90%",
        padding: "2% 5%",
        width: "calc(30vw + 200px)"
      }}
    >
      <Stack
      fullWidth
        spacing={2}
        sx={{
        boxSizing: "border-box",
        minHeight: {
          sm: "0",
          md: "200px",
          lg: "300px"
        },
        maxHeight: "70%",
        padding: "5%",
      }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: "30px",
            mt: "20px"
          }}
        >
          {task.id? "Edit Task" : "Add New Task"}
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
        variant="filled"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          sx={{
            ".MuiFilledInput-root, & .MuiFilledInput-root:focus": {
              backgroundColor: "#ffffffb0",
            }
          }}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          sx={{
            ".MuiFilledInput-root, & .MuiFilledInput-root:focus": {
              backgroundColor: "#ffffffb0",
            }
          }}
          variant="filled"
        />
        {task.id && <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          }
          label="Completed"
        />}
        <Button variant="contained" type="submit">
          Save Task
        </Button>
        {onDelete && (
          <Button
            variant="outlined"
            color="error"
            onClick={onDelete}
            sx={{
              backgroundColor: "#ff3453",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#cf1b36",
                transition: "300ms",
              },
            }}
          >
            Delete Task
          </Button>
        )}
      </Stack>
    </form>
  );
}
