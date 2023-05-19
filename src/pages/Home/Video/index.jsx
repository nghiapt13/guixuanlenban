import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import ReactPlayer from 'react-player';
import './video.css';
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
                        fontSize: { xs: '28px', md: '41px' },
                        color: 'var(--primary)',
                    }}
                >
                    {t('content.video__title')}
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        // lineHeight: { xs: '2', md: '2' },
                        textAlign: { md: 'justify' },
                        alignItems: { xs: 'center', },
                        lineHeight: { xs: '2', md: '2' },
                        fontSize: { xs: '15px', md: '15px' },
                        paddingRight: { xs: '300px', md: '30px' },
                        paddingLeft: { xs: '5px', md: '0px' },
                        gap: { xs: 3, lg: 0 },
                    }}
                >
                    {t('content.video__desc')}
                </Typography>
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
                <ReactPlayer
                    style={{ padding: '10px', margin: '10px' }}
                    url={'https://www.youtube.com/embed/JaUzv3SmNBI'} />
                {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
            </Box>
        </Container>
    );
}
Video.propTypes = {};

export default Video;
