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
      <h2 className='skills-header'>Skills</h2>
      <div className='skills-container'>
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/js%20icon.png?alt=media&token=1b7853f8-6e54-443e-8b20-a1ecf3667e34'
          alt='javascript logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/1280px-React-icon.svg.png?alt=media&token=ceb4803a-abd3-4748-a81f-1599edb9e5b1'
          alt='react logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/C%23.png?alt=media&token=50a2c5f8-5230-4b99-b555-60f2a11749ea'
          alt='c sharp logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/NET.png?alt=media&token=0d22175c-2735-459e-b4dc-699f4f8b427f'
          alt='dot net logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/html5-icon.png?alt=media&token=58f8141d-916d-420f-a3fd-84b16a7bf8f3'
          alt='html logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/css-icon.png?alt=media&token=ae80f524-e3b9-41bb-82d0-857e26c3db70'
          alt='css logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/sass%20logo.png?alt=media&token=730bcd4d-2010-48a3-aa15-557026ac97c4'
          alt='sass logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/github%20icon.png?alt=media&token=b5b99c2f-1ed1-4ec8-bcd6-44ed460c50e8'
          alt='github logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/bootstrap.png?alt=media&token=b13df827-307d-4757-a336-d23f0a58a61b'
          alt='bootstrap'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/material_ui_logo.jpg?alt=media&token=6c086f35-47bb-480f-8c4a-c03eaf2e8542'
          alt='material logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/materialize.png?alt=media&token=e15335db-5fe5-41aa-ac45-531cdbd4a898'
          alt='materialize css'
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
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/postmanlogo.png?alt=media&token=08652a8b-abd0-45c6-9d21-8895623c5798'
          alt='postman logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/npm.png?alt=media&token=03c9215c-bf44-4018-863f-c088a9cdf57f'
          alt='npm'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/figma.png?alt=media&token=08790ad2-8c13-4586-82a5-42925f790b38'
          alt='figma logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/vscode-logo.png?alt=media&token=39b70d3f-9a81-47f5-82f7-edd7cf33794d'
          alt='vscode logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/visual%20studio.png?alt=media&token=ffc064e3-f607-4544-b59d-9b960800084b'
          alt='visual studio logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/apple%20logo.png?alt=media&token=d1f17c38-260b-4115-8296-b458c80bc6fe'
          alt='apple logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/windows%20logo.png?alt=media&token=3c9dd76b-0e10-45cf-9a4b-166fd05017c7'
          alt='windows logo'
        />
        <Avatar
          className={classes.large}
          src='https://firebasestorage.googleapis.com/v0/b/sam-mudick.appspot.com/o/terminal.png?alt=media&token=05ce4a14-ba7e-478a-ac0e-65d279187540'
          alt='terminal logo'
        />
      </div>
    </>
  );
}
