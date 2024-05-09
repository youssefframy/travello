import Image from "next/image";
import Link from "next/link";

export const DiscoverSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-12">
      <div className="relative flex-1">
        <Image
          src={"/assets/book-cover.png"}
          alt="Open book with travel imagery"
          className="max-w-xs mx-auto"
          width={400}
          height={400}
        />
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="text-4xl font-bold text-gray-800">
          Discover Egypt with us
        </h2>
        <p className="text-gray-600 text-balance">
          We offer a wide range of tours to suit all tastes and budgets. From
          the bustling streets of Cairo to the serene beaches of Sharm El
          Sheikh, we have something for everyone.
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
