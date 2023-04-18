import { Box } from '@mui/material';
import React from 'react';
import images from '../../assets/images';
import About from './About';
import Banner from './Banner';
import Donate from './Donate';
import Donor from './Donor';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { convertUrl } from '../../hooks/convertUrl';
import styles from './Home.module.scss';
import Place from './Place';
import Gallery from './Gallery';
import Video from './Video';
// import Wish from './Wish';
const cx = classNames.bind(styles);
// DONOR, Organization, contributor data
// const donorData = [
//   {
//     title: 'title',
//     imageUrl: images.noImage,
//   },
//   {
//     title: 'title',
//     imageUrl: images.noImage,
//   },
//   {
//     title: 'title',
//     imageUrl: images.noImage,
//   },
// ];
const organizationData = [
  {
    title: '',
    imageUrl: images.btecLogo,
    pageLink: 'https://www.facebook.com/btecfptdn',
  },
  {
    title: '',
    imageUrl: images.chuaLogo,
    pageLink: 'https://www.facebook.com/ThichChucDat',
  },
];
const contributorData = [
  {
    title: 'bitc',
    imageUrl: images.bitcLogo,
    pageLink: 'https://www.facebook.com/bitc.club',
  },

  {
    title: '',
    imageUrl: images.bclubLogo,
    pageLink: 'https://www.facebook.com/clbbcub',
  },
  {
    title: '',
    imageUrl: images.dragonLogo1,
    pageLink: 'https://www.facebook.com/profile.php?id=100063955156890',
  },
  {
    title: '',
    imageUrl: images.katkunstLogo1,
    pageLink: 'https://www.facebook.com/KatKunstbtec',
  },
  {
    title: '',
    imageUrl: images.bdaLogo,
    pageLink: 'https://www.facebook.com/profile.php?id=100086902532163',
  }
];

function Home(props) {
  const { t } = useTranslation();

  let hrefAbout = `${convertUrl(t('content.about_us'))}`;
  let hrefSponsors = `${convertUrl(t('content.sponsors'))}`;
  let hrefPlaces = `${convertUrl(t('content.places'))}`;
  let hrefGallery= `${convertUrl(t('content.gallery'))}`;
  let hrefVideo = `${convertUrl(t('content.video'))}`;
  return (
    <Box className={cx('wrapper')}>
      {/* Banner */}
      <Banner />
      {/* About */}
      <About id={hrefAbout} />
      {/* PLACE */}
      <Place id={hrefPlaces} />
      {/* Gallery */}
      <Gallery id={hrefGallery} />
      {/* Video */}
      <Video id={hrefVideo} />

      <Box id={hrefSponsors} sx={{ pt: { sm: '100px', xs: '50px' } }}>
        {/* Nha Tai Tro - Donor */}
        {/* <Donor title="Nhà tài trợ" data={donorData} className={cx('donor')}/> */}
        {/* Don Vi To Chuc - Organization */}
        <Donor title={t('content.sponsors__title1')} data={organizationData} />
        {/*Phối hợp thực thiện - contributor */}
        <Donor title={t('content.sponsors__title2')} data={contributorData} />
      </Box>

      {/* WISH */}
      {/* <Wish id={hrefWishes} /> */}
    </Box>
  );
}

Home.propTypes = {};

export default Home;
