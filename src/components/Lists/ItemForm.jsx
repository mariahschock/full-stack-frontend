import { FormButton, InputControl } from '../Forms/FormControl';
import { useForm } from '../Forms/useForm';

const initialData = {
  description: '',
  qty: '',
};

export default function ItemForm({ onAdd, ...rest }) {
  const [data, handleChange, reset] = useForm(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { qty, ...obj } = data;
    if (qty) obj.qyt = qty;
    await onAdd(obj);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Description"
        name="description"
        required
        value={data.description}
        onChange={handleChange}
      />

      <InputControl
        label="Quantity"
        name="qty"
        type="number"
        step="1"
        value={data.qty}
        onChange={handleChange}
        {...rest}
      />

      <FormButton>Add</FormButton>
    </form>
  );
}
