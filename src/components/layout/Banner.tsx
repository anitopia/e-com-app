import React from "react";

const Banner = () => {
  return (
    <header className="p-8 pb-20 sm:p-20 bg-purple-300 bg-cover bg-center">
      <div className=" bg-white/40 backdrop-blur-md py-8 px-4 max-w-2xl mx-auto rounded-lg text-center text-gray">
        <h1 className="text-4xl font-bold">Welcome to the General Store</h1>
        <h2 className="text-lg mt-4">Discover a wide range of products</h2>
      </div>
    </header>
  );
};

export default Banner;
