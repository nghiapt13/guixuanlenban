import { Box, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../Home.module.scss';
const cx = classNames.bind(styles);
function TimelineItem({ title, desc, time, classname, separateRight, left }) {
  const MyBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'grid',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: '0px 0 100px 0',

      '&::after': {
        content: '""',
        width: '5px',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRight: '3px solid var(--primary)',
      },
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '0px 0 0 80px',
      gap: 10,
      // margin: '20px 0',
      '&::after': {
        content: '""',
        width: '5px',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '25px',
        transform: 'translateY(-50%)',
        borderRight: '3px solid var(--primary)',
      },
    },
  }));
  const Timer = styled(Paper)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      padding: 20,
      backgroundColor: 'white',
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    },
    [theme.breakpoints.down('md')]: {
      padding: 12,
      backgroundColor: 'white',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
  }));

  const classes = cx({
    [classname]: classname,
    separateRight,
  });

  return (
    <MyBox className={classes}>
      {/* Left */}
      <Box
        sx={{
          background: 'var(--primary)',
          color: 'white',
          p: 3,
          width: { md: '80%', xs: '100%' },
          // borderBottom: '3px dotted #000',
        }}
        data-aos={left}
      >
        <Typography
          variant="h6"
          className={cx('right')}
          sx={{ position: 'relative', fontSize: { sm: '20px', xs: '15px' } }}
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: 'justify',
            pt: 3,
            maxWidth: '80%',
            display: { sm: 'block', xs: 'none' },
          }}
        >
          {desc}
        </Typography>
      </Box>
      {/* Right */}
      <Box></Box>

      {/* Line middle */}
      <Timer>{time}</Timer>
    </MyBox>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default TimelineItem;
