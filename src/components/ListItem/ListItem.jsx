import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Item } from './Item.styles';

const ImageGalleryItem = ({ id, name }) => {
  return (
    <Item>
      <Link to={`/movies/${id}`}>{name}</Link>
    </Item>
  );
};

export default ImageGalleryItem;
