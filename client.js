const { IP, PORT } = require("./constants");

const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

conn.on("data", (data) => {
  console.log(data);
});

conn.setEncoding("utf8");

conn.on("connect", () => {
  conn.write("Name: JN")
  conn.write("Say: Who's ready to lose?")
  console.log("Successfully connected to game server")
})

return conn;

};

module.exports = connect