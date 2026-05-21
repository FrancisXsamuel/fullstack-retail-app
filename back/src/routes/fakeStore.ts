import express from "express";
import axios from "axios";

const router = express.Router();

//obtengo todos los productos
router.get("/productos", async (req, res) => {
  try {
    const respuesta = await axios.get("https://fakestoreapi.com/products");
    res.json(respuesta.data);
  } catch (err) {
    console.error(err);
  }
});

//obtengo un producto por id
router.get(`/productos/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const respuesta = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
    );
    res.json(respuesta.data);
  } catch (err) {
    console.error(err);
  }
});

//obtengo las categorias
router.get("/categorias", async (req, res) => {
  try {
    const respuesta = await axios.get(
      "https://fakestoreapi.com/products/categories",
    );
    res.json(respuesta.data);
  } catch (err) {
    console.error(err);
  }
});

export default router;
