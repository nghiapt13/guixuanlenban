import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
// import language
import { useTranslation } from 'react-i18next';

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
      <MyBox data-aos="fade-up">
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
            fontSize: { xs: '22px', md: '41px' },
            color: 'var(--primary)',
          }}
        >
          {t('content.about_us_title')}
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: { md: 'justify' },
            alignItems: { xs: 'center', },
            lineHeight: { xs: '2', md: '2' },
            // pt: { md: 15, sm: 10, xs: 5 },
            gap: { xs: 3, lg: 0 },
          }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {t('content.about_us_desc')}
        </Typography>

        <a
          href="https://www.facebook.com/GuiXuanLenBan/posts/pfbid02ucnmF7BrdmLythGDVjm4jNtVNJAuxkvMVnnrpwH8cUsv9tKMED5kdvbDbJu9TWm6l"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <button className={cx('learn-more')}>
            <span className={cx('circle')} aria-hidden="true">
              <span className={cx('icon')}>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </span>
            <span className={cx('button-text')}>
              {t('content.btn_about_us')}
            </span>
          </button>
        </a>
      </MyBox>

      {/* RIGHT */}
      <Box
        data-aos="fade-up"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          size: { xs: '50%', md: '100%' },
          alignItems: { xs: 'center', md: 'flex-end' },
          position: 'relative',

        }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/IFVcRYMNxDc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
      </Box>
    </Container>
  );
}

About.propTypes = {};

export default About;
