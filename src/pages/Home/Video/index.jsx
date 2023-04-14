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
                // display: 'grid',
                justifyContent: 'center', alignItems: 'center',
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    lg: 'repeat(2, 1fr)',
                },
                pt: { md: 15, sm: 10, xs: 5 },
                gap: { xs: 3, lg: 0 },
            }}
        >
            {/* LEFT */}
            <MyBox data-aos="fade-up"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // height: '100vh',
                }}>
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
                        textAlign: 'center',
                        color: 'var(--primary)',
                    }}
                >
                    <TypeIt
                        options={{
                            waitUntilVisible: true,
                        }}
                    >
                        {t('content.video')}
                    </TypeIt>
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        textAlign: 'justify',
                        lineHeight: 2,
                        marginBottom: '30px',
                    }}
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    {t('content.video__desc')}
                </Typography>
                <iframe
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/JaUzv3SmNBI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </MyBox>
        </Container>
    );
}
Video.propTypes = {};

export default Video;
