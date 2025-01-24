const ProductCard = ({ product }) => (
    <div className="p-4 border rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Add to Cart</button>
    </div>
  );
  