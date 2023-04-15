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
            fontSize: { xs: '35px', md: '41px' },
            color: 'var(--primary)',
          }}
        >
          {t('content.about_us_title')}
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: 'justify',
            lineHeight: 2,
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
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&amp;href=https%3A%2F%2Fwww.facebook.com%2FFEExpSpace%2Fvideos%2F889724542134037%2F&amp;show_text=false&amp;width=560&amp;t=0"
          width="660"
          height="415"
          zIndex="9999"
          style={{ border: 'none', overflow: 'hidden' }}
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
      </Box>
    </Container>
  );
}

About.propTypes = {};

export default About;
