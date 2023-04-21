import { Box, Container, Grid, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';
// import PropTypes from 'prop-types';

// USING FOR SCSS MODULE
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { convertUrl } from '../../../hooks';

const cx = classNames.bind(styles);

function Footer({ pages }) {
  // const MyGrid = styled(Grid)(({ theme }) => ({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   flexWrap: 'wrap',
  // }));
  const MyTypography = styled(Typography)(({ theme }) => ({
    marginBottom: '10px',
    opacity: '0.7',
    display: 'block',
    textDecoration: 'none',
    fontSize: '13px',
  }));

  const Wrapper = styled(Box)(({ theme }) => ({
    background: 'rgb(33, 32, 43)',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',

    justifyContent: 'center',
    padding: '100px 0 40px 0',
    position: 'relative',
  }));
  // const MyBox = styled(Box)(({ theme }) => ({
  //   background: 'rgb(254, 103, 17)',
  //   width: '70%',
  //   padding: '30px 0',
  //   borderRadius: '5px',
  //   position: 'absolute',
  //   bottom: '100%',
  //   transform: 'translateY(50%)',
  //   display: 'none',
  // }));
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Box>
          <Box>
            <Grid
              // data-aos="fade-up"
              sx={{
                display: { sm: 'grid', md: 'flex' },
                justifyContent: 'space-between',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                textAlign: { xs: 'center', md: 'justify' },
                gap: 8,
              }}
            >
              {/* LOGO */}
              <Grid
                // data-aos="fade-up"
                data-delay="500"
                sx={{
                  display: { xs: 'block', md: 'block' },
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '80%',
                    },
                    // marginBottom: '0px',
                    display: { xs: 'flex', sm: 'block' },
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={images.btecglxbLogo}
                    alt="logo"
                    className={cx('footer__image')}
                  ></Image>
                  {/* <Image
                    src={images.glxbLogo}
                    alt="logo"
                    className={cx('footer__image')}
                  ></Image> */}
                </Box>
                <Typography
                  variant="span"
                  component="p"
                  sx={{
                    width: { xs: '100%' },
                    marginBottom: '15px',
                    opacity: '0.7',
                    fontSize: '13px',
                  }}
                >
                  {t('content.footer_title')}
                </Typography>
                <Typography
                  variant="span"
                  component="p"
                  sx={{
                    width: { xs: '100%' },
                    opacity: '0.7',
                    fontSize: '13px',
                  }}
                >
                  {t('content.footer_add')}
                </Typography>
              </Grid>
              {/* PAGES */}
              {/* <Grid
                // data-aos="fade-up"
                data-delay="500"
                sx={{
                  paddingTop: '20px',
                }}
              >
                <Typography
                  variant="span"
                  component="p"
                  sx={{
                    color: 'inherit',
                    opacity: '0.9',
                    marginBottom: '15px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  Main Menu
                </Typography>

                {pages.map((page, index) => {
                  let hrefPage = `#${convertUrl(page)}`;

                  return (
                    <MyTypography
                      href={hrefPage}
                      key={index}
                      variant="span"
                      component="a"
                    >
                      {page}
                    </MyTypography>
                  );
                })}
              </Grid> */}
              {/* SOCIALS */}
              {/* <Grid
                // data-aos="fade-up"
                data-delay="500"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: { md: 'row', xs: 'column' },
                  gap: {
                    xs: 3,
                    md: 3,
                    lg: 5,
                  },
                }}
              >
                <FacebookRoundedIcon
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      color: '#8D9EFF',
                    },
                  }}
                ></FacebookRoundedIcon>
                <InstagramIcon
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      color: 'pink',
                    },
                  }}
                ></InstagramIcon>
                <TwitterIcon
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      color: '#2146C7',
                    },
                  }}
                ></TwitterIcon>
              </Grid> */}
              {/* Nonprofits */}
              <Grid
                // data-aos="fade-up"
                data-delay="500"
                sx={{
                  paddingTop: '20px',
                }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FGuiXuanLenBan%2Fposts%2Fpfbid02MQhcTdkKSY4CxVjSQadau6pviks6LrBbPeJBooPiwLvAAj6hJhyG5fmTB2SaJunQl&width=400&show_text=false&height=268&appId"
                  // width="100%"
                  id="fanpage"
                  title='fanpage'
                  name="fanpage"
                  height="100%"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder={0}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </Grid>
            </Grid>
          </Box>
          <Box
            // data-aos="fade-up"
            data-delay="500"
            sx={{
              height: '1px',
              opacity: '0.1',
              my: { xs: 1, sm: 2 },
            }}
          ></Box>
          <Box>
            <Typography
              // data-aos="fade-up"
              variant="p"
              component="p"
              sx={{
                fontSize: '12px',
                opacity: '0.6',
                textAlign: 'center',
              }}
            >
              {t('content.copyright')}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
