import { Box, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);
/** 
  function Banner() {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation()
  
    const data = [
      {
        imageUrl: images.slide2,
        title: t('content.slide_title'),
        desc: 'We do it for people in need',
      },
      {
        imageUrl: images.slide1,
        title: 'Lorem ipsum dolor',
        desc: 'Lorem abc xyz',
      },
      {
        imageUrl: images.slide3,
        title: 'Lorem ipsum dolor ',
        desc: 'Lorem abc xyz',
      },
    ];
  
    const handleArrow = (direction) => {
      if (direction === 'left') {
        setIndex(index !== 0 ? index - 1 : data.length - 1);
      }
      if (direction === 'right') {
        setIndex(index !== data.length - 1 ? index + 1 : 0);
      }
    };
    const handleMoveDot = (dotIndex) => {
      setIndex(dotIndex);
    };
  
    return (
        <Box className={cx('wrapper')}>
            <Typography
                variant="h1"
                component="h1"
                className={cx('banner-title')}
                sx={{
                  bottom:'30%'
                }}
              >
                Gùi Xuân 
            </Typography>
            <Typography
                variant="h1"
                component="h1"
                className={cx('banner-title')}
                sx={{bottom:'7%',
                }}
              >
                lên bản 
            </Typography>
              <img src={images.flower} alt="" className={cx('flower-1')}/>
              <img src={images.flower} alt="" className={cx('flower-2')}/>
              <img src={images.flower} alt="" className={cx('flower-3')}/>
        </Box>
         Banner 
        <Box
          className={cx('banner')}
          sx={{
            transform: `translateX(${-100 * index}vw)`,
            width: `${100 * data.length}vw`,
          }}
        >
          {data.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
              }}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className={cx('image')}
              />
              <Container
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '250px',
                  transform: 'translateY(-50%)',
                  color: 'white',
                }}
              >
                <Typography variant="h6">{slide.desc}</Typography>
                <Typography
 */
function Banner() {
  const Title = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    bottom: '100px',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '100%',
  }));
  return (
    <Box className={cx('wrapper')}>
      <Title component="h1">
        <Typography
          variant="h1"
          component="p"
          className={cx('banner-title')}
          data-aos="fade-up"
        >
          Gùi Xuân
        </Typography>
        <Typography
          variant="h1"
          component="span"
          className={cx('banner-title')}
          data-aos="fade-up"
        >
          lên bản
        </Typography>
      </Title>
      <img
        src={images.flower}
        alt=""
        className={cx('flower-1')}
        data-aos="fade-up"
      />
      <img
        src={images.flower}
        alt=""
        className={cx('flower-2')}
        data-aos="fade-up"
      />
      <img
        src={images.flower}
        alt=""
        className={cx('flower-3')}
        data-aos="fade-up"
      />
    </Box>
  );
}

export default Banner;
