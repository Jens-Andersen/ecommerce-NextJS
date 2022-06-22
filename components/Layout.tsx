import Header from './Header';

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <h1>test that we render this</h1>
      {children}
    </div>
  );
}
export default Layout;
