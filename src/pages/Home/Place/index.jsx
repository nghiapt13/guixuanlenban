import { Box, Container, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
const cx = classNames.bind(styles);
Place.prototype = {
  id: PropTypes.string,
};

export default function Place({ id }) {
  const { t } = useTranslation();
  const schoolData = [
    {
      imageUrl: images.aDinh,
      title: t('content.places__school1'),
    },
    {
      imageUrl: images.abat,
      title: t('content.places__school2'),
    },
    {
      imageUrl: images.canDon,
      title: t('content.places__school3'),
    },
    {
      imageUrl: images.spring,
      title: t('content.places__school4'),
    },
    {
      imageUrl: images.laBo,
      title: t('content.places__school5'),
    },
    {
      imageUrl: images.commingSoon,
      title: t('content.places__commingsoon'),
    },
  ];

  const Wrapper = styled(Box)(({ theme }) => ({
    marginTop: 10,
    gap: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const Left = styled(Box)(({ theme }) => ({
    flex: 3,
    display: 'grid',
    [theme.breakpoints.up('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: 20,
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30,
    },
  }));
  const SchoolName = styled(Typography)(({ theme }) => ({
    fontFamily: 'Dancing Script',
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  }));
  const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  }));
  return (
    <Container id={id} maxWidth="xl">
      <Box sx={{ padding: '100px 0 0px 0' }}>
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
          Places
        </Typography>
        <Wrapper data-aos="fade-up">
          {/* left */}
          <Left>
            {schoolData.map((item, index) => (
              <Box
                key={index}
                className={cx('place')}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <SchoolName
                  variant="h4"
                  component="p"
                  className={cx('place__title')}
                >
                  {item.title}
                </SchoolName>
                <Overlay></Overlay>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className={cx('place__image')}
                />
              </Box>
            ))}
          </Left>
          {/* right */}
          {/* <Box
            sx={{
              flex: 1,
            }}
            data-aos="fade-up"
          >
            <Typography variant="h4" component="h5">
              ?????i t?????ng m?? d??? ??n nh???m ?????n
            </Typography>
            <Typography component="p" sx={{ my: 3 }}>
              C??c em h???c sinh t???i 5 ??i???m tr?????ng thu???c x?? Ch?? V??l, huy???n Nam Giang,
              t???nh Qu???ng Nam
            </Typography>
            <a
              href="https://drive.google.com/file/d/1OvoGCjVcGkObRgL99ikz_DiH4_U69Ofc/view?fbclid=IwAR0jvhDGkIEK2RshhfM42ld-eog4H-YgfHkl5V3ogIMfkcXgmDUVnncY9dw"
              target="_blank"
              rel="noreferrer"
            >
              <button className={cx('learn-more')}>
                <span className={cx('circle')} aria-hidden="true">
                  <span className={cx('icon')}>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </span>
                <span className={cx('button-text')}>
                  Learn more
                </span>
              </button>
            </a>
          </Box> */}
        </Wrapper>
      </Box>
    </Container>
  );
}
