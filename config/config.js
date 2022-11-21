require('dotenv').config()
module.exports = {
  development: {
    database: 'social_feed_development',
    dialect: 'postgres'
  },
  test: {
    database: 'social_feed_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}