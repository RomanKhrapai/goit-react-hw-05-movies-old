import PropTypes from 'prop-types';
import Item from 'components/ListItem';
import { CastomList } from './CastomList.styles';

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};

export default function List({ data }) {
  return (
    <CastomList>
      {data.map(({ id, original_title }) => (
        <Item key={id} id={id} value={original_title} />
      ))}
    </CastomList>
  );
}
