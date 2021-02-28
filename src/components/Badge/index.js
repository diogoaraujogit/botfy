import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


export default function BadgeOverlap(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      '& .MuiBadge-colorPrimary': {
        backgroundColor: props.color,
      },
    },
    shape: {
      backgroundColor: theme.palette.primary.main,
      width: 40,
      height: 40,
    },
    shapeCircle: {
      borderRadius: '50%',
    },
  }));
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge color="primary" overlap="circle" badgeContent=" ">
        {props.children}
      </Badge>
    </div>
  );
}
