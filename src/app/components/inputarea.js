import React, { useState } from "react";
import {
  List,
  ListItem,
  Divider,
  Box,
  Button,
  Popover,
  TextField,
  IconButton,
  Paper,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CloseIcon from "@mui/icons-material/Close";
export default function InputArea() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "attachment-popover" : undefined;
  return (
    <>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
          ml: 3,
          mr: 3,
          background: "#F0F0F0",
          borderRadius: "10px",
        }}
      >
        <IconButton
          sx={{ p: "10px" }}
          aria-label="attach"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              fill="#4F4F4F"
              d="M10.97 22.75c-3.72 0-6.75-3.03-6.75-6.75v-6c0-4.27 3.48-7.75 7.75-7.75s7.75 3.48 7.75 7.75v5.5a4.26 4.26 0 0 1-4.25 4.25 4.26 4.26 0 0 1-4.25-4.25V12c0-.41.34-.75.75-.75s.75.34.75.75v3.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75V10c0-3.45-2.8-6.25-6.25-6.25S5.72 6.55 5.72 10v6c0 2.89 2.35 5.25 5.25 5.25a.749.749 0 1 1 0 1.5Z"
            />
          </svg>
        </IconButton>
        <TextField
          id="requestBox"
          variant="standard"
          placeholder="Ask me anything..."
          fullWidth
          sx={{
            "& .MuiInput-underline:before": {
              borderBottom: "none", // Hide bottom border before focus
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none", // Hide bottom border after focus
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none", // Hide border on hover
            },
            mx: 0,
            border: "none", // Remove border
            boxShadow: "none",
          }}
        />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="send">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              fill="#4F4F4F"
              d="M14.22 21.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81ZM7.64 7.03c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77.72 0 1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45-.65-.65-1.91-.73-3.44-.22L7.64 7.03Z"
            />
            <path
              fill="#4F4F4F"
              d="M10.11 14.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22Z"
            />
          </svg>
        </IconButton>
      </Paper>
      <Typography
        sx={{
          textAlign: "center",
          width: "100%",
          fontSize: "10px",
          color: "#6C757D",
          padding: "10px 10px",
        }}
      >
        Vesion 1+0.1
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          transform: "translateY(-105px)",
          width: "300px",
          boxShadow: "none",
        }}
        PaperProps={{
          style: {
            boxShadow: "none",
            border: "1px solid #E9ECEF",
            borderRadius: "20px",
          },
        }}
      >
        <div
          style={{
            padding: "0px",
            width: "320px",
            display: "flex",
            background: "#FCFCFC",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <List
            sx={{ background: "#fff", borderRadius: "10px", width: "100%" }}
          >
            <ListItem>
              <Box sx={{ width: "100%" }}>
                <a
                  onClick={handleClose}
                  href="#"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                    >
                      <path
                        fill="#4F4F4F"
                        d="M14.367 18.958H5.633c-2.333 0-3.816-1.391-3.95-3.716L1.25 8.367a3.7 3.7 0 0 1 1.008-2.8A3.765 3.765 0 0 1 5 4.375a.738.738 0 0 0 .65-.408l.6-1.192c.492-.975 1.725-1.733 2.8-1.733h1.908c1.075 0 2.3.758 2.792 1.725l.6 1.216a.744.744 0 0 0 .65.392c1.033 0 2.033.433 2.742 1.192a3.712 3.712 0 0 1 1.008 2.8l-.433 6.883c-.15 2.358-1.592 3.708-3.95 3.708ZM9.05 2.292c-.617 0-1.4.483-1.683 1.041l-.6 1.2A1.989 1.989 0 0 1 5 5.625c-.7 0-1.35.283-1.833.792A2.46 2.46 0 0 0 2.5 8.283l.433 6.884c.1 1.683 1.009 2.541 2.7 2.541h8.734c1.683 0 2.591-.858 2.7-2.541l.433-6.884A2.492 2.492 0 0 0 15 5.625a2.005 2.005 0 0 1-1.767-1.075l-.608-1.217C12.35 2.783 11.567 2.3 10.95 2.3h-1.9v-.008Z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M11.25 7.292h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625ZM10 15.625a3.332 3.332 0 1 1 0-6.667 3.332 3.332 0 1 1 0 6.667Zm0-5.417A2.084 2.084 0 1 0 10 14.377 2.084 2.084 0 0 0 10 10.208Z"
                      />
                    </svg>
                    <Typography sx={{ paddingLeft: "10px" }}>Photo</Typography>
                  </Box>
                </a>
              </Box>
            </ListItem>
            <Divider
              sx={{
                borderColor: "#E9ECEF",

                paddingLeft: "10px",
              }}
            ></Divider>
            <ListItem>
              <Box sx={{ width: "100%" }}>
                <a
                  onClick={handleClose}
                  href="#"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                    >
                      <path
                        fill="#4F4F4F"
                        d="M10 16.458a5.633 5.633 0 0 1-5.625-5.625V6.667c0-3.1 2.525-5.625 5.625-5.625s5.625 2.525 5.625 5.625v4.166c0 3.1-2.525 5.625-5.625 5.625Zm0-14.166a4.38 4.38 0 0 0-4.375 4.375v4.166A4.38 4.38 0 0 0 10 15.208a4.38 4.38 0 0 0 4.375-4.375V6.667A4.38 4.38 0 0 0 10 2.292Z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M10 18.958c-4.483 0-8.125-3.641-8.125-8.125V9.167a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v1.666A6.882 6.882 0 0 0 10 17.708a6.882 6.882 0 0 0 6.875-6.875V9.167a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v1.666c0 4.484-3.642 8.125-8.125 8.125ZM12.175 6.858a.687.687 0 0 1-.217-.033 6.144 6.144 0 0 0-4.158 0 .624.624 0 0 1-.417-1.175 7.385 7.385 0 0 1 5.009 0 .624.624 0 0 1 .375.8.618.618 0 0 1-.592.408Z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M11.416 9.358a.622.622 0 0 1-.166-.025 5.212 5.212 0 0 0-2.725 0A.625.625 0 1 1 8.2 8.125c1.108-.3 2.275-.3 3.383 0a.628.628 0 0 1-.167 1.233Z"
                      />
                    </svg>
                    <Typography sx={{ paddingLeft: "10px" }}>Audio</Typography>
                  </Box>
                </a>
              </Box>
            </ListItem>
            <Divider
              sx={{
                borderColor: "#E9ECEF",

                paddingLeft: "10px",
              }}
            ></Divider>
            <ListItem>
              <Box sx={{ width: "100%" }}>
                <a
                  onClick={handleClose}
                  href="#"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textWrap: "nowrap",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                    >
                      <path
                        fill="#4F4F4F"
                        d="M7.5 14.792a.63.63 0 0 1-.625-.625v-3.492l-.6.6a.629.629 0 0 1-.883 0 .629.629 0 0 1 0-.883l1.666-1.667a.628.628 0 0 1 1.067.442v5a.63.63 0 0 1-.625.625Z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M9.167 11.458a.618.618 0 0 1-.442-.183L7.058 9.608a.629.629 0 0 1 0-.883.629.629 0 0 1 .884 0l1.666 1.667a.629.629 0 0 1 0 .883.618.618 0 0 1-.441.183Z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M12.5 18.958h-5c-4.525 0-6.458-1.933-6.458-6.458v-5c0-4.525 1.933-6.458 6.458-6.458h4.166a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625H7.5c-3.842 0-5.208 1.366-5.208 5.208v5c0 3.842 1.366 5.208 5.208 5.208h5c3.841 0 5.208-1.366 5.208-5.208V8.333a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625V12.5c0 4.525-1.933 6.458-6.458 6.458Z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M18.333 8.958H15C12.15 8.958 11.04 7.85 11.04 5V1.667c0-.25.15-.484.384-.575a.63.63 0 0 1 .683.133l6.667 6.667a.626.626 0 0 1-.442 1.067Zm-6.041-5.783V5c0 2.15.558 2.708 2.708 2.708h1.825L12.29 3.175Z"
                      />
                    </svg>
                    <Typography sx={{ paddingLeft: "10px" }}>
                      Select File
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "10px",
                      color: "#6C757D",
                      padding: "10px 10px",
                    }}
                  >
                    Max 10MB
                  </Typography>
                </a>
              </Box>
            </ListItem>
          </List>
        </div>
      </Popover>
    </>
  );
}
