import TheGuy from "../components/TheGuy/TheGuy";
import { Grid, Stack, Typography } from "@mui/material";
import { useTypingEffect } from "../hooks/useTypingEffect";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
import aboutData from "../data/data.json";

const Home = () => {
  const {about} = aboutData;
  const {prefix,name,description,skills}=about;
  const displayText = useTypingEffect({
    text: skills.slice(1,3),
    delay: 100,
  });
  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: "1rem",
        backgroundColor: (theme) => theme.palette.background.default,
        // overflow: "hidden",
        // animation
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Grid item xs={12} md={4}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            width: "100%",
            borderRadius: "10px",
            padding: "1rem 2rem",
            backgroundColor: "primary.light",
            // scale down by 0.7 based on screen size
            transform: { xs: "scale(0.7)", md: "scale(1)" },
            // animation: "fadeIn 1s ease-in-out",
            "@keyframes fadeIn": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
          }}
        >
          <CurrentlyPlaying />
          <TheGuy />
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            textAlign: "center",
            borderRadius: "10px",
            padding: "5rem",
            width: "100%",
            animation: "right2left 1s ease-in-out",
            "@keyframes right2left": {
              "0%": {
                opacity: 0,
                transform: "translateX(100px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "500",
              color: "primary.main",
            }}
          >
            {prefix}
          </Typography>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              "&::first-letter": {
                color: "primary.main",
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "100",
              color: "text.secondary",
              marginBottom: "1rem",
              "&::after": {
                content: "'.'",
                color: "primary.main",
                marginLeft: "5px",
                fontWeight: "700",
              },
            }}
          >
            {displayText}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "300",
              color: "text.secondary",
              marginBottom: "1rem",
              textAlign: "justify",
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
