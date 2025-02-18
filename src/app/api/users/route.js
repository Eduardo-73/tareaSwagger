/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna la lista de usuarios registrados.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
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
 *                   email:
 *                     type: string
 */
export async function GET() {
  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com" },
    { id: 2, name: "María López", email: "maria@example.com" },
    { id: 3, name: "Carlos Gómez", email: "carlos@example.com" }
  ];

  return Response.json(users, { status: 200 });
}
