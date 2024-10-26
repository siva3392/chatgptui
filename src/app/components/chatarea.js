// components/ChatArea.js
import { Box, Typography, CircularProgress } from "@mui/material";
import InputArea from './inputarea';
export default function ChatArea() {
  return (
    <Box
      sx={{
        m: 4,
        flex: 1,

        display: "flex",
        flexDirection: "column",
        border: "1px solid #E9ECEF",
        borderRadius: "15px",
        background: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #E9ECEF",
          p: { xs: 2, md: 2 },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
        >
          <path
            fill="#4F4F4F"
            d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
          />
          <path
            fill="#4F4F4F"
            d="M6 18.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l12-12c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-12 12c-.15.15-.34.22-.53.22Z"
          />
          <path
            fill="#4F4F4F"
            d="M18 10.75c-.41 0-.75-.34-.75-.75V6.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75ZM10 18.75H6c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H10c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          />
        </svg>
        <Typography variant="h6" sx={{ color: "#212529", fontWeight: 600 }}>
          Welcome back, John Doe
        </Typography>
        <Box sx={{ position: "relative" }}>
          <img
            style={{ width: "40px", height: "40px", borderRadius: "40px" }}
            src="https://images.pexels.com/photos/27893233/pexels-photo-27893233/free-photo-of-woman-in-shirt-photographing-with-digital-camera.jpeg"
          />
          <svg
            style={{ position: "absolute", bottom: 0, right: "-7px" }}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
          >
            <rect width={20} height={20} fill="#fff" rx={10} />
            <rect
              width={19}
              height={19}
              x={0.5}
              y={0.5}
              stroke="#FD7E14"
              strokeOpacity={0.2}
              rx={9.5}
            />
            <path
              fill="#FD7E14"
              d="m14.893 11.66-.667-1.107a2.477 2.477 0 0 1-.266-.986V7.88a3.94 3.94 0 0 0-2.247-3.553 1.95 1.95 0 0 0-1.72-.994c-.727 0-1.38.394-1.727 1.014a3.952 3.952 0 0 0-2.2 3.533v1.687c0 .273-.126.74-.266.98l-.674 1.113c-.266.447-.326.94-.16 1.393.16.447.54.794 1.034.96 1.293.44 2.653.654 4.013.654 1.36 0 2.72-.214 4.014-.647a1.6 1.6 0 0 0 1-.967c.173-.46.126-.966-.134-1.393ZM11.887 15.34A2.01 2.01 0 0 1 10 16.667a1.977 1.977 0 0 1-1.413-.594 1.84 1.84 0 0 1-.467-.74c.087.014.173.02.267.034a13.202 13.202 0 0 0 1.627.107c.38 0 .76-.02 1.133-.054.14-.013.28-.02.413-.04l.327-.04Z"
            />
          </svg>
        </Box>
      </Box>
      <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={108}
          height={108}
          fill="none"
        >
          <path
            fill="#007BFF"
            d="M54 21.375c-.45 0-.9-.045-1.305-.135-.45-.09-.855-.225-1.26-.36a9.668 9.668 0 0 1-1.17-.63c-.36-.27-.72-.54-1.035-.855a6.743 6.743 0 0 1-1.98-4.77c0-1.8.72-3.51 1.98-4.77.315-.315.675-.585 1.035-.855.36-.225.765-.45 1.17-.585a5.89 5.89 0 0 1 1.26-.405c2.16-.45 4.5.27 6.075 1.845a6.743 6.743 0 0 1 1.98 4.77c0 1.8-.72 3.51-1.98 4.77a6.823 6.823 0 0 1-4.77 1.98ZM54 41.625c-.45 0-.9-.045-1.305-.135-.45-.09-.855-.225-1.26-.36a9.668 9.668 0 0 1-1.17-.63c-.36-.27-.72-.54-1.035-.855a6.743 6.743 0 0 1-1.98-4.77c0-1.8.72-3.51 1.98-4.77.315-.315.675-.585 1.035-.855.36-.225.765-.45 1.17-.585a6.374 6.374 0 0 1 5.13 0c.405.135.81.36 1.17.585.36.27.72.54 1.035.855a6.743 6.743 0 0 1 1.98 4.77c0 1.8-.72 3.51-1.98 4.77-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.63-.405.135-.81.27-1.26.36-.405.09-.855.135-1.305.135ZM54 59.625c-.45 0-.9-.045-1.305-.135-.45-.09-.855-.225-1.26-.36a9.668 9.668 0 0 1-1.17-.63c-.36-.27-.72-.54-1.035-.855a6.543 6.543 0 0 1-.855-1.035 9.666 9.666 0 0 1-.63-1.17c-.135-.405-.27-.81-.36-1.26a6.109 6.109 0 0 1-.135-1.305c0-1.8.72-3.51 1.98-4.77.315-.315.675-.585 1.035-.855.36-.225.765-.45 1.17-.63.405-.135.81-.27 1.26-.36 2.16-.45 4.5.27 6.075 1.845a6.743 6.743 0 0 1 1.98 4.77c0 .45-.045.9-.135 1.305a5.89 5.89 0 0 1-.405 1.26c-.135.405-.36.81-.585 1.17-.27.405-.54.72-.855 1.035-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.63-.405.135-.81.27-1.26.36-.405.09-.855.135-1.305.135ZM54 75.375c-1.17 0-2.34-.495-3.195-1.305-.81-.855-1.305-2.025-1.305-3.195s.495-2.34 1.305-3.195c1.035-1.035 2.61-1.485 4.05-1.215.315.045.585.135.855.27.27.09.54.225.765.405.27.18.495.36.72.54.81.855 1.305 2.025 1.305 3.195s-.495 2.34-1.305 3.195c-.225.18-.45.36-.72.54-.225.18-.495.315-.765.405-.27.135-.54.225-.855.27-.27.045-.585.09-.855.09ZM54 90c-.45 0-.9-.09-1.305-.27a3.493 3.493 0 0 1-1.08-.72c-.315-.315-.585-.675-.72-1.08a3.228 3.228 0 0 1-.27-1.305c0-.9.36-1.755.99-2.385.315-.315.675-.54 1.08-.72a3.288 3.288 0 0 1 2.61 0c.405.18.765.405 1.08.72.315.315.54.675.72 1.08.18.405.27.855.27 1.305 0 .45-.09.9-.27 1.305-.18.405-.405.765-.72 1.08-.315.315-.675.54-1.08.72-.45.18-.855.27-1.305.27ZM54 99.315c-.585 0-1.17-.225-1.575-.675-.45-.405-.675-.99-.675-1.575s.225-1.17.675-1.575c.81-.855 2.34-.855 3.15 0 .45.405.675.99.675 1.575s-.225 1.17-.675 1.575c-.405.45-.99.675-1.575.675ZM15.75 41.625c-1.8 0-3.51-.72-4.77-1.98A6.743 6.743 0 0 1 9 34.875c0-1.755.72-3.51 1.98-4.77 2.475-2.52 7.02-2.52 9.54 0a6.823 6.823 0 0 1 1.98 4.77c0 1.8-.72 3.51-1.98 4.77-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.585a5.89 5.89 0 0 1-1.26.405c-.405.09-.855.135-1.305.135ZM92.25 41.625c-1.755 0-3.51-.72-4.77-1.98a6.823 6.823 0 0 1-1.98-4.77c0-.45.045-.9.135-1.305.09-.45.225-.855.36-1.26.18-.405.405-.81.63-1.17.27-.36.54-.72.855-1.035.315-.315.675-.585 1.035-.855.36-.225.765-.45 1.17-.585a6.374 6.374 0 0 1 5.13 0c.405.135.81.36 1.17.585.36.27.72.54 1.035.855.315.315.585.675.855 1.035.225.36.45.765.585 1.17.18.405.315.81.405 1.26.09.405.135.855.135 1.305 0 1.8-.72 3.51-1.98 4.77-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.63-.405.135-.81.27-1.26.36-.45.09-.855.135-1.305.135ZM92.25 57.375c-.27 0-.585-.045-.855-.09a2.715 2.715 0 0 1-.855-.27c-.27-.09-.54-.225-.81-.405-.225-.135-.45-.36-.675-.54-.18-.225-.405-.45-.54-.675-.18-.27-.315-.54-.405-.81a2.86 2.86 0 0 1-.27-.81c-.045-.315-.09-.585-.09-.9 0-1.17.495-2.34 1.305-3.195l.675-.54c.27-.18.54-.315.81-.405.27-.135.54-.225.855-.27a3.66 3.66 0 0 1 1.71 0c.315.045.585.135.855.27.27.09.54.225.765.405.27.18.495.36.72.54.81.855 1.305 2.025 1.305 3.195 0 .315-.045.585-.09.9a2.86 2.86 0 0 1-.27.81c-.09.27-.225.54-.405.81l-.54.675c-.225.18-.45.405-.72.54a2.5 2.5 0 0 1-.765.405c-.27.135-.54.225-.855.27-.27.045-.585.09-.855.09ZM15.75 57.375c-1.17 0-2.34-.495-3.195-1.305-.81-.855-1.305-2.025-1.305-3.195s.495-2.34 1.305-3.195c1.26-1.26 3.24-1.665 4.905-.945.585.225 1.035.54 1.485.945.81.855 1.305 2.025 1.305 3.195s-.495 2.34-1.305 3.195c-.855.81-2.025 1.305-3.195 1.305ZM92.25 69.75c-.9 0-1.755-.36-2.385-.99a3.372 3.372 0 0 1-.99-2.385c0-.45.09-.855.27-1.305.18-.405.405-.765.72-1.08.945-.945 2.43-1.26 3.69-.72.405.18.765.405 1.08.72.315.315.54.675.72 1.08.18.45.27.855.27 1.305 0 .9-.36 1.755-.99 2.385-.315.315-.675.54-1.08.72-.45.18-.855.27-1.305.27ZM15.75 69.75c-.9 0-1.755-.36-2.385-.99-.315-.315-.585-.675-.72-1.08a3.228 3.228 0 0 1-.27-1.305c0-.45.09-.855.27-1.305.135-.405.405-.765.72-1.08 1.215-1.26 3.51-1.26 4.77 0 .315.315.54.675.72 1.08.18.45.27.855.27 1.305 0 .45-.09.9-.27 1.305-.18.405-.405.765-.72 1.08-.63.63-1.485.99-2.385.99ZM92.25 81c-.315 0-.585-.045-.855-.18-.27-.09-.54-.27-.72-.495-.45-.405-.675-.99-.675-1.575s.225-1.17.675-1.575c.81-.855 2.34-.855 3.15 0 .45.405.675.99.675 1.575s-.225 1.17-.675 1.575c-.405.45-.99.675-1.575.675ZM15.75 81c-.585 0-1.17-.225-1.575-.675-.45-.405-.675-.99-.675-1.575s.225-1.17.675-1.575c.81-.855 2.34-.855 3.15 0 .45.405.675.99.675 1.575s-.225 1.17-.675 1.575c-.405.45-.99.675-1.575.675ZM34.875 31.5c-.45 0-.9-.045-1.305-.135a5.89 5.89 0 0 1-1.26-.405c-.45-.135-.81-.36-1.17-.585a6.823 6.823 0 0 1-3.015-5.625c0-1.755.72-3.51 1.98-4.77 2.52-2.52 7.02-2.52 9.54 0a6.743 6.743 0 0 1 1.98 4.77c0 1.8-.72 3.51-1.98 4.77-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.585a5.89 5.89 0 0 1-1.26.405c-.405.09-.855.135-1.305.135ZM73.125 31.5c-.45 0-.9-.045-1.305-.135a5.89 5.89 0 0 1-1.26-.405c-.405-.135-.81-.36-1.17-.585-.36-.27-.72-.54-1.035-.855-.315-.315-.585-.675-.855-1.035a9.667 9.667 0 0 1-.63-1.17c-.135-.405-.27-.81-.36-1.26a6.109 6.109 0 0 1-.135-1.305c0-1.755.72-3.51 1.98-4.77.315-.315.675-.585 1.035-.855.36-.225.765-.45 1.17-.585a6.374 6.374 0 0 1 5.13 0c.405.135.81.36 1.17.585.36.27.72.54 1.035.855a6.823 6.823 0 0 1 1.98 4.77c0 .45-.045.9-.135 1.305-.09.45-.225.855-.36 1.26-.18.405-.405.81-.63 1.17-.27.36-.54.72-.855 1.035-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.585a5.89 5.89 0 0 1-1.26.405c-.405.09-.855.135-1.305.135ZM34.875 50.625c-.45 0-.9-.045-1.305-.135-.45-.09-.855-.225-1.26-.36a9.668 9.668 0 0 1-1.17-.63 6.823 6.823 0 0 1-3.015-5.625c0-1.8.72-3.51 1.98-4.77 2.52-2.52 7.02-2.52 9.54 0a6.743 6.743 0 0 1 1.98 4.77c0 1.8-.72 3.51-1.98 4.77a6.823 6.823 0 0 1-4.77 1.98ZM73.125 50.625c-.45 0-.9-.045-1.305-.135a5.89 5.89 0 0 1-1.26-.405c-.405-.135-.81-.36-1.17-.585-.36-.27-.72-.54-1.035-.855-.315-.315-.585-.675-.855-1.035a9.667 9.667 0 0 1-.63-1.17c-.135-.405-.27-.81-.36-1.26a6.109 6.109 0 0 1-.135-1.305c0-1.755.72-3.51 1.98-4.77.315-.315.675-.585 1.035-.855.36-.225.765-.45 1.17-.585a6.374 6.374 0 0 1 5.13 0c.405.135.81.36 1.17.585.36.27.72.54 1.035.855a6.823 6.823 0 0 1 1.98 4.77c0 .45-.045.9-.135 1.305-.09.45-.225.855-.36 1.26-.18.405-.405.81-.63 1.17-.27.36-.54.72-.855 1.035-.315.315-.675.585-1.035.855-.36.225-.765.45-1.17.585a5.89 5.89 0 0 1-1.26.405c-.405.09-.855.135-1.305.135ZM34.875 66.375a4.48 4.48 0 0 1-1.71-.36 4.2 4.2 0 0 1-1.485-.945 5.196 5.196 0 0 1-.945-1.485 4.48 4.48 0 0 1-.36-1.71c0-1.17.495-2.34 1.305-3.195 1.665-1.665 4.725-1.665 6.39 0 .81.855 1.305 2.025 1.305 3.195a4.48 4.48 0 0 1-.36 1.71 5.196 5.196 0 0 1-.945 1.485c-.855.81-2.025 1.305-3.195 1.305ZM73.125 66.375c-1.17 0-2.34-.495-3.195-1.305-.81-.855-1.305-2.025-1.305-3.195s.495-2.34 1.305-3.195c1.665-1.665 4.68-1.665 6.39 0 .81.855 1.305 2.025 1.305 3.195 0 .315-.045.585-.09.9a2.86 2.86 0 0 1-.27.81c-.09.27-.225.54-.405.765-.18.27-.36.495-.54.72-.855.81-2.025 1.305-3.195 1.305ZM34.875 79.875c-.9 0-1.755-.36-2.385-.99a3.491 3.491 0 0 1-.72-1.08 3.228 3.228 0 0 1-.27-1.305c0-.45.09-.855.27-1.305.18-.405.405-.765.72-1.08.315-.315.675-.54 1.08-.72.81-.36 1.755-.36 2.61 0 .405.18.765.405 1.08.72.63.63.99 1.485.99 2.385 0 .45-.09.9-.27 1.305-.18.405-.405.765-.72 1.08-.63.63-1.485.99-2.385.99ZM73.125 79.875c-.45 0-.9-.09-1.305-.27a3.493 3.493 0 0 1-1.08-.72c-.315-.315-.585-.675-.72-1.08a3.228 3.228 0 0 1-.27-1.305c0-.45.09-.9.27-1.305.18-.405.405-.765.72-1.08.315-.315.675-.54 1.08-.72.81-.36 1.755-.36 2.61 0 .405.18.765.405 1.08.72.315.315.54.675.72 1.08.18.405.27.855.27 1.305 0 .45-.09.9-.27 1.305-.18.405-.405.765-.72 1.08-.63.63-1.485.99-2.385.99ZM34.875 90c-.585 0-1.17-.225-1.575-.675-.45-.405-.675-.99-.675-1.575s.225-1.17.675-1.575c.81-.855 2.34-.855 3.15 0 .45.405.675.99.675 1.575s-.225 1.17-.675 1.575c-.405.45-.99.675-1.575.675ZM73.125 90c-.315 0-.585-.045-.855-.18-.27-.09-.54-.27-.72-.495a1.6 1.6 0 0 1-.495-.72c-.135-.27-.18-.54-.18-.855 0-.585.225-1.17.675-1.575.81-.855 2.34-.855 3.15 0 .45.405.675.99.675 1.575 0 .315-.045.585-.18.855a1.6 1.6 0 0 1-.495.72c-.405.45-.99.675-1.575.675Z"
          />
        </svg>
      </Box>

      <InputArea />
    </Box>
  );
}
