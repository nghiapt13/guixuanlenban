import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import TypeIt from 'typeit-react';
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
            fontFamily: 'Dancing Script',
            height: '209px',
            fontSize: { xs: '45px', md: '70px' },
            color: 'var(--primary)',
          }}
        >
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            {t('content.about_us_title')}
          </TypeIt>
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
          href="https://drive.google.com/file/d/1OvoGCjVcGkObRgL99ikz_DiH4_U69Ofc/view?fbclid=IwAR0jvhDGkIEK2RshhfM42ld-eog4H-YgfHkl5V3ogIMfkcXgmDUVnncY9dw"
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
        <Image
          src={images.brush}
          alt=""
          className={cx('about__brush')}
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <Image src={images.about} alt="" className={cx('about__image')} />

        {/* QUOTES */}
        <Paper
          sx={{
            position: 'absolute',
            p: 3,
            maxWidth: '300px',
            left: { xs: '30%', sm: '50%', lg: '139px' },
            bottom: { xs: '-30px', lg: '23px' },
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Typography
            variant="p"
            className={cx('quotes')}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {t('content.about_us_quote')}

            <i className="fa-solid fa-quote-right"></i>
          </Typography>
        </Paper>
        {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
      </Box>
    </Container>
  );
}

About.propTypes = {};

export default About;
