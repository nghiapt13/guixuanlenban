import { Box, Button, Divider, Drawer, List, Typography } from '@mui/material';
import { styled } from '@mui/system';
import classNames from 'classnames/bind';
import React from 'react';
import images from '../../../assets/images';
import { convertUrl } from '../../../hooks';
import Darkmode from '../../../layouts/components/Header/Darkmode';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function SideBar({ open, onClose, pages, hash }) {
  const Title = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    bottom: '0',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '100%',
  }));

  const Item = styled(Button)(({ theme }) => ({
    display: 'block',
    fontSize: 20,
    color: 'inherit',
  }));
  return (
    <Drawer open={open} anchor="left" onClose={onClose}>
      <Box
        sx={{
          width: '100vw',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          className={cx('cross', open === true ? 'is-open' : '')}
          onClick={onClose}
        >
          <span></span>
          <span></span>
        </div>
        <List sx={{ mt: 6 }}>
          {pages.map((page, index) => {
            let hrefPage = `#${convertUrl(page)}`;
            return (
              <Item
                href={hrefPage}
                // component={NavLink}
                className={cx(hash === hrefPage ? 'active' : '')}
                key={index}
                onClick={onClose}
              >
                {page}
              </Item>
            );
          })}
        </List>
        <Divider />
        <List>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Item
              // component={NavLink}
              onClick={onClose}
            >
              Mode
            </Item>
            <Darkmode />
          </Box>
          <Item
            // component={NavLink}
            onClick={onClose}
          >
            Language
          </Item>
        </List>
        <Box className={cx('wrapper')}>
          <Title component="p">
            <Typography component="p" className={cx('banner-title')}>
              Gùi Xuân
            </Typography>
            <Typography component="p" className={cx('banner-title')}>
              lên bản
            </Typography>
          </Title>
          <img src={images.flower} alt="" className={cx('flower-1')} />
          <img src={images.flower} alt="" className={cx('flower-2')} />
        </Box>
      </Box>
    </Drawer>
  );
}
