import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Stack, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ReusableButton from "./ReusableButton";
import {
  ADMIN_DIETPLAN_URL,
  ADMIN_PROFILE,
  HOME_URL,
  USER_PROFILE,
} from "../components/constants";
import { useNavigate } from "react-router-dom";

const DashboardMenubar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState(null);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const userTypeData = localStorage.getItem("userType");
    setUserType(userTypeData);
  }, []);

  return (
    <Box display="flex" height="100vh" sx={{ width: "15rem" }}>
      <Box
        width="100%"
        p={2}
        sx={{
          background: "linear-gradient(to bottom, #4CAF50, #2196F3)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "80%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5rem",
          }}
        >
          <Typography sx={{ alignSelf: "center" }} variant="h6" gutterBottom>
            {userType === "admin"? "Admin" : "User"}
          </Typography>

          {userType === "admin" ? (
            <Stack
              sx={{ alignSelf: "center", justifySelf: "center", gap: "3rem" }}
            >
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "profile"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Profile"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("profile");
                  navigate(ADMIN_PROFILE);
                }}
              />
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "dietPlan"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                width="100%"
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Get diet plan"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("dietPlan");
                  navigate(ADMIN_DIETPLAN_URL);
                }}
              />
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "articles"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                width="100%"
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Articles"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("articles");
                }}
              />
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "addArticles"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                width="100%"
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Add article"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("addArticles");
                }}
              />
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "dietSuggestion"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                width="100%"
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Diet suggestion"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("dietSuggestion");
                }}
              />
            </Stack>
          ) : (
            <Stack
              sx={{ alignSelf: "center", justifySelf: "center", gap: "3rem" }}
            >
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "profile"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Profile"
                fontWeight={600}
                onClick={() => {
                  navigate(USER_PROFILE)
                  setClickedButton("profile");
                }}
              />
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "dietPlan"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                width="100%"
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Get diet plan"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("dietPlan");
                  navigate(ADMIN_DIETPLAN_URL);
                }}
              />
              <ReusableButton
                background={theme.palette.borderGreen}
                textColor={theme.palette.white}
                boxShadow={
                  clickedButton == "articles"
                    ? "0px 0px 20px rgb(248, 248, 2)"
                    : "0 12px 36px rgba(5, 23, 17, 0.4)"
                }
                width="100%"
                height="2.85rem"
                borderRadius="0.5rem"
                fontSize="1.1rem"
                buttonText="Articles"
                fontWeight={600}
                onClick={() => {
                  setClickedButton("articles");
                }}
              />
            </Stack>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", my: "6rem" }}>
          <Button
            variant="text"
            startIcon={<LogoutIcon />}
            sx={{ color: "white" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate(HOME_URL);
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* Main content */}
      <Box flex={1} bgcolor="white" p={2}>
        {/* Content goes here */}
      </Box>
    </Box>
  );
};

export default DashboardMenubar;
