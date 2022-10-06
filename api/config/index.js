import dotenv from 'dotenv'

dotenv.config()

const config = {
  server: {
    port: 3000
  },
  database: {
    uri: process.env.URI
  },
  security: {
    tokenSecret: process.env.TOKEN_SECRET
  }
}

export default config;