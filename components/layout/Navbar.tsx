export const Navbar: React.FC = () => {
  return (
    <nav className="text-white bg-blue-700 top-0 left-0 w-full flex justify-between items-center px-5 py-2">
      <div className="font-bold text-xl">TRAVELLO</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="">
          Home
        </a>
        <a href="#" className="">
          Tours
        </a>
        <a href="#" className="">
          About Us
        </a>
        <a href="#" className="">
          Contact Us
        </a>
      </div>
      <div>
        <a href="#" className=" mr-4">
          Sign In
        </a>
        <button className="bg-blue-500  py-2 px-4 rounded">Sign Up</button>
      </div>
    </nav>
  );
};
