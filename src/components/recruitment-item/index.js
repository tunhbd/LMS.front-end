import React from 'react';
import {
  makeStyles,
  useMediaQuery,
  Card,
  CardContent
} from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Fade } from 'react-reveal';

const useStyles = makeStyles(theme => ({
  recruitmentItem: {
    width: useMediaQuery('(max-width: 501px)') ? '100%' : '500px',
    height: '130px',
    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
    margin: '5px',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 0px 3px 2px rgba(0,0,0,0.3)'
    },
    padding: '5px',
    boxSizing: 'border-box'
    // borderRadius: ''
  },
  recruitmentItemContent: {
    display: 'flex',
    flexWrap: ' wrap',
    padding: '0px!important',
    width: '100%',
    height: '100%'
  },
  recruitmentImage: {
    width: '100%',
    height: '100%'
  },
  recruitmentInfo: {
    width: 'calc(100% - 110px - 30px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 'medium',
    boxSizing: 'border-box',
    padding: '5px'
  },
  recruitmentInfoItem: {
    padding: '2px 0px',
    display: 'flex',
    alignItems: 'center'
  },
  recruitmentName: {
    color: '#415764',
    fontWeight: '600',
    fontSize: '16px'
  }
}));

export default function RecruitmentItem({ recruitment }) {
  const classes = useStyles();
  const LAB_IMAGE_DEFAULT = '/media/images/logo/lab-image-default.png';

  return (
    <Fade>
      <Card className={classes.recruitmentItem}>
        <CardContent className={classes.recruitmentItemContent}>
          <div style={{ width: '110px', height: '100%' }}>
            <img
              className={classes.recruitmentImage}
              src={recruitment.lab.image || LAB_IMAGE_DEFAULT}
              alt="lab avatar"
            />
          </div>

          <div className={classes.recruitmentInfo}>
            <span
              className={`${classes.recruitmentName} ${classes.recruitmentInfoItem}`}
            >
              {recruitment.position}
            </span>
            <span className={classes.recruitmentInfoItem}>
              <ScheduleIcon style={{ marginRight: '5px' }} />{' '}
              {recruitment.createdDate}
            </span>
            <span className={classes.recruitmentInfoItem}>
              <WorkOutlineIcon style={{ marginRight: '5px' }} />
              {recruitment.lab.name}
            </span>
            {/* <span className={classes.recruitmentInfoItem}>
              <PermIdentityIcon style={{ marginRight: '5px' }} />{' '}
              {recruitment.members} thành viên
            </span> */}
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}
