"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Error404 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-full w-full">
          <Image
            src="/images/404.png"
            alt="404 Page Not Found"
            width={500}
            height={500}
            className="w-full h-full hidden dark:flex"
          />
        </div>

        <h1 className="text-5xl font-bold text-primary mb-4">Opps</h1>
        <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="dark:text-white text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer px-6 py-2 text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
          >
            Go to Home
          </button>
          <button
            onClick={() => router.back()}
            className="cursor-pointer px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;