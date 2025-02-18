/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Retorna la lista de productos disponibles con su ID, nombre y precio.
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 */
export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
  ];
  return Response.json(products, { status: 200 });
}
