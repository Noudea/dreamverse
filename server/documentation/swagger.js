const SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dreamverse API',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'LogRocket',
        url: 'https://logrocket.com',
        email: 'info@email.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/',
        description: 'Development server'
      }
    ]
  },
  apis: [
    './server.js',
    './router/api/dream/index.js',
    './router/api/dreams/index.js'
  ]
}

export { SwaggerOptions }
