// pages/api/mercadopago.js
import mercadopago from "mercadopago";

mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_ACCESS_TOKEN);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const preference = await mercadopago.preferences.create({
        items: items.map((item) => ({
          title: item.name,
          unit_price: item.price,
          quantity: item.quantity,
        })),
        back_urls: {
          success: `${req.headers.origin}/success`,
          failure: `${req.headers.origin}/failure`,
          pending: `${req.headers.origin}/pending`,
        },
        auto_return: "approved",
      });

      res.status(200).json({ init_point: preference.body.init_point });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
