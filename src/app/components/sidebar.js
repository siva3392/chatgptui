import {
  Box,
  Button,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  MenuIcon,
} from "@mui/material";
import theme from "../theme";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // Full width on extra-small screens
          sm: "50%", // 50% width on small screens
          md: "33%", // 33% width on medium screens
          lg: "25%", // 25% width on large screens
        },
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box>
        <Typography
          variant="div"
          sx={{ mb: 2, textAlign: "center", display: "block", mt: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={122}
            height={27}
            fill="none"
          >
            <path
              fill="#4F4F4F"
              d="M12 6.25c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14a1.498 1.498 0 0 1 0-2.5c.08-.05.17-.1.26-.13.09-.04.18-.07.28-.09A1.499 1.499 0 1 1 12 6.25ZM12 10.75c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.499 1.499 0 0 1 0-2.12c.07-.07.15-.13.23-.19.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.499 1.499 0 0 1 .23 2.31c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03ZM12 14.75c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08-.09-.04-.18-.09-.26-.14-.08-.06-.16-.12-.23-.19a1.454 1.454 0 0 1-.41-.77 1.499 1.499 0 0 1 .41-1.35c.07-.07.15-.13.23-.19.08-.05.17-.1.26-.14.09-.03.18-.06.28-.08a1.499 1.499 0 0 1 1.76 1.76c-.02.1-.05.19-.09.28a1.264 1.264 0 0 1-.32.49c-.07.07-.15.13-.23.19-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.09.02-.19.03-.29.03ZM12 18.25c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.23-.23.58-.33.9-.27.07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .26-.11.52-.29.71-.05.04-.1.08-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02ZM12 21.5a.776.776 0 0 1-.53-.22.633.633 0 0 1-.16-.24.75.75 0 1 1 .69.46ZM12 23.57a.47.47 0 0 1-.35-.15.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15ZM3.5 10.75a1.499 1.499 0 0 1-1.06-2.56c.55-.56 1.56-.56 2.12 0a1.498 1.498 0 0 1-.23 2.31c-.08.05-.17.1-.26.13a1.357 1.357 0 0 1-.57.12ZM20.5 10.75c-.39 0-.78-.16-1.06-.44S19 9.64 19 9.25c0-.1.01-.2.03-.29.02-.1.05-.19.08-.28.04-.09.09-.18.14-.26.06-.08.12-.16.19-.23s.15-.13.23-.19c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13.08.06.16.12.23.19s.13.15.19.23c.05.08.1.17.13.26a1.357 1.357 0 0 1 .12.57 1.499 1.499 0 0 1-.67 1.25c-.08.05-.17.1-.26.14-.09.03-.18.06-.28.08-.1.02-.19.03-.29.03ZM20.5 14.25c-.06 0-.13-.01-.19-.02a.603.603 0 0 1-.19-.06.757.757 0 0 1-.18-.09c-.05-.03-.1-.08-.15-.12-.04-.05-.09-.1-.12-.15a.757.757 0 0 1-.09-.18.636.636 0 0 1-.06-.18c-.01-.07-.02-.13-.02-.2 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.19-.06.12-.03.25-.03.38 0 .07.01.13.03.19.06.06.02.12.05.17.09.06.04.11.08.16.12.18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.05.04-.1.09-.16.12-.05.04-.11.07-.17.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02ZM3.5 14.25c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM20.5 17a.75.75 0 1 1 0-1.499.75.75 0 0 1 0 1.499ZM3.5 17a.75.75 0 0 1-.69-1.04c.03-.09.09-.17.16-.24.27-.28.78-.28 1.06 0a.776.776 0 0 1 .22.53.776.776 0 0 1-.22.53.75.75 0 0 1-.53.22ZM20.5 19.5c-.07 0-.13-.01-.19-.04a.355.355 0 0 1-.16-.11A.47.47 0 0 1 20 19a.501.501 0 0 1 1 0c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15ZM3.5 19.5c-.13 0-.26-.05-.35-.15A.47.47 0 0 1 3 19a.501.501 0 0 1 1 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15ZM7.75 8.5a1.357 1.357 0 0 1-.57-.12c-.1-.03-.18-.08-.26-.13A1.516 1.516 0 0 1 6.25 7c0-.39.16-.78.44-1.06.56-.56 1.56-.56 2.12 0a1.499 1.499 0 0 1-.23 2.31c-.08.05-.17.1-.26.13a1.357 1.357 0 0 1-.57.12ZM16.25 8.5a1.358 1.358 0 0 1-.57-.12c-.09-.03-.18-.08-.26-.13-.08-.06-.16-.12-.23-.19s-.13-.15-.19-.23c-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29a1.516 1.516 0 0 1 .67-1.25c.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13A1.516 1.516 0 0 1 17.75 7c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 0 1-.57.12ZM7.75 12.75c-.1 0-.2-.01-.29-.03-.1-.02-.19-.05-.28-.08a1.454 1.454 0 0 1-.49-.33 1.499 1.499 0 0 1 0-2.12c.56-.56 1.56-.56 2.12 0a1.499 1.499 0 0 1-1.06 2.56ZM16.25 12.75a1.358 1.358 0 0 1-.57-.12c-.09-.03-.18-.08-.26-.13-.08-.06-.16-.12-.23-.19s-.13-.15-.19-.23c-.05-.08-.1-.17-.14-.26-.03-.09-.06-.18-.08-.28-.02-.09-.03-.19-.03-.29 0-.39.16-.78.44-1.06.07-.07.15-.13.23-.19.08-.05.17-.1.26-.13a1.417 1.417 0 0 1 1.14 0c.09.03.18.08.26.13a1.516 1.516 0 0 1 .67 1.25c0 .1-.01.2-.03.29-.02.1-.05.19-.08.28-.04.09-.09.18-.14.26-.06.08-.12.16-.19.23s-.15.13-.23.19c-.08.05-.17.1-.26.13a1.358 1.358 0 0 1-.57.12ZM7.75 16.25c-.13 0-.26-.03-.38-.08a.933.933 0 0 1-.33-.21c-.09-.1-.16-.21-.21-.33a.995.995 0 0 1-.08-.38c0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.19.18-.45.29-.71.29ZM16.25 16.25c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.17-.04.06-.08.11-.12.16-.19.18-.45.29-.71.29ZM7.75 19.25a.75.75 0 1 1 0-1.499.75.75 0 0 1 0 1.499ZM16.25 19.25a.776.776 0 0 1-.53-.22.633.633 0 0 1-.16-.24.717.717 0 0 1 0-.58c.04-.09.09-.17.16-.24.07-.07.15-.12.24-.16a.73.73 0 0 1 .58 0c.09.04.17.09.24.16a.776.776 0 0 1 .22.53.776.776 0 0 1-.22.53.75.75 0 0 1-.53.22ZM7.75 21.5c-.13 0-.26-.05-.35-.15a.47.47 0 0 1-.15-.35.501.501 0 0 1 1 0c0 .13-.05.26-.15.35-.09.1-.22.15-.35.15ZM16.25 21.5c-.07 0-.13-.01-.19-.04a.355.355 0 0 1-.16-.11.355.355 0 0 1-.11-.16.406.406 0 0 1-.04-.19.501.501 0 0 1 1 0c0 .07-.01.13-.04.19-.02.06-.06.12-.11.16a.47.47 0 0 1-.35.15ZM35.2 20.5v-14h1.68v12.32h6.27v1.68H35.2Zm13.58.26c-.92 0-1.76-.237-2.52-.71a5.323 5.323 0 0 1-1.81-1.9 5.343 5.343 0 0 1-.67-2.65c0-.733.13-1.417.39-2.05.26-.64.616-1.2 1.07-1.68.46-.487.993-.867 1.6-1.14a4.669 4.669 0 0 1 1.94-.41c.92 0 1.756.237 2.51.71a5.19 5.19 0 0 1 1.81 1.91c.453.8.68 1.687.68 2.66 0 .727-.13 1.407-.39 2.04a5.418 5.418 0 0 1-1.08 1.68c-.454.48-.984.857-1.59 1.13-.6.273-1.247.41-1.94.41Zm0-1.68c.626 0 1.19-.163 1.69-.49.506-.333.903-.77 1.19-1.31.293-.547.44-1.14.44-1.78a3.68 3.68 0 0 0-.45-1.8 3.526 3.526 0 0 0-1.19-1.31c-.5-.327-1.06-.49-1.68-.49-.627 0-1.19.167-1.69.5-.5.327-.897.763-1.19 1.31a3.726 3.726 0 0 0-.44 1.79c0 .667.15 1.273.45 1.82.3.54.703.97 1.21 1.29.506.313 1.06.47 1.66.47Zm14.406-8.58h1.68v10.32c0 .66-.144 1.273-.43 1.84-.28.573-.66 1.07-1.14 1.49a5.261 5.261 0 0 1-1.64.99c-.614.24-1.254.36-1.92.36a4.557 4.557 0 0 1-2.01-.47 5.584 5.584 0 0 1-1.7-1.24 4.676 4.676 0 0 1-1.04-1.73l1.54-.7c.126.46.353.873.68 1.24.333.373.72.667 1.16.88.446.22.903.33 1.37.33.44 0 .863-.077 1.27-.23a3.745 3.745 0 0 0 1.11-.64c.333-.267.593-.583.78-.95.193-.36.29-.75.29-1.17v-1.99c-.34.573-.79 1.04-1.35 1.4-.554.353-1.2.53-1.94.53-.707 0-1.37-.137-1.99-.41a5.145 5.145 0 0 1-1.63-1.13 5.472 5.472 0 0 1-1.1-1.68 5.202 5.202 0 0 1-.4-2.04c0-.727.133-1.407.4-2.04.266-.64.633-1.2 1.1-1.68a5.068 5.068 0 0 1 1.63-1.14 4.878 4.878 0 0 1 1.99-.41c.74 0 1.386.177 1.94.53.56.353 1.01.82 1.35 1.4V10.5Zm-3.28 8.63c.646 0 1.206-.167 1.68-.5.48-.333.85-.777 1.11-1.33.26-.553.39-1.153.39-1.8 0-.667-.134-1.273-.4-1.82a3.214 3.214 0 0 0-1.11-1.32c-.474-.333-1.03-.5-1.67-.5-.627 0-1.2.163-1.72.49-.52.327-.934.767-1.24 1.32a3.74 3.74 0 0 0-.45 1.83c0 .673.153 1.287.46 1.84.313.547.726.983 1.24 1.31a3.2 3.2 0 0 0 1.71.48Zm11.628 1.63c-.92 0-1.76-.237-2.52-.71a5.323 5.323 0 0 1-1.81-1.9 5.343 5.343 0 0 1-.67-2.65c0-.733.13-1.417.39-2.05.26-.64.616-1.2 1.07-1.68.46-.487.993-.867 1.6-1.14a4.669 4.669 0 0 1 1.94-.41c.92 0 1.756.237 2.51.71a5.19 5.19 0 0 1 1.81 1.91c.453.8.68 1.687.68 2.66 0 .727-.13 1.407-.39 2.04a5.418 5.418 0 0 1-1.08 1.68c-.454.48-.984.857-1.59 1.13-.6.273-1.247.41-1.94.41Zm0-1.68c.626 0 1.19-.163 1.69-.49.506-.333.903-.77 1.19-1.31.293-.547.44-1.14.44-1.78a3.68 3.68 0 0 0-.45-1.8 3.526 3.526 0 0 0-1.19-1.31c-.5-.327-1.06-.49-1.68-.49-.627 0-1.19.167-1.69.5-.5.327-.897.763-1.19 1.31a3.726 3.726 0 0 0-.44 1.79c0 .667.15 1.273.45 1.82.3.54.703.97 1.21 1.29.506.313 1.06.47 1.66.47Zm20.436-4.8v6.22h-1.68v-5.85c0-.507-.124-.967-.37-1.38a2.736 2.736 0 0 0-.99-.98 2.641 2.641 0 0 0-1.38-.37c-.5 0-.96.123-1.38.37-.414.24-.744.567-.99.98-.247.413-.37.873-.37 1.38v5.85h-1.68v-15h1.68v6.25c.353-.467.8-.837 1.34-1.11.54-.28 1.126-.42 1.76-.42a3.9 3.9 0 0 1 2.04.55c.62.36 1.11.847 1.47 1.46.366.613.55 1.297.55 2.05Zm6.204 6.48c-.92 0-1.76-.237-2.52-.71a5.324 5.324 0 0 1-1.81-1.9 5.344 5.344 0 0 1-.67-2.65c0-.733.13-1.417.39-2.05.26-.64.617-1.2 1.07-1.68.46-.487.994-.867 1.6-1.14a4.669 4.669 0 0 1 1.94-.41c.754 0 1.444.153 2.07.46.634.3 1.174.72 1.62 1.26.454.54.79 1.167 1.01 1.88.227.713.31 1.477.25 2.29h-8.16c.08.567.267 1.073.56 1.52.294.44.667.79 1.12 1.05.46.26.97.393 1.53.4.6 0 1.144-.153 1.63-.46.487-.313.88-.74 1.18-1.28l1.71.4a5.268 5.268 0 0 1-1.81 2.18 4.64 4.64 0 0 1-2.71.84Zm-3.26-5.97h6.52a3.268 3.268 0 0 0-.54-1.53 3.532 3.532 0 0 0-1.17-1.12 2.99 2.99 0 0 0-1.55-.42c-.56 0-1.073.137-1.54.41a3.48 3.48 0 0 0-1.16 1.11c-.3.46-.486.977-.56 1.55Zm9.895 5.71v-10h1.68v1.25c.354-.467.8-.837 1.34-1.11.54-.28 1.127-.42 1.76-.42.387 0 .76.05 1.12.15l-.68 1.68a2.676 2.676 0 0 0-2.18.24 2.74 2.74 0 0 0-.99.98c-.246.413-.37.873-.37 1.38v5.85h-1.68Zm11.021.26c-.92 0-1.76-.237-2.52-.71a5.332 5.332 0 0 1-1.81-1.9 5.35 5.35 0 0 1-.67-2.65c0-.733.13-1.417.39-2.05.26-.64.617-1.2 1.07-1.68.46-.487.994-.867 1.6-1.14a4.672 4.672 0 0 1 1.94-.41 4.64 4.64 0 0 1 2.07.46c.634.3 1.174.72 1.62 1.26.454.54.79 1.167 1.01 1.88.227.713.31 1.477.25 2.29h-8.16c.08.567.267 1.073.56 1.52.294.44.667.79 1.12 1.05.46.26.97.393 1.53.4.6 0 1.144-.153 1.63-.46.487-.313.88-.74 1.18-1.28l1.71.4a5.268 5.268 0 0 1-1.81 2.18 4.64 4.64 0 0 1-2.71.84Zm-3.26-5.97h6.52a3.268 3.268 0 0 0-.54-1.53 3.53 3.53 0 0 0-1.17-1.12c-.473-.28-.99-.42-1.55-.42s-1.073.137-1.54.41a3.488 3.488 0 0 0-1.16 1.11c-.3.46-.486.977-.56 1.55Z"
            />
          </svg>
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            fontFamily: "Urbanist",
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: "18px",
          }}
        >
          New Chat +
        </Button>
        <Box
          sx={{
            display: "flex", // Makes icons align horizontally
            alignItems: "center", // Centers icons vertically
            justifyContent: "space-between", // Centers icons horizontally
            gap: 2, // Adds space between icons
          }}
        >
          <IconButton color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <path
                fill="#64676C"
                d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
              />
            </svg>
          </IconButton>
          <IconButton color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <path
                fill="#64676C"
                d="M22 7.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
              />
              <path
                fill="#64676C"
                d="M10 10.75A4.26 4.26 0 0 1 5.75 6.5 4.26 4.26 0 0 1 10 2.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 10 10.75Zm0-7c-1.52 0-2.75 1.23-2.75 2.75S8.48 9.25 10 9.25s2.75-1.23 2.75-2.75S11.52 3.75 10 3.75ZM22 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 18.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
              />
              <path
                fill="#64676C"
                d="M14 21.75a4.26 4.26 0 0 1-4.25-4.25A4.26 4.26 0 0 1 14 13.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 14 21.75Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75Z"
              />
            </svg>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex", // Makes icons align horizontally
            alignItems: "center", // Centers icons vertically
            justifyContent: "space-between", // Centers icons horizontally
            gap: 2, // Adds space between icons
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              fontFamily: "Urbanist",
              fontWeight: 600,
              color: "#212529",
              fontSize: "18px",
            }}
          >
            Recent
          </Typography>

          <IconButton color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <path
                fill="#64676C"
                d="M9.522 18a.52.52 0 0 1-.37-.886l4.55-4.513a.847.847 0 0 0 0-1.204l-4.55-4.513a.52.52 0 0 1 0-.733.53.53 0 0 1 .74 0l4.55 4.512a1.878 1.878 0 0 1 0 2.672l-4.55 4.513a.55.55 0 0 1-.37.152Z"
              />
            </svg>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex", // Makes icons align horizontally
            alignItems: "start", // Centers icons vertically

            height: "40vh",
            overflowY: "scroll",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              fontFamily: "Urbanist",
              fontWeight: 600,
              color: "#212529",
              fontSize: 16,
            }}
          >
            Today
          </Typography>
          <List dense sx={{ m: 0 }}>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="What is AI assistant?" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="Best laptop brands and features" />
            </ListItem>
          </List>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              fontFamily: "Urbanist",
              fontWeight: 600,
              color: "#212529",
              fontSize: 16,
            }}
          >
            Yesterday
          </Typography>
          <List dense sx={{ m: 0 }}>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="What is AI assistant?" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="Best laptop brands and features" />
            </ListItem>
          </List>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              fontFamily: "Urbanist",
              fontWeight: 600,
              color: "#212529",
              fontSize: 16,
            }}
          >
            Last Week
          </Typography>
          <List dense sx={{ m: 0 }}>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="What is AI assistant?" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="Best laptop brands and features" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="What is AI assistant?" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="Best laptop brands and features" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="What is AI assistant?" />
            </ListItem>
            <ListItem
              sx={{ paddingLeft: 0, color: "#4A4C4D", fontFamily: "Urbanist" }}
            >
              <ListItemText primary="Best laptop brands and features" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <List sx={{ background: "#fff", borderRadius: "10px" }}>
          <ListItem>
            <Box sx={{ width: "100%" }}>
              <a
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
                    width={24}
                    height={24}
                    fill="none"
                  >
                    <path
                      fill="#4F4F4F"
                      d="M12 22.63c-.67 0-1.35-.15-1.88-.46L4.62 19c-2.24-1.51-2.38-1.74-2.38-4.11V9.11c0-2.37.13-2.6 2.33-4.09l5.54-3.2c1.05-.61 2.7-.61 3.75 0L19.38 5c2.24 1.51 2.38 1.74 2.38 4.11v5.77c0 2.37-.13 2.6-2.33 4.09l-5.54 3.2c-.54.31-1.22.46-1.89.46Zm0-19.76c-.42 0-.83.08-1.12.25L5.38 6.3C3.75 7.4 3.75 7.4 3.75 9.11v5.77c0 1.71 0 1.71 1.67 2.84l5.46 3.15c.59.34 1.66.34 2.25 0l5.5-3.18c1.62-1.1 1.62-1.1 1.62-2.81V9.11c0-1.71 0-1.71-1.67-2.84l-5.46-3.15c-.29-.17-.7-.25-1.12-.25Z"
                    />
                    <path
                      fill="#4F4F4F"
                      d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75Z"
                    />
                  </svg>
                  <Typography sx={{ paddingLeft: "10px" }}>
                    Preference
                  </Typography>
                </Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#64676C"
                    d="M9.522 18a.52.52 0 0 1-.37-.886l4.55-4.513a.847.847 0 0 0 0-1.204l-4.55-4.513a.52.52 0 0 1 0-.733.53.53 0 0 1 .74 0l4.55 4.512a1.878 1.878 0 0 1 0 2.672l-4.55 4.513a.55.55 0 0 1-.37.152Z"
                  />
                </svg>
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
                    width={24}
                    height={24}
                    fill="none"
                  >
                    <path
                      fill="#4F4F4F"
                      d="M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25Zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25Z"
                    />
                    <path
                      fill="#4F4F4F"
                      d="M12 10.25c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75s.75-.34.75-.75v-5c0-.41-.34-.75-.75-.75ZM12 7c-.13 0-.26.03-.38.08s-.23.12-.33.21c-.09.1-.16.2-.21.33-.05.12-.08.25-.08.38s.03.26.08.38.12.23.21.33c.1.09.21.16.33.21.24.1.52.1.76 0 .12-.05.23-.12.33-.21.09-.1.16-.21.21-.33.05-.12.08-.25.08-.38s-.03-.26-.08-.38c-.05-.13-.12-.23-.21-.33-.1-.09-.21-.16-.33-.21A.995.995 0 0 0 12 7Z"
                    />
                  </svg>
                  <Typography sx={{ paddingLeft: "10px" }}>
                    Help & Support
                  </Typography>
                </Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#64676C"
                    d="M9.522 18a.52.52 0 0 1-.37-.886l4.55-4.513a.847.847 0 0 0 0-1.204l-4.55-4.513a.52.52 0 0 1 0-.733.53.53 0 0 1 .74 0l4.55 4.512a1.878 1.878 0 0 1 0 2.672l-4.55 4.513a.55.55 0 0 1-.37.152Z"
                  />
                </svg>
              </a>
            </Box>
          </ListItem>
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
           
            border:"1px solid #FD7E1433",
            borderRadius:"10px",
            padding:"8px"
          }}
        >
          <Box sx={{marginLeft:"10px",marginRight:"10px",display:"flex",alignItems:"center"}}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 5.24998C11.9 5.24998 11.8 5.23998 11.71 5.21998C11.61 5.19998 11.52 5.16998 11.43 5.13998C11.34 5.09998 11.25 5.04998 11.17 4.99998C11.09 4.93998 11.01 4.87997 10.94 4.80997C10.66 4.52997 10.5 4.14998 10.5 3.74998C10.5 3.34998 10.66 2.96998 10.94 2.68998C11.01 2.61998 11.09 2.55998 11.17 2.49998C11.25 2.44998 11.34 2.39997 11.43 2.36997C11.52 2.32997 11.61 2.29997 11.71 2.27997C12.19 2.17997 12.71 2.33998 13.06 2.68998C13.34 2.96998 13.5 3.34998 13.5 3.74998C13.5 4.14998 13.34 4.52997 13.06 4.80997C12.78 5.08997 12.39 5.24998 12 5.24998Z"
              fill="#007BFF"
            />
            <path
              d="M12 9.75C11.9 9.75 11.8 9.74 11.71 9.72C11.61 9.7 11.52 9.67 11.43 9.64C11.34 9.6 11.25 9.55 11.17 9.5C11.09 9.44 11.01 9.38 10.94 9.31C10.66 9.03 10.5 8.65 10.5 8.25C10.5 7.85 10.66 7.47 10.94 7.19C11.01 7.12 11.09 7.06 11.17 7C11.25 6.95 11.34 6.9 11.43 6.87C11.52 6.83 11.61 6.8 11.71 6.78C11.9 6.74 12.1 6.74 12.29 6.78C12.39 6.8 12.48 6.83 12.57 6.87C12.66 6.9 12.75 6.95 12.83 7C12.91 7.06 12.99 7.12 13.06 7.19C13.34 7.47 13.5 7.85 13.5 8.25C13.5 8.65 13.34 9.03 13.06 9.31C12.99 9.38 12.91 9.44 12.83 9.5C12.75 9.55 12.66 9.6 12.57 9.64C12.48 9.67 12.39 9.7 12.29 9.72C12.2 9.74 12.1 9.75 12 9.75Z"
              fill="#007BFF"
            />
            <path
              d="M12 13.75C11.9 13.75 11.8 13.74 11.71 13.72C11.61 13.7 11.52 13.67 11.43 13.64C11.34 13.6 11.25 13.55 11.17 13.5C11.09 13.44 11.01 13.38 10.94 13.31C10.87 13.24 10.81 13.17 10.75 13.08C10.7 13 10.65 12.91 10.61 12.82C10.58 12.73 10.55 12.64 10.53 12.54C10.51 12.45 10.5 12.35 10.5 12.25C10.5 11.85 10.66 11.47 10.94 11.19C11.01 11.12 11.09 11.06 11.17 11C11.25 10.95 11.34 10.9 11.43 10.86C11.52 10.83 11.61 10.8 11.71 10.78C12.19 10.68 12.71 10.84 13.06 11.19C13.34 11.47 13.5 11.85 13.5 12.25C13.5 12.35 13.49 12.45 13.47 12.54C13.45 12.64 13.42 12.73 13.38 12.82C13.35 12.91 13.3 13 13.25 13.08C13.19 13.17 13.13 13.24 13.06 13.31C12.99 13.38 12.91 13.44 12.83 13.5C12.75 13.55 12.66 13.6 12.57 13.64C12.48 13.67 12.39 13.7 12.29 13.72C12.2 13.74 12.1 13.75 12 13.75Z"
              fill="#007BFF"
            />
            <path
              d="M12 17.25C11.74 17.25 11.48 17.14 11.29 16.96C11.11 16.77 11 16.51 11 16.25C11 15.99 11.11 15.73 11.29 15.54C11.52 15.31 11.87 15.21 12.19 15.27C12.26 15.28 12.32 15.3 12.38 15.33C12.44 15.35 12.5 15.38 12.55 15.42C12.61 15.46 12.66 15.5 12.71 15.54C12.89 15.73 13 15.99 13 16.25C13 16.51 12.89 16.77 12.71 16.96C12.66 17 12.61 17.04 12.55 17.08C12.5 17.12 12.44 17.15 12.38 17.17C12.32 17.2 12.26 17.22 12.19 17.23C12.13 17.24 12.06 17.25 12 17.25Z"
              fill="#007BFF"
            />
            <path
              d="M12 20.5C11.9 20.5 11.8 20.48 11.71 20.44C11.62 20.4 11.54 20.35 11.47 20.28C11.4 20.21 11.34 20.13 11.31 20.04C11.27 19.95 11.25 19.85 11.25 19.75C11.25 19.55 11.33 19.36 11.47 19.22C11.54 19.15 11.62 19.1 11.71 19.06C11.9 18.98 12.1 18.98 12.29 19.06C12.38 19.1 12.46 19.15 12.53 19.22C12.6 19.29 12.65 19.37 12.69 19.46C12.73 19.55 12.75 19.65 12.75 19.75C12.75 19.85 12.73 19.95 12.69 20.04C12.65 20.13 12.6 20.21 12.53 20.28C12.46 20.35 12.38 20.4 12.29 20.44C12.19 20.48 12.1 20.5 12 20.5Z"
              fill="#007BFF"
            />
            <path
              d="M12 22.57C11.87 22.57 11.74 22.52 11.65 22.42C11.55 22.33 11.5 22.2 11.5 22.07C11.5 21.94 11.55 21.81 11.65 21.72C11.83 21.53 12.17 21.53 12.35 21.72C12.45 21.81 12.5 21.94 12.5 22.07C12.5 22.2 12.45 22.33 12.35 22.42C12.26 22.52 12.13 22.57 12 22.57Z"
              fill="#007BFF"
            />
            <path
              d="M3.5 9.75002C3.1 9.75002 2.72 9.59001 2.44 9.31001C2.16 9.03001 2 8.65002 2 8.25002C2 7.86002 2.16 7.47002 2.44 7.19002C2.99 6.63002 4 6.63002 4.56 7.19002C4.84 7.47002 5 7.86002 5 8.25002C5 8.65002 4.84 9.03001 4.56 9.31001C4.49 9.38001 4.41002 9.44002 4.33002 9.50002C4.25002 9.55002 4.16001 9.60002 4.07001 9.63002C3.98001 9.67002 3.88998 9.70002 3.78998 9.72002C3.69998 9.74002 3.6 9.75002 3.5 9.75002Z"
              fill="#007BFF"
            />
            <path
              d="M20.5 9.75C20.11 9.75 19.72 9.59 19.44 9.31C19.16 9.03 19 8.64 19 8.25C19 8.15 19.01 8.05001 19.03 7.96001C19.05 7.86001 19.08 7.76999 19.11 7.67999C19.15 7.58999 19.2 7.5 19.25 7.42C19.31 7.34 19.37 7.26 19.44 7.19C19.51 7.12 19.59 7.06 19.67 7C19.75 6.95 19.84 6.9 19.93 6.87C20.02 6.83 20.11 6.8 20.21 6.78C20.4 6.74 20.6 6.74 20.79 6.78C20.89 6.8 20.98 6.83 21.07 6.87C21.16 6.9 21.25 6.95 21.33 7C21.41 7.06 21.49 7.12 21.56 7.19C21.63 7.26 21.69 7.34 21.75 7.42C21.8 7.5 21.85 7.58999 21.88 7.67999C21.92 7.76999 21.95 7.86001 21.97 7.96001C21.99 8.05001 22 8.15 22 8.25C22 8.65 21.84 9.03 21.56 9.31C21.49 9.38 21.41 9.44 21.33 9.5C21.25 9.55 21.16 9.6 21.07 9.64C20.98 9.67 20.89 9.7 20.79 9.72C20.69 9.74 20.6 9.75 20.5 9.75Z"
              fill="#007BFF"
            />
            <path
              d="M20.5 13.2501C20.44 13.2501 20.37 13.2401 20.31 13.2301C20.24 13.2201 20.18 13.2001 20.12 13.1701C20.06 13.1501 20 13.1201 19.94 13.0801C19.89 13.0501 19.84 13.0001 19.79 12.9601C19.75 12.9101 19.7 12.8601 19.67 12.8101C19.63 12.7501 19.6 12.6901 19.58 12.6301C19.55 12.5701 19.53 12.5101 19.52 12.4501C19.51 12.3801 19.5 12.3201 19.5 12.2501C19.5 11.9901 19.61 11.73 19.79 11.54C19.84 11.5 19.89 11.4601 19.94 11.4201C20 11.3801 20.06 11.3501 20.12 11.3301C20.18 11.3001 20.24 11.2801 20.31 11.2701C20.43 11.2401 20.56 11.2401 20.69 11.2701C20.76 11.2801 20.82 11.3001 20.88 11.3301C20.94 11.3501 21 11.3801 21.05 11.4201C21.11 11.4601 21.16 11.5 21.21 11.54C21.39 11.73 21.5 11.9901 21.5 12.2501C21.5 12.3201 21.49 12.3801 21.48 12.4501C21.47 12.5101 21.45 12.5701 21.42 12.6301C21.4 12.6901 21.37 12.7501 21.33 12.8101C21.29 12.8601 21.25 12.9101 21.21 12.9601C21.16 13.0001 21.11 13.0501 21.05 13.0801C21 13.1201 20.94 13.1501 20.88 13.1701C20.82 13.2001 20.76 13.2201 20.69 13.2301C20.63 13.2401 20.56 13.2501 20.5 13.2501Z"
              fill="#007BFF"
            />
            <path
              d="M3.5 13.25C3.24 13.25 2.97998 13.14 2.78998 12.96C2.60998 12.77 2.5 12.51 2.5 12.25C2.5 11.99 2.60998 11.73 2.78998 11.54C3.06998 11.26 3.51 11.17 3.88 11.33C4.01 11.38 4.11002 11.45 4.21002 11.54C4.39002 11.73 4.5 11.99 4.5 12.25C4.5 12.51 4.39002 12.77 4.21002 12.96C4.02002 13.14 3.76 13.25 3.5 13.25Z"
              fill="#007BFF"
            />
            <path
              d="M20.5 16C20.3 16 20.11 15.92 19.97 15.78C19.83 15.64 19.75 15.45 19.75 15.25C19.75 15.15 19.77 15.06 19.81 14.96C19.85 14.87 19.9 14.79 19.97 14.72C20.18 14.51 20.51 14.44 20.79 14.56C20.88 14.6 20.96 14.65 21.03 14.72C21.1 14.79 21.15 14.87 21.19 14.96C21.23 15.06 21.25 15.15 21.25 15.25C21.25 15.45 21.17 15.64 21.03 15.78C20.96 15.85 20.88 15.9 20.79 15.94C20.69 15.98 20.6 16 20.5 16Z"
              fill="#007BFF"
            />
            <path
              d="M3.5 16C3.3 16 3.10997 15.92 2.96997 15.78C2.89997 15.71 2.84 15.63 2.81 15.54C2.77 15.45 2.75 15.35 2.75 15.25C2.75 15.15 2.77 15.06 2.81 14.96C2.84 14.87 2.89997 14.79 2.96997 14.72C3.23997 14.44 3.75003 14.44 4.03003 14.72C4.10003 14.79 4.15 14.87 4.19 14.96C4.23 15.06 4.25 15.15 4.25 15.25C4.25 15.35 4.23 15.45 4.19 15.54C4.15 15.63 4.10003 15.71 4.03003 15.78C3.89003 15.92 3.7 16 3.5 16Z"
              fill="#007BFF"
            />
            <path
              d="M20.5 18.5C20.43 18.5 20.37 18.49 20.31 18.46C20.25 18.44 20.19 18.4 20.15 18.35C20.05 18.26 20 18.13 20 18C20 17.87 20.05 17.7399 20.15 17.6499C20.33 17.4599 20.67 17.4599 20.85 17.6499C20.95 17.7399 21 17.87 21 18C21 18.13 20.95 18.26 20.85 18.35C20.76 18.45 20.63 18.5 20.5 18.5Z"
              fill="#007BFF"
            />
            <path
              d="M3.5 18.5C3.37 18.5 3.24002 18.45 3.15002 18.35C3.05002 18.26 3 18.13 3 18C3 17.87 3.05002 17.7399 3.15002 17.6499C3.33002 17.4599 3.66998 17.4599 3.84998 17.6499C3.94998 17.7399 4 17.87 4 18C4 18.13 3.94998 18.26 3.84998 18.35C3.75998 18.45 3.63 18.5 3.5 18.5Z"
              fill="#007BFF"
            />
            <path
              d="M7.75 7.50002C7.65 7.50002 7.55002 7.49002 7.46002 7.47002C7.36002 7.45002 7.26999 7.42002 7.17999 7.38002C7.07999 7.35002 6.99998 7.30002 6.91998 7.25002C6.82998 7.19002 6.76 7.13001 6.69 7.06001C6.41 6.78001 6.25 6.39002 6.25 6.00002C6.25 5.61002 6.41 5.22002 6.69 4.94002C7.25 4.38002 8.25 4.38002 8.81 4.94002C9.09 5.22002 9.25 5.60002 9.25 6.00002C9.25 6.40002 9.09 6.78001 8.81 7.06001C8.74 7.13001 8.66002 7.19002 8.58002 7.25002C8.50002 7.30002 8.41001 7.35002 8.32001 7.38002C8.23001 7.42002 8.13998 7.45002 8.03998 7.47002C7.94998 7.49002 7.85 7.50002 7.75 7.50002Z"
              fill="#007BFF"
            />
            <path
              d="M16.25 7.5C16.15 7.5 16.05 7.49 15.96 7.47C15.86 7.45 15.77 7.42001 15.68 7.38001C15.59 7.35001 15.5 7.3 15.42 7.25C15.34 7.19 15.26 7.13 15.19 7.06C15.12 6.99 15.06 6.91 15 6.83C14.95 6.75 14.9 6.66001 14.86 6.57001C14.83 6.48001 14.8 6.38999 14.78 6.28999C14.76 6.19999 14.75 6.1 14.75 6C14.75 5.61 14.91 5.22 15.19 4.94C15.26 4.87 15.34 4.81 15.42 4.75C15.5 4.7 15.59 4.65 15.68 4.62C15.77 4.58 15.86 4.55 15.96 4.53C16.15 4.49 16.35 4.49 16.54 4.53C16.64 4.55 16.73 4.58 16.82 4.62C16.91 4.65 17 4.7 17.08 4.75C17.16 4.81 17.24 4.87 17.31 4.94C17.59 5.22 17.75 5.61 17.75 6C17.75 6.1 17.74 6.19999 17.72 6.28999C17.7 6.38999 17.67 6.48001 17.64 6.57001C17.6 6.66001 17.55 6.75 17.5 6.83C17.44 6.91 17.38 6.99 17.31 7.06C17.24 7.13 17.16 7.19 17.08 7.25C17 7.3 16.91 7.35001 16.82 7.38001C16.73 7.42001 16.64 7.45 16.54 7.47C16.45 7.49 16.35 7.5 16.25 7.5Z"
              fill="#007BFF"
            />
            <path
              d="M7.75 11.75C7.65 11.75 7.55002 11.74 7.46002 11.72C7.36002 11.7 7.26999 11.67 7.17999 11.64C7.08999 11.6 6.99998 11.55 6.91998 11.5C6.82998 11.44 6.76 11.38 6.69 11.31C6.41 11.03 6.25 10.64 6.25 10.25C6.25 9.85002 6.41 9.47002 6.69 9.19002C7.25 8.63002 8.25 8.63002 8.81 9.19002C9.09 9.47002 9.25 9.85002 9.25 10.25C9.25 10.65 9.09 11.03 8.81 11.31C8.53 11.59 8.14 11.75 7.75 11.75Z"
              fill="#007BFF"
            />
            <path
              d="M16.25 11.75C16.15 11.75 16.05 11.74 15.96 11.72C15.86 11.7 15.77 11.67 15.68 11.63C15.59 11.6 15.5 11.55 15.42 11.5C15.34 11.44 15.26 11.38 15.19 11.31C15.12 11.24 15.06 11.16 15 11.08C14.95 11 14.9 10.91 14.86 10.82C14.83 10.73 14.8 10.64 14.78 10.54C14.76 10.45 14.75 10.35 14.75 10.25C14.75 9.86 14.91 9.47 15.19 9.19C15.26 9.12 15.34 9.06 15.42 9C15.5 8.95 15.59 8.9 15.68 8.87C15.77 8.83 15.86 8.8 15.96 8.78C16.15 8.74 16.35 8.74 16.54 8.78C16.64 8.8 16.73 8.83 16.82 8.87C16.91 8.9 17 8.95 17.08 9C17.16 9.06 17.24 9.12 17.31 9.19C17.59 9.47 17.75 9.86 17.75 10.25C17.75 10.35 17.74 10.45 17.72 10.54C17.7 10.64 17.67 10.73 17.64 10.82C17.6 10.91 17.55 11 17.5 11.08C17.44 11.16 17.38 11.24 17.31 11.31C17.24 11.38 17.16 11.44 17.08 11.5C17 11.55 16.91 11.6 16.82 11.63C16.73 11.67 16.64 11.7 16.54 11.72C16.45 11.74 16.35 11.75 16.25 11.75Z"
              fill="#007BFF"
            />
            <path
              d="M7.75 15.25C7.62 15.25 7.49 15.22 7.37 15.17C7.24 15.12 7.12998 15.05 7.03998 14.96C6.94998 14.86 6.88002 14.75 6.83002 14.63C6.78002 14.51 6.75 14.38 6.75 14.25C6.75 13.99 6.85998 13.73 7.03998 13.54C7.40998 13.17 8.09002 13.17 8.46002 13.54C8.64002 13.73 8.75 13.99 8.75 14.25C8.75 14.38 8.71998 14.51 8.66998 14.63C8.61998 14.75 8.55002 14.86 8.46002 14.96C8.27002 15.14 8.01 15.25 7.75 15.25Z"
              fill="#007BFF"
            />
            <path
              d="M16.25 15.25C15.99 15.25 15.73 15.14 15.54 14.96C15.36 14.77 15.25 14.51 15.25 14.25C15.25 13.99 15.36 13.73 15.54 13.54C15.91 13.17 16.58 13.17 16.96 13.54C17.14 13.73 17.25 13.99 17.25 14.25C17.25 14.32 17.24 14.38 17.23 14.45C17.22 14.51 17.2 14.57 17.17 14.63C17.15 14.69 17.12 14.75 17.08 14.8C17.04 14.86 17 14.91 16.96 14.96C16.77 15.14 16.51 15.25 16.25 15.25Z"
              fill="#007BFF"
            />
            <path
              d="M7.75 18.25C7.55 18.25 7.35997 18.17 7.21997 18.03C7.14997 17.96 7.1 17.88 7.06 17.79C7.02 17.7 7 17.6 7 17.5C7 17.4 7.02 17.31 7.06 17.21C7.1 17.12 7.14997 17.04 7.21997 16.97C7.28997 16.9 7.37002 16.85 7.46002 16.81C7.64002 16.73 7.84998 16.73 8.03998 16.81C8.12998 16.85 8.21003 16.9 8.28003 16.97C8.42003 17.11 8.5 17.3 8.5 17.5C8.5 17.6 8.48 17.7 8.44 17.79C8.4 17.88 8.35003 17.96 8.28003 18.03C8.14003 18.17 7.95 18.25 7.75 18.25Z"
              fill="#007BFF"
            />
            <path
              d="M16.25 18.25C16.15 18.25 16.05 18.23 15.96 18.19C15.87 18.15 15.79 18.1 15.72 18.03C15.65 17.96 15.59 17.88 15.56 17.79C15.52 17.7 15.5 17.6 15.5 17.5C15.5 17.4 15.52 17.3 15.56 17.21C15.6 17.12 15.65 17.04 15.72 16.97C15.79 16.9 15.87 16.85 15.96 16.81C16.14 16.73 16.35 16.73 16.54 16.81C16.63 16.85 16.71 16.9 16.78 16.97C16.85 17.04 16.9 17.12 16.94 17.21C16.98 17.3 17 17.4 17 17.5C17 17.6 16.98 17.7 16.94 17.79C16.9 17.88 16.85 17.96 16.78 18.03C16.64 18.17 16.45 18.25 16.25 18.25Z"
              fill="#007BFF"
            />
            <path
              d="M7.75 20.5C7.62 20.5 7.49002 20.45 7.40002 20.35C7.30002 20.26 7.25 20.13 7.25 20C7.25 19.87 7.30002 19.7399 7.40002 19.6499C7.58002 19.4599 7.91998 19.4599 8.09998 19.6499C8.19998 19.7399 8.25 19.87 8.25 20C8.25 20.13 8.19998 20.26 8.09998 20.35C8.00998 20.45 7.88 20.5 7.75 20.5Z"
              fill="#007BFF"
            />
            <path
              d="M16.25 20.5C16.18 20.5 16.12 20.49 16.06 20.46C16 20.44 15.94 20.4 15.9 20.35C15.85 20.31 15.81 20.25 15.79 20.19C15.76 20.13 15.75 20.07 15.75 20C15.75 19.87 15.8 19.7399 15.9 19.6499C16.08 19.4599 16.42 19.4599 16.6 19.6499C16.7 19.7399 16.75 19.87 16.75 20C16.75 20.07 16.74 20.13 16.71 20.19C16.69 20.25 16.65 20.31 16.6 20.35C16.51 20.45 16.38 20.5 16.25 20.5Z"
              fill="#007BFF"
            />
          </svg>
          <Box sx={{marginLeft:"10px"}}>
          <Typography sx={{fontWeight:"600"}}>Basic Plan</Typography>
          <Typography sx={{fontSize:12,color:"#6C757D"}}>20/20 left credit</Typography>

          </Box>          
          </Box>

          <Button variant="contained" sx={{
            background:"#FD7E14",
            padding:"4px 12px",
            textTransform:"capitalize"
          }}  size="small">
            Upgrade
          </Button>
        </Box>
      </Box>
    </Box>
  );
}