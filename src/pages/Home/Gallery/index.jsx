import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import language
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Thuvien({ id }) {
    window.scrollTo(0, 0);
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
            <MyBox >
                {/* <Typography
            variant="span"
            sx={{ textTransform: 'uppercase', color: 'orange' }}
          ></Typography> */}
                <Typography
                    variant="h3"
                    component="h5"
                    sx={{
                        py: 1,
                        fontFamily: 'Montserrat',
                        height: '100px',
                        fontSize: { xs: '30px', md: '41px' },
                        color: 'var(--primary)',
                    }}
                >
                    {t('content.gallery')}
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        // lineHeight: { xs: '2', md: '2' },
                        textAlign: { md: 'justify' },
                        alignItems: { xs: 'center', },
                        lineHeight: { xs: '2', md: '2' },
                        fontSize: { xs: '15px', md: '15px' },
                        paddingRight: { xs: '10px', md: '30px' },
                        paddingLeft: { xs: '5px' },
                        gap: { xs: 3, lg: 0 },
                    }}
                >
                    {t('content.gallery_desc')}
                </Typography>


                <Link to="/gallery">
                    <button
                        className={cx('learn-more')}>
                        <span className={cx('circle')} aria-hidden="true">
                            <span className={cx('icon')}>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </span>
                        <span className={cx('button-text')}>
                            {t('content.btn_about_us')}
                        </span>
                    </button>
                </Link>
            </MyBox>
            {/* RIGHT */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // height:{xs: '300px', md: '100vh'},
                    // width:{xs: '300px', md: '100vh'}
                    height: '560px',
                    width: '100%',
                    marginTop: '20px',
                }}
            >
                <Image
                    src={images.gallery}
                    alt=""
                    className={cx('about__image')} />
                {/* sx{{  }} */}
                {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
            </Box>
        </Container >
    );
}
Thuvien.propTypes = {};

export default Thuvien;
