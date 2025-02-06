import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function VideoPlayer() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f4f4f9",
        }}
      >
        <Box
          sx={{
            width: "60%",
            padding: "25px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            bgcolor: "#fff",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#5a189a" }}>
            My Video
          </Typography>
          <hr style={{ border: "1px solid #ddd" }} />
          <Typography variant="body1" paragraph>
            Hi! Im Nizar Damiriyye. Im a Computer Engineer & developer with a
            serious love for teaching...
          </Typography>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ color: "#5a189a", fontSize: 50 }}
          >
            <PlayCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            textAlign: "center",
          }}
        >
          <iframe
            width="100%"
            height="550px"
            src="https://www.youtube.com/embed/lpOxl4z5FgM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#5a189a",
              color: "#fff",
              ":hover": { bgcolor: "#3c096c" },
            }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
