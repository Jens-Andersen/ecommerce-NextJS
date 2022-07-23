import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '../components/Layout';
import { useApollo } from '../lib/apolloClient';

// import '../styles/globals.css'; TODO: remove if i don't bother adding custom styles

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);
	// console.log('ApOLLOI ::: ', apolloClient);
	return (
		<ApolloProvider client={apolloClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
