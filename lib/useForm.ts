import { useState } from 'react';

export function useForm(initialState = {}) {
	const [inputs, setInputs] = useState(initialState);

	const handleInputChange = (e) => {
		setInputs({
			// copy existing inputs
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	return { inputs, handleInputChange };
}
