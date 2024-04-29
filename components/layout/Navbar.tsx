import Link from "next/link";
export const Navbar: React.FC = () => {
  return (
    <nav className="text-white bg-orange-800 top-0 left-0 w-full flex justify-between items-center px-5 py-2">
      <Link href="/" className="font-bold text-xl">
        TRAVELLO
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link href="#" className="">
          Home
        </Link>
        <Link href="#" className="">
          Tours
        </Link>
        <Link href="#" className="">
          About Us
        </Link>
        <Link href="#" className="">
          Contact Us
        </Link>
      </div>
      <div>
        <Link href="#" className=" mr-4">
          Sign In
        </Link>
        <Link href="#" className="">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
