import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import FormStyles from './styles/FormStyles';

const CREATE_PRODUCT_MUTATION = gql`
	mutation CREATE_PRODUCT_MUTATION(
		$name: String!
		$description: String!
		$price: Int! # $image: Upload
	) {
		createProduct(
			data: {
				name: $name
				description: $description
				price: $price
				status: "AVAILABLE"
				# photo: {
				# 	# Creates a new photo and takes the image created and places as _photo_ afterwards
				# 	# have to use the create method as photo is a relation
				# 	create: { image: $image, altText: $name }
				# }
			}
		) {
			id
			price
			description
			name
		}
	}
`;

function CreateProduct() {
	const { inputs, handleInputChange, clearForm, resetForm } = useForm({
		image: '',
		name: 'Coffee Master 9000',
		price: 199,
		description: 'This is the best coffee you have ever tasted!',
	});

	console.log('DO WE GET HERE??/');

	const [createProduct, { data, error, loading }] = useMutation(
		CREATE_PRODUCT_MUTATION,
		{ variables: inputs }
	);

	console.log('DO WE GET HERE??/');

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log('Form data: ', inputs);
		// clearForm();
		// resetForm();
		const res = await createProduct();
		console.log('res: ', res);
	}

	return (
		<FormStyles onSubmit={handleSubmit}>
			<ErrorMessage error={error} />
			<fieldset disabled={loading} aria-busy={loading}>
				<label htmlFor="image">
					Image - This is disabled because Apollo Upload feature broke
					<input
						required
						type="file"
						id="image"
						name="image"
						onChange={handleInputChange}
						disabled={true} // Disable as apollo upload has broke
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
					<textarea
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
