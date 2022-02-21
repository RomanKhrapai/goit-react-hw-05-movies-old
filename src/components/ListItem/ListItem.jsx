import { Link } from 'react-router-dom';
import { Item } from './Item.styles';

export default function ImageGalleryItem({ id, value }) {
  return (
    <Item>
      <Link to={`/movies/${id}`}>{value}</Link>
    </Item>
  );
}
