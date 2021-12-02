const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Successfully connected to game server");
    console.log(data);
   // conn.write("HEre")
    // code that does something when the connection is first established
  });

  conn.on('connect', () => {
    conn.write('Name: AAB');

    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 2000);
  
  });

  return conn;
};

console.log("Connecting ...");


module.exports = connect;
