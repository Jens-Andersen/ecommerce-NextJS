import { useState } from 'react';

type ProductListing = {
	name: string;
	price: number;
	description: string;
};
export function useForm(initialState = {}) {
	const [inputs, setInputs] = useState(initialState as ProductListing);

	const handleInputChange = (e) => {
		let { name, value, type } = e.target;

		if (type === 'number') value = parseInt(value);
		if (type === 'file') value[0] = e.target.files;

		setInputs({
			// copy existing inputs
			...inputs,
			[name]: value,
		});
	};

	function clearForm() {
		const blankState = Object.fromEntries(
			// eslint-disable-next-line no-unused-vars
			Object.entries(inputs).map(([key, value]) => [key, ''])
		);

		//@ts-ignore
		setInputs(blankState);
	}

	function resetForm() {
		// @ts-ignore
		setInputs(initialState);
	}

	return { inputs, handleInputChange, clearForm, resetForm };
}
