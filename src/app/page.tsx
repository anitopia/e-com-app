import Banner from "@/components/layout/Banner";
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
      <Banner />
      {Object.entries(categorizedProducts).map(
        ([category, products], index) => (
          <section key={category} className="w-full text-center px-10 py-3 ">
            <h3 className="text-2xl font-semibold text-gray-800 mb-10 mt-4 capitalize box-border border-b-2 border-purple-600 inline-block pb-2 px-5">
              {category}
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-8 max-w-7xl mx-auto">
              {products.map((product, prodIndex) => (
                <Card
                  key={product.id}
                  product={product}
                  priorityImage={index === 0 && prodIndex < 5}
                />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  );
}
