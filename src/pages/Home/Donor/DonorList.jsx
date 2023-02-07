import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
import * as React from 'react';

import classNames from 'classnames/bind';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';

const cx = classNames.bind(styles);

DonorList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function DonorList({ data }) {
  return (
    <ImageList
      gap={40}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'unset',
      }}
    >
      {data.map((item, index) => {
        return (
          <ImageListItem key={index}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              className={cx('image')}
              data-aos="fade-up"
            />
            {/* <Typography
      {data.map((item, index) => (
        <a
          key={index}
          sx={
            {
              // display: 'flex',
              // flexWrap: 'wrap',
              // flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'center',
            }
          }
          href={item.pageLink}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            className={cx('image')}
            data-aos="fade-up"
            data-delay="500"
          />
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: 'center', py: 1 }}
          >
            {item.title}
          </Typography> */}
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
