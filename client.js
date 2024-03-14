const { IP, PORT } = require("./constants");

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: JN")
    conn.write("Say: Who's ready to lose!?")
    console.log("Successfully connected to game server")
  // })
  // conn.on("connect", () => {
  //   conn.write("Move: up")
  // })
  // conn.on("connect", () => {
  //   conn.write("Move: down")
  // })
  // conn.on("connect", () => {
  //   conn.write("Move: left")
  // })
  // conn.on("connect", () => {
  //   conn.write("Move: right")
  })
  return conn;

};

module.exports = connect