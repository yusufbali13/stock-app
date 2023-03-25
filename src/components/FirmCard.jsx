import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

export default function FirmCard({ firm }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary">
          phone: {firm?.name}
        </Typography>
      </CardContent>
      <CardActions>
        <EditIcon />
        <DeleteOutlineIcon />
      </CardActions>
    </Card>
  );
}
