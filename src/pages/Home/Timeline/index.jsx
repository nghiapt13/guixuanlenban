import { Box, Container, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../Home.module.scss';
import TimelineItem from './TimelineItem';
const cx = classNames.bind(styles);

function Timeline({ id }) {
  const { t } = useTranslation();

  const timelineData = [
    {
      title: t('content.timeline_item.title1'),
      desc: t('content.timeline_item.desc1'),
      time: '2/12',
    },
    {
      title: t('content.timeline_item.title2'),
      desc: t('content.timeline_item.desc2'),
      time: '15/12',
    },
    {
      title: t('content.timeline_item.title3'),
      desc: t('content.timeline_item.desc3'),
      time: '20/12',
    },
    {
      title: t('content.timeline_item.title4'),
      desc: t('content.timeline_item.desc4'),
      time: '26/12',
    },
    {
      title: t('content.timeline_item.title5'),
      desc: t('content.timeline_item.desc5'),
      time: '03/01',
    },
    {
      title: t('content.timeline_item.title6'),
      desc: t('content.timeline_item.desc6'),
      time: '05/01',
    },
    {
      title: t('content.timeline_item.title7'),
      desc: t('content.timeline_item.desc7'),
      time: '07/01',
    },
  ];
  // const Line = styled(Box)(({ theme }) => ({
  //   flexGrow: 1,
  // }));
  // const Curvy = styled(Box)(({ theme }) => ({
  //   height: 300,
  //   flexGrow: 1,
  // }));

  return (
    <Container id={id} maxWidth="xl">
      <Box
        sx={{
          padding: { md: '100px 0 50px 0', xs: '50px 0 50px 0' },
        }}
      >
        <Typography
          variant="span"
          sx={{
            display: 'content',
            fontFamily: 'Dancing Script',
            height: '209px',
            fontSize: { xs: '45px', md: '70px' },
            color: 'var(--primary)',
          }}
          data-aos="fade-up"
        >
          Timeline
        </Typography>
        {/* TIMELINEITEM */}
        <Box sx={{ mt: 5 }}>
          {timelineData.map((data, index) => (
            <Box key={index}>
              {index % 2 === 0 ? (
                <TimelineItem
                  title={data.title}
                  desc={data.desc}
                  time={data.time}
                  left="fade-up"
                  right="fade-up"
                />
              ) : (
                <TimelineItem
                  separateRight
                  title={data.title}
                  desc={data.desc}
                  time={data.time}
                  classname={cx('timeline')}
                  left="fade-up"
                  right="fade-up"
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

Timeline.propTypes = {};

export default Timeline;
