import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(4),
  },
}));
export default function Skills() {
  const classes = useStyles();
  return (
    <>
    <h2>Skills</h2>
    <div className='skills-container'>
      <Avatar className={classes.large}>
        <i class='fab fa-js-square'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-css3-alt'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-html5'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-react'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-sass'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-js-square'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-apple'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-github-square'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-bootstrap'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-npm'></i>
      </Avatar>
      <Avatar className={classes.large}>
        <i class='fab fa-figma'></i>
      </Avatar>
      <Avatar
        className={classes.large}
        src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/postmanlogo.png?alt=media&token=08652a8b-abd0-45c6-9d21-8895623c5798'
        alt='postman logo'
      />
      <Avatar
        className={classes.large}
        src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/firebase-logo.png?alt=media&token=6232c6aa-957d-4abd-916c-740c6e1b5e86'
        alt='firebase logo'
      />
      <Avatar
        className={classes.large}
        src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/netlify-logo.png?alt=media&token=0bc8271b-2bcd-411c-9196-471ebf1ac1f6'
        alt='netlify logo'
      />
      <Avatar
        className={classes.large}
        src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/vscode-logo.png?alt=media&token=39b70d3f-9a81-47f5-82f7-edd7cf33794d'
        alt='vscode logo'
      />
      <Avatar className={classes.large}>
        <i class="fas fa-terminal"></i>
      </Avatar>
    </div>
    </>
  );
}
