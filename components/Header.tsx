import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className='bar'>
        <Link href='/'>My Awesome WebShop</Link>
      </div>
      <div className='sub-header'>
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
