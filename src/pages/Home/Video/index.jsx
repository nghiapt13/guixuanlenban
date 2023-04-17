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

function Video({ id }) {
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
                        fontSize: { xs: '28px', md: '41px' },
                        color: 'var(--primary)',
                    }}
                >
                    {t('content.video__title')}
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        textAlign: 'justify',
                        lineHeight: 2,
                        fontSize: { xs: '14px' },
                    }}
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    {t('content.video__desc')}
                </Typography>
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
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/JaUzv3SmNBI"
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
Video.propTypes = {};

export default Video;
