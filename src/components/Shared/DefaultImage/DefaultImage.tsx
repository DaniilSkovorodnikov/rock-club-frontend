import React from'react';
import profileDefaultImage from '../../../assets/profile-default-image.jpg';
import groupDefaultImage from '../../../assets/group-default-image.jpg';
import './DefaultImage.scss';
import classNames from 'classnames';

interface DefaultImageProps {
    type: 'user' | 'group',
    size: 'avatar' | 'listIcon',
    className?: string,
  
}

const DefaultImage: React.FC<DefaultImageProps> = ({type, size, className}) => {
  return (
    <img src={type === 'user' ? profileDefaultImage : groupDefaultImage} className={classNames('defaultImage', size, className)}/>
  );
};
export default DefaultImage;
