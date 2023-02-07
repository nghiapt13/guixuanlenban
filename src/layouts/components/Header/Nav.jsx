import { Box, Button } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Header.module.scss';
import { convertUrl } from '../../../hooks';
const cx = classNames.bind(styles);
function Nav({ pages, hash, onClick }) {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
        color: 'inherit',
      }}
    >
      {/* Error with space string */}
      {pages.map((page, index) => {
        let hrefPage = `#${convertUrl(page)}`;
        return (
          <Button
            href={hrefPage}
            // component={NavLink}
            className={cx(hash === hrefPage ? 'active' : '')}
            key={index}
            onClick={onClick}
            sx={{
              mx: {
                md: 0.1,
              },
              my: {
                md: 0,
                lg: 1,
              },
              px: {
                md: 0.5,
                lg: 3,
              },
              py: 1.5,
              margin: 1,
              color: 'inherit',
              fontSize: {
                md: 12,
                lg: 13,
              },
              display: 'block',
              textAlign: 'center',
              fontWeight: 600,
              letterSpacing: 1,
              ':hover': {
                background: 'var(--primary)',
                color: '#fff',
              },
            }}
          >
            {page}
          </Button>
        );
      })}
    </Box>
  );
}

Nav.propTypes = {};

export default Nav;
