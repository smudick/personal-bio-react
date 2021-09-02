import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue, grey } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: '#3e3c3c',
    color: 'white',
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
    width: '20em',
  },
  expand: {
    color: 'white',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    color: red[500],
  },
  subColor: {
    color: 'white',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
}));
const useStylesDark = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: '#1F1B24',
    color: 'white',
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
    width: '20em',
  },
  expand: {
    color: 'white',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    color: red[500],
  },
  subColor: {
    color: 'white',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
}));

export default function NewProjectCards(project, dark) {
  const classes = useStyles();
  const darkClasses = useStylesDark();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const iconSelect = (type) => ((type === 'G') ? <GroupIcon style={{ color: red[500] }} /> : <PersonIcon style={{ color: blue[500] }} />);

  return (
    <>
    {project.dark ? (
      <Card className={darkClasses.root}>
      <CardMedia
        className={darkClasses.media}
        image={project.project.screenshot}
        href={project.project.url}
        target="_blank"
        rel="noreferrer"
        title={project.project.title}
      />
      <CardHeader
        avatar={
          <div>
            {iconSelect(project.project.type)}
          </div>
        }
        title={<Typography className={darkClasses.title}>{project.project.title}</Typography>}
        subheader={<Typography className={darkClasses.subColor}>{project.project.date}</Typography>}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="url" color="white">
          <Link href={project.project.url} target="_blank" rel="noreferrer">
            <LinkIcon style={{ color: grey[50] }}/>
          </Link>
          </IconButton>
          <IconButton aria-label="github" color="white">
          <Link href={project.project.githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon style={{ color: grey[50] }}/>
          </Link>
          </IconButton>
        <IconButton
          className={clsx(darkClasses.expand, {
            [darkClasses.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {project.project.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    ) : (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={project.project.screenshot}
        href={project.project.url}
        target="_blank"
        rel="noreferrer"
        title={project.project.title}
      />
      <CardHeader
        avatar={
          <div>
            {iconSelect(project.project.type)}
          </div>
        }
        title={<Typography className={classes.title}>{project.project.title}</Typography>}
        subheader={<Typography className={classes.subColor}>{project.project.date}</Typography>}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="url" color="white">
          <Link href={project.project.url} target="_blank" rel="noreferrer">
            <LinkIcon style={{ color: grey[50] }}/>
          </Link>
          </IconButton>
          <IconButton aria-label="github" color="white">
          <Link href={project.project.githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon style={{ color: grey[50] }}/>
          </Link>
          </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {project.project.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    )}
    </>
  );
}
