import Card from "@/components/product/Card";
import { getProducts } from "@/lib/data/getProducts";
import { notFound } from "next/navigation";

export default async function Home() {
  const categorizedProducts = await getProducts();
  if (!categorizedProducts) {
    return notFound();
  }

  return (
    <div className="font-sans min-h-screen">
      <header className="p-8 pb-20 sm:p-20 bg-purple-300 bg-cover bg-center">
        <div className=" bg-white/40 backdrop-blur-md py-8 px-4 max-w-2xl mx-auto rounded-lg text-center text-gray">
          <h1 className="text-4xl font-bold">Welcome to the General Store</h1>
          <h2 className="text-lg mt-4">Discover a wide range of products</h2>
        </div>
      </header>

      {Object.entries(categorizedProducts).map(([category, products]) => (
        <section key={category} className="w-full text-center px-10 py-3 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-10 mt-4 capitalize box-border border-b-2 border-purple-600 inline-block pb-2 px-5">
            {category}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
