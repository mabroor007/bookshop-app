const postgres = require("postgres");
//
// {
//   host: "localhost", // Postgres ip address or domain name
//   port: 5432, // Postgres server port
//   path: "", // unix socket path (usually '/tmp')
//   database: "abd", // Name of database to connect to
//   username: "postgres", // Username of database user
//   password: "pwd", // Password of database user
//   ssl: false, // True, or options for tls.connect
//   max: 10, // Max number of connections
//   timeout: 100, // Idle connection timeout in seconds
//   connection: {
//     application_name: "postgres.js", // Default application_namehhhhhhhhhhh
//   },
// }

sql = postgres(
  "Your uri"
);

module.exports = sql;
