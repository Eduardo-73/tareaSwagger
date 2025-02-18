const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de mi-app-next',
      version: '1.0.0',
      description: 'Documentación con Swagger para mi-app-next',
    },
  },
  apis: ['./src/app/api/**/router.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { specs };
