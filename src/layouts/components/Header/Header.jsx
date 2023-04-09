import { faHandHoldingHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { ThemeContext } from '../../../components/context/ThemeProvider';
// import language
import { useTranslation } from 'react-i18next';
import i18n from '../../../components/translation/i18n';

import LanguageMenu from './LanguageMenu';

import * as React from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';

// USING FOR SCSS MODULE
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
// import Darkmode from './Darkmode';
import styles from './Header.module.scss';
import Nav from './Nav';
import SideBar from './Sidebar';

const cx = classNames.bind(styles);

function Header({ pages, id }) {
  const [, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const Header = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'inherit',
    color: 'inherit',
    // todo: change height off header 80 -> 100
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // todo: change the alpha of box shadows when scrolling
    boxShadow: 'none',
    // display:"none",
  }));

  // const context = React.useContext(ThemeContext);
  // use language
  const { t } = useTranslation();

  function changeLang(e) {
    // let lang = i18n.language
    // return lang === 'vi' ? i18n.changeLanguage('en') : i18n.changeLanguage('vi')
    let value = e.target.value;

    console.log('value: ', e.target.value);

    switch (value) {
      case 'English':
        i18n.changeLanguage('en');
        break;
      default:
        i18n.changeLanguage('vi');
        break;
    }
  }

  // get current hashtag path
  const { hash } = useLocation();
  console.log('[hash]', hash);

  // SHOW / HIDE SIDEBAR
  const [open, setOpen] = React.useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };
  return (
    <Header position="fixed" className={cx('dark')}>
      {/* <Header position="fixed" > */}
      <Container maxWidth="xl" id={id}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            // target={'_blank'}
            href="#"
            sx={{
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              minWidth: '80px',
              maxWidth: '120px',
            }}
          >
            <Image src={images.btecLogo} alt="BTEC FPT" />
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}></Box> */}

          {/* RESPONSIVE */}
          {/* MENU ON TABLET & MOBILE */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleSlider}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <SideBar
            open={open}
            onClose={toggleSlider}
            pages={pages}
            hash={hash}
            // onClick={handleCloseNavMenu}
          />

          {/* LOGO ON MOBILE */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              color: 'inherit',
              minWidth: '80px',
              maxWidth: '100px',
            }}
          >
            <Image src={images.btecLogo} alt="BTEC FPT" />
          </Typography>

          {/* MENU ON DESKTOP */}
          <Nav pages={pages} hash={hash} onClick={handleCloseNavMenu} />

          {/* RIGHT */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {/* PHONE */}
              <a href="tel:0988520893">
                <IconButton
                  sx={{
                    p: {
                      md: 0.2,
                      lg: 2,
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                </IconButton>
              </a>
              {/* <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#3c3b3b',
                  textDecoration: 'none',
                  marginRight: 2.5,
                }}
              >
                +161 94 32 141
              </Typography> */}
              {/* DARKMODE */}
              {/* <Button onClick={context.toggleTheme}>Dark Mode</Button> */}
              {/* <Darkmode /> */}
              {/* LANGUAGE TRANSLATION */}
              {/* <Button type='submit' onClick={changeLang}>Tiếng việt</Button> */}
              <LanguageMenu onClick={changeLang} />
            </Box>

            <Button
              href="https://thiennguyen.app/user/hominhthanh1"
              target="_blank"
              variant="outlined"
              color="inherit"
              cursor="not-allowed"
              className={cx('btn__primary')}
              sx={{
                display: { xs: 'none', sm: 'block' },
                border: 2,
                borderColor: 'var(--primary)',
                ':hover': {
                  border: 2,
                  background: 'var(--primary)',
                  color: '#fff',
                },
              }}
            >
              {t('content.btn_donation')}
            </Button>

            {/* RESPONSIVE ON MOBILE */}
            <Button
              href="https://thiennguyen.app/user/hominhthanh1"
              target="_blank"
              variant="outlined"
              color="inherit"
              className={cx('btn__primary')}
              sx={{
                display: { xs: 'block', sm: 'none' },

                border: 2,
                borderColor: 'var(--primary)',
                ':hover': {
                  border: 2,
                  background: 'var(--primary)',
                  color: '#fff',
                },
              }}
            >
              <FontAwesomeIcon
                icon={faHandHoldingHeart}
                style={{ fontSize: '25px', padding: '4px 0' }}
              />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </Header>
  );
}
export default React.memo(Header);
