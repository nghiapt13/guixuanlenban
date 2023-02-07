import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);

const Image = (
  { fallBack: customFallBack = images.noImage, className, src, alt, ...props },
  ref
) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFallBack);
  };

  return (
    <div className={cx('wrapper', className)}>
      <img
        className={cx('image')}
        ref={ref}
        src={fallBack || src}
        {...props}
        alt={alt}
        onError={handleError}
      />
    </div>
  );
};

Image.propsType = {
  fallBack: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default forwardRef(Image);
