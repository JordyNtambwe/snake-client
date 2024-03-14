let connection;

const setupInput = function (conn) {
  connection = conn;
}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
   }
   if(key === "w") {
    connection.write("Move: up")
  }
  if(key === "a") {
    connection.write("Move: left")
  }
  if(key === "s") {
    connection.write("Move: down")
  }
  if(key === "d") {
    connection.write("Move: right")
  }
  if(key === "i") {
    connection.write("Say: I'm on a roll!")
  }
  if(key === "o") {
    connection.write("Say: Oh that was so close!")
  }
  if(key === "p") {
    connection.write("Say: Ya'll better keep up!")
  }
}

module.exports = setupInput

stdin.on("data", handleUserInput);
return stdin;
