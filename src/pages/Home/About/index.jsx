import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import ReactPlayer from 'react-player';
// import language
import { useTranslation } from 'react-i18next';
import './about.css';

const cx = classNames.bind(styles);

function About({ id }) {
  const MyBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));
  const { t } = useTranslation();

  return (
    <Container
      id={id}
      maxWidth="xl"
      // disableGutters={true}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        },
        pt: { md: 15, sm: 10, xs: 5 },
        gap: { xs: 3, lg: 0 },
      }}
    >
      {/* LEFT */}
      <MyBox>
        {/* <Typography
          variant="span"
          sx={{ textTransform: 'uppercase', color: 'orange' }}
        ></Typography> */}
        <Typography
          variant="h3"
          component="h5"
          sx={{
            py: 3,
            fontFamily: 'Montserrat',
            height: '100px',
            fontSize: { xs: '30px', md: '41px' },
            color: 'var(--primary)',
          }}
        >
          {t('content.about_us_title')}
        </Typography>
        <Typography
          variant="p"
          sx={{
            // lineHeight: { xs: '2', md: '2' },
            textAlign: { md: 'justify' },
            alignItems: { xs: 'center', },
            lineHeight: { xs: '2', md: '2' },
            fontSize:{xs:'15px',md:'15px'},
            paddingRight: { xs: '280px',md:'30px' },
            paddingLeft: { xs: '1px' },
            gap: { xs: 3, lg: 0 }, 
          }}
        >
          {t('content.about_us_desc')}
        </Typography>
        {/* <Typography
          variant="p"
          sx={{
            textAlign: { xs: 'center', md: 'justify' }, // Center text on small screens, justify on medium screens and above
            alignItems: 'center', // Center the text vertically
            lineHeight: { xs: '2', md: '2' }, // Set the line height to 2 on all screens
            fontSize: { xs: '14px', md: 'inherit' }, // Decrease font size on small screens, inherit on medium screens and above
            gap: { xs: 2, lg: 0 }, // Reduce the gap between lines on small screens
            maxWidth: '100%', // Ensure the text doesn't overflow the container
          }}
        >
          {t('content.about_us_desc')}
        </Typography> */}


      </MyBox>

      {/* RIGHT */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          size: { xs: '100%', md: '100%' },
          // width: { xs: '50%', md: '100%' },
          alignItems: { xs: 'center', md: 'flex-end' },
          padding: { xs: '10px', md: '0px' },
          position: 'relative',

        }}
      >
        {/* <iframe
          width="660"
          height="415"
          style={{width:'100%'}}
          src="https://www.youtube.com/embed/IFVcRYMNxDc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
        <ReactPlayer
        style={{padding:'10px',margin:'10px'}}
        url={'https://www.youtube.com/embed/IFVcRYMNxDc'} />
      </Box>
    </Container>
  );
}

About.propTypes = {};

export default About;
