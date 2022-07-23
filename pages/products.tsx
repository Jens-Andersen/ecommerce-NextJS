import type { NextPage } from 'next';
import Products from '../components/Products';
import styles from '../styles/Home.module.css';

const ProductsPage: NextPage = () => {
	return (
		<div className={styles.container}>
			<Products />
		</div>
	);
};

export default ProductsPage;
