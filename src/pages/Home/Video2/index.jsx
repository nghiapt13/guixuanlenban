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

function Video2({ id }) {
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
                        {t('content.video2')}
                    </TypeIt>
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        textAlign: 'center',
                        lineHeight: 2,
                        marginBottom: '30px',
                    }}
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    {t('content.video2__desc4')}
                </Typography>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&amp;href=https%3A%2F%2Fwww.facebook.com%2FFEExpSpace%2Fvideos%2F889724542134037%2F&amp;show_text=false&amp;width=560&amp;t=0"
                    width="660"
                    height="415"
                    style={{ border: 'none', overflow: 'hidden' }}
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </MyBox>
        </Container>
    );
}
Video2.propTypes = {};

export default Video2;
