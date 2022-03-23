import React from "react";
import textileBackground from "./img/textile-background.jpg";
import textileLogo from "./img/textile-logo.png";
import "./LoginPage.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import InstagramIcon from "@mui/icons-material/Instagram";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}
const LoginPage = () => {
  return (
    <body>
      <header>
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Item>
              <a href="/">
                <img src={textileLogo} alt="textileLogo" className="logo" />
              </a>
            </Item>
          </Box>
        </div>
      </header>
      <main>
        <div>
          <img
            src={textileBackground}
            alt="textile-background"
            className="textileBackground"
          />
        </div>
      </main>
      <footer>
        {" "}
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="text.secondary"
          color="white"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Privacy
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box borderBottom={1}> Social Media Accounts</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Instagram
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Twitter
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Youtube
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              FuMu Textile &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </body>
  );
};

export default LoginPage;
