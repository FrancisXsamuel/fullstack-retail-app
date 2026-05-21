import express from "express";
import cors from "cors";
import fakeStoreRoutes from "./src/routes/fakeStore.ts";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas para la API de Fake Store
app.use("/api", fakeStoreRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
