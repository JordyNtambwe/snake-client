let connection;

const setupInput = function (conn) {
  connection = conn;
  if(key === w) {
    console.log("Move: up")
  }
  if(key === a) {
    console.log("Move: left")
  }
  if(key === s) {
    console.log("Move: down")
  }
  if(key === d) {
    console.log("Move: right")
  }
}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
   }

}

  stdin.on("data", handleUserInput);
  return stdin;
