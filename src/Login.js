import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Alert, Paper, Box } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8090/login", {
        username: username,
        password: password,
      });

      const role = response.data;
      // Handle the role based on the response
      if (role === "admin") {
        navigate("/admin", { state: { username: username } });
      } else if (role === "user") {
        navigate("/user", { state: { username: username } });
        setError("User logged");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Failed to log in");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
      <Box display="flex" justifyContent="center">
      <Typography variant="h4" component="h2" gutterBottom>
        Quiz Builder
      </Typography>
      </Box>
        <form onSubmit={handleSubmit}>
          <Box display="flex" alignItems="flex-end" marginBottom="16px">
            <AccountCircle style={{ marginRight: "8px" }} />
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box display="flex" alignItems="flex-end" marginBottom="16px">
            <Lock style={{ marginRight: "8px" }} />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Log In
          </Button>
          {error && (
            <Alert severity="error" style={{ marginTop: "16px" }}>
              {error}
            </Alert>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Login;