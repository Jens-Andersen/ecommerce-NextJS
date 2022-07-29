import { useForm } from '../lib/useForm';

function CreateProduct() {
	const { inputs, handleInputChange, clearForm, resetForm } = useForm({
		name: 'Coffee Master 9000',
		price: 199.99,
		description: 'This is the best coffee you have ever tasted!',
	});
	return (
		<form>
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
			<button type="button" onClick={clearForm}>
				Clear Form
			</button>
			<button type="button" onClick={resetForm}>
				Reset Form
			</button>
		</form>
	);
}
export default CreateProduct;
