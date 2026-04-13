import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { isCelebrateError } from 'celebrate'

import announcementsRouter from './src/routes/announcements.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Swagger налаштування
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Announcements Board API',
      version: '1.0.0',
      description: 'RESTful API для дошки оголошень',
    },
    servers: [{ url: `http://localhost:${PORT}` }],
    components: {
      schemas: {
        Announcement: {
          type: 'object',
          properties: {
            id:          { type: 'integer', example: 1 },
            title:       { type: 'string',  example: 'Продам ноутбук ASUS' },
            description: { type: 'string',  example: 'Відмінний стан, 16GB RAM' },
            price:       { type: 'number',  example: 18000 },
            category:    { type: 'string',  enum: ['sale', 'service', 'job', 'other'] },
            contactInfo: { type: 'string',  example: '0991234567' },
            createdAt:   { type: 'string',  format: 'date-time' },
            updatedAt:   { type: 'string',  format: 'date-time' },
          },
        },
        AnnouncementInput: {
          type: 'object',
          required: ['title', 'description', 'price', 'category', 'contactInfo'],
          properties: {
            title:       { type: 'string', minLength: 5,  maxLength: 100, example: 'Продам ноутбук ASUS' },
            description: { type: 'string', minLength: 10, example: 'Відмінний стан, 16GB RAM' },
            price:       { type: 'number', minimum: 0.01, example: 18000 },
            category:    { type: 'string', enum: ['sale', 'service', 'job', 'other'] },
            contactInfo: { type: 'string', minLength: 5, example: '0991234567' },
          },
        },
        AnnouncementUpdate: {
          type: 'object',
          minProperties: 1,
          properties: {
            title:       { type: 'string', minLength: 5,  maxLength: 100 },
            description: { type: 'string', minLength: 10 },
            price:       { type: 'number', minimum: 0.01 },
            category:    { type: 'string', enum: ['sale', 'service', 'job', 'other'] },
            contactInfo: { type: 'string', minLength: 5 },
          },
        },
        Pagination: {
          type: 'object',
          properties: {
            total:      { type: 'integer', example: 23 },
            page:       { type: 'integer', example: 2 },
            totalPages: { type: 'integer', example: 3 },
            perPage:    { type: 'integer', example: 10 },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Маршрути
app.use('/announcements', announcementsRouter)

// 404 для невідомих маршрутів
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Глобальний error handler
app.use((err, req, res, next) => {
  // Помилки celebrate (валідація)
  if (isCelebrateError(err)) {
    const details = []
    for (const [, value] of err.details) {
      details.push(value.message)
    }
    return res.status(400).json({ error: 'Validation error', details })
  }

  // Prisma: запис не знайдено (P2025)
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Not found' })
  }

  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log(`Swagger docs:   http://localhost:${PORT}/api-docs`)
})
