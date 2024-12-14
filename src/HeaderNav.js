import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const HeaderNav = ({ username }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout actions
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/admin">
            Add Question
          </Button>
          <Button color="inherit" component={Link} to="/admin/show-question">
            Show Question
          </Button>
          <Button color="inherit" component={Link} to="/admin/generate-quiz">
            Generate Quiz
          </Button>
          <Button color="inherit" component={Link} to="/admin/validate-answer">
            Show User Response Quiz
          </Button>
          {username && (
            <Typography variant="body1" component="span" sx={{ marginLeft: 2 }}>
              Welcome, {username}!
            </Typography>
          )}
          <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 2 }}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};