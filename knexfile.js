module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  testing: {
    client: 'pg',
    connection: {
      host: 'ec2-50-16-198-4.compute-1.amazonaws.com',
      user: 'asgjdgzjivyqqt',
      password: 'd6182f2fb32fbdbe2f5511aed1367c031857050443dfb7fa72397a1e38192f02',
      database: 'd1hi6kdnn9cfg2',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  production: {
    client: 'pg',
    connection: {
      host: 'ec2-50-16-198-4.compute-1.amazonaws.com',
      user: 'asgjdgzjivyqqt',
      password: 'd6182f2fb32fbdbe2f5511aed1367c031857050443dfb7fa72397a1e38192f02',
      database: 'd1hi6kdnn9cfg2',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
};