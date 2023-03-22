import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
export default function MainCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "5rem",
        "& > :not(style)": {
          m: 1,
          mt: 5,
          width: 250,
          height: 250,
        },
      }}
    >
      <Paper elevation={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ m: 2, height: 100 }} title="green iguana">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Paper>
      <Paper elevation={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ m: 2, height: 100 }} title="green iguana">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Paper>
      <Paper elevation={3}>
        <Card sx={{ maxWidth: 345 }} className="profile-card">
          <CardMedia sx={{ m: 2, height: 100 }} title="green iguana">
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}
