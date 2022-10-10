import { Link } from 'react-router-dom';
import { useLists } from '../../state/ListsContext';
import AddForm from '../Forms/AddForm';

export function Lists() {
  const { lists, addList } = useLists();

  if (!lists) return null;

  const handleAdd = async (name) => {
    await addList({ name });
  };

  return (
    <section>
      <h2>Lists</h2>

      <AddForm onAdd={handleAdd} placeholder="add a new list..." />

      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`${list.id}`}>{list.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
