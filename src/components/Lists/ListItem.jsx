import { FormButton } from '../Forms/FormControl';

export default function ListItem({ item, onBuy, onRemove }) {
  const { bought, qty, description } = item;

  return (
    <li>
      {bought ? (
        <span>✔️</span>
      ) : (
        <FormButton onClick={() => onBuy(item)} icon>
            💰
        </FormButton>
      )}

      <span>
        {qty} {description}
      </span>

      <button onClick={() => onRemove(item)}>
        🗑
      </button>
    </li>
  );
}
