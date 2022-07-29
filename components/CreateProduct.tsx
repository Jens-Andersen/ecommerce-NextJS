import { useForm } from '../lib/useForm';
import FormStyles from './styles/FormStyles';

function CreateProduct() {
	const { inputs, handleInputChange, clearForm, resetForm } = useForm({
    image: '',
		name: 'Coffee Master 9000',
		price: 199.99,
		description: 'This is the best coffee you have ever tasted!',
	});
	return (
		<FormStyles>
			<fieldset>
				<label htmlFor="image">
					Name
					<input
						type="file"
						id="image"
						name="image"
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="name">
					Name
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						value={inputs.name}
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="price">
					Price
					<input
						type="number"
						id="price"
						name="price"
						placeholder="Price"
						value={inputs.price}
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor="description">
					Description
					<input
						type="text"
						id="description"
						name="description"
						placeholder="Description"
						value={inputs.description}
						onChange={handleInputChange}
					/>
				</label>
				<button type="submit">Add Product </button>
			</fieldset>
		</FormStyles>
	);
}
export default CreateProduct;
