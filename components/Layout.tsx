type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <h1>test that we render this</h1>
      {children}
    </div>
  );
}
export default Layout;
