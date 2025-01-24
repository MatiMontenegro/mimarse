export default function handler(req, res) {
    const products = [
      { id: 1, name: "Product 1", price: 10, image: "/product1.jpg" },
      { id: 2, name: "Product 2", price: 20, image: "/product2.jpg" },
    ];
    res.status(200).json(products);
  }
  