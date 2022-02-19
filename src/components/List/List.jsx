import Item from 'components/ListItem';
import { Ul } from './Ul.styles';

function List({ data }) {
  console.log(data);
  return (
    <Ul>
      {data.map(({ id, original_title }) => (
        <Item key={id} id={id} name={original_title} />
      ))}
    </Ul>
  );
}

export default List;
