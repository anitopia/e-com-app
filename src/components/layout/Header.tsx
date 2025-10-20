import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartBtn from "../cart/CartBtn";

const Navigation = () => {
  return (
    <nav className="relative bg-gray-700 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div>
            <Link
              className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
              href="/"
            >
              <Image
                alt="General Store logo"
                src="/logo.png"
                className="h-8 w-auto"
                width={50}
                height={50}
              />
              <span className="ml-4 text-xl mt-1 tracking-wider font-sans">
                General Store
              </span>
            </Link>
          </div>
          <div className="ml-4 flow-root lg:ml-6">
            <CartBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
