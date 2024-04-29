import Link from "next/link";

export const DiscoverSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-12">
      <div className="flex-1">
        <img
          src={"/assets/book-cover.png"}
          alt="Open book with travel imagery"
          className="max-w-xs mx-auto"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Discover the world with us
        </h2>
        <p className="text-gray-600">
          Would you explore nature paradise in the world, let’s find the best
          destination in world with us, Would you explore nature paradise in the
          world, let’s find the best destination in world with us.
        </p>
        <div>
          <Link
            href="/about-us"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
