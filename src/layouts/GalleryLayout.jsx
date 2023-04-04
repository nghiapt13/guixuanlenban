import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeContext } from '../components/context/ThemeProvider';
import { convertUrl } from '../hooks/convertUrl';
import Footer from '../layouts/components/Footer';
import style from './DefaultLayout.module.scss';

// import language
import { useTranslation } from 'react-i18next';
import GalleryHeader from './components/Header/GalleryHeader';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const { t } = useTranslation();

    const pages = [
        t('content.home'),
        t('content.about_us'),
        t('content.places'),
        t('content.donation'),
        t('content.timeline'),
        t('content.sponsors'),
    ];
    const context = React.useContext(ThemeContext);
    let hrefPage = `${convertUrl(t('content.home'))}`;
    return (
        <Box className={cx(context.theme, 'wrapper')}>
            <GalleryHeader />


            <Box sx={{ pt: '100px' }} id={hrefPage}>
                {children}
            </Box>

            <Footer pages={pages} />
        </Box>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
