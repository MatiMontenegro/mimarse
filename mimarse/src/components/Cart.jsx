const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart([...cart, product]);
};

const handleCheckout = async () => {
    const res = await fetch("/api/mercadopago", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });
  
    const data = await res.json();
    if (data.init_point) {
      window.location.href = data.init_point; // Redirect to Mercado Pago checkout
    }
  };
  
  <button onClick={handleCheckout} className="bg-blue-500 text-white py-2 px-4 rounded">
    Pay Now
  </button>;
  