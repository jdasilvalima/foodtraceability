import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-lime-200 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">
          OriginTracks
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/supplychain">SupplyChain</Link>
        <Link href="/products">Products</Link>
        <Link href="/users">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
