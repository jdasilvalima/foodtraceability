"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {

  const pathname = usePathname();

  return (
    <nav className="bg-lime-200 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">
          OriginTracks
        </Link>
      </div>
      <div className="space-x-4">
        <Link className={pathname === '/supplychain' ? 'active' : ''} href="/supplychain">SupplyChain</Link>
        <Link className={pathname === '/products' ? 'active' : ''} href="/products">Products</Link>
        <Link className={pathname === '/users' ? 'active' : ''} href="/users">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
