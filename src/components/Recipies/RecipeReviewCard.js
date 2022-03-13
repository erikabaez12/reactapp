import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
            {props.title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="120"
            image={props.image}
          />
          <CardActions disableSpacing>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              {props.ingredients.map((ingredient, index) => (
                    <Typography  sx={{ fontSize: 14 }}  paragraph>
                        {ingredient.original}
                    </Typography>
                ))}
            </CardContent>
            <CardContent>
              <Typography paragraph >Preparation:</Typography>
              {props.instructions.map((instruction, index) => (
                    <Typography sx={{ fontSize: 14 }} paragraph>
                     {instruction.number}{bull} {instruction.step}
                    </Typography>
                ))}
            </CardContent>
          </Collapse>
        </React.Fragment>
      </Card>
    </Box>
  );
}
