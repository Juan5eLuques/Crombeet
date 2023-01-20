const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "crombeet",
});

pool.getConnection((err) => {
  if (err) {
    console.log("Error en la conexion a la base de datos");
  }

  console.log("Conectado a la base de datos");
});

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, params, (err, data) => {
        if (err) {
          console.log("Error ejecutando la consulta");
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { pool, executeQuery };
