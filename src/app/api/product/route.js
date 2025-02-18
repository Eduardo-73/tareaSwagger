/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Agrega un nuevo producto
 *     description: Crea un nuevo producto con nombre y precio.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Teclado Mecánico"
 *               price:
 *                 type: number
 *                 example: 150
 *     responses:
 *       201:
 *         description: Producto agregado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto agregado"
 *                 product:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Teclado Mecánico"
 *                     price:
 *                       type: number
 *                       example: 150
 *       400:
 *         description: Error de validación (faltan datos).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Nombre y precio son requeridos"
 *       500:
 *         description: Error en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error en la solicitud"
 */
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name || !body.price) {
      return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
    }

    return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Error en la solicitud" }, { status: 500 });
  }
}
