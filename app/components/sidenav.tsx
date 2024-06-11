import Image from 'next/image';
import NavLinks from '@/app/components/nav-links';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
      <div className='flex items-center justify-between p-3 border-b-[3px] border-black-500'>
        <Image src="/mark.png" width={201.19} height={69} alt="mark" />
        <NavLinks />
        <Link
          href="/login"
          className="hidden md:block bg-gradient-to-r from-[#447EF7] via-[#4B66EA] to-[#4B66EA] items-center mt-6 gap-3 self-start rounded-md px-2 py-1 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
        </Link>
        <UserCircleIcon className="block md:hidden h-10 w-10 bg-[#447EF7] rounded-full" />
      </div>
      
  );
}
