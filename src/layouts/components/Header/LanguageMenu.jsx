import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import classNames from 'classnames/bind';
import * as React from 'react';
import styles from './Header.module.scss';
const languages = ['Tiếng Việt', 'English'];
const cx = classNames.bind(styles);
export default function Language({ onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{
          cursor: 'pointer',
          p: { md: 0.5, lg: 2 },
          mr: 2,
        }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faEarthAsia} className={cx('language__icon')} />
      </IconButton>
      <Menu
        sx={{
          mt: 2,
        }}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {languages.map((language, index) => (
          <Button
            sx={{ display: 'flex', px: 2, color: 'inherit' }}
            fullWidth
            value={language}
            type="submit"
            key={index}
            onClick={onClick}
            onClose={handleClose}
          >
            {language}
          </Button>
        ))}
      </Menu>
    </div>
  );
}
