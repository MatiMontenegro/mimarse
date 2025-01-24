import ProductCard from "@/components/ProductCard"; // Example import
import Cart from "@/components/Cart";              // Example import

export default function Home() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to Mimarse E-Commerce</h1>

            {/* Example product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Replace with dynamic product data */}
                <ProductCard product={{ name: "Product 1", price: "$10" }} />
                <ProductCard product={{ name: "Product 2", price: "$20" }} />
                <ProductCard product={{ name: "Product 3", price: "$30" }} />
            </div>

            {/* Example cart */}
            <Cart />
        </main>
    );
}