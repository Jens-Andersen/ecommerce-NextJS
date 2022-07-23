import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_PRODUCTS_QUERY = gql`
	query ALL_PRODUCTS_QUERY {
		products {
			id
			name
			price
			description
			photo {
				id
				image {
					publicUrlTransformed
				}
			}
		}
	}
`;

const ProductListStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
`;
function Products() {
	const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

	console.log(data, error, loading);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	console.log('HEY::: ', data.products[0].name);

	const products = data.products.map((product: any) => {
		return <p key={product.id}>{product.name}</p>;
	});

	return (
		<div>
			<h1>Products!!!!!</h1>
			<ProductListStyles>{products}</ProductListStyles>
		</div>
	);
}
export default Products;
