// Use Express

var express = require("express");
var health=require('express-ping');
// Use body-parser
var bodyParser = require("body-parser");
var Socket = require('socket.io');


var app = express();
var http = require('http').createServer(app);
var path = require('path')

var port = 8000;
var io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(health.ping());


var rooms = [];
io.on('disconnect',function (){
	console.log("BYE")
})
io.on('connection', function(socket) {
	console.log('[connection]');
	io.to(socket.id).emit('confirmConnection');

	socket.on('new', function (player) {
		console.log('[create or access party]');

		var room = null;

		if (!player.roomId) {
			room = createRoom(player);
			console.log('[create room ]');
		} else {
			console.log('suite de la creation')
			room = rooms.find(function(r) {
				r.id === player.roomId

			});

			if (room === undefined) {
				return;
			}

			player.roomId = room.id;
			room.players.push(player);
		}

		socket.join(room.id);

		io.to(socket.id).emit('join room', room.id);

		if (room.players.length === 2) {
			io.to(room.id).emit('start game', room.players);
		}
	});
	socket.on('disconnect', function ()  {
		console.log('disconnect');
		var room = [];

		rooms.forEach(function(r) {
			r.players.forEach(function(p) {
				if (p.socketId === socket.id && p.host) {
					room = r;
					rooms = rooms.filter(function(r) { r !== room});
				}
			})
		})
	});
	socket.on("disconnect", function (reason) {
		console.log("[disconnect]",reason)
	});
	socket.on("connect_error", function (err) {
		console.log('connect_error due to '+err.message);
	});
	socket.on("reconnect_attempt", function (){
		console.log("[RECONNECTING...]")
	});
	socket.on('get rooms', () => {
		console.log(rooms)
		io.to(socket.id).emit('list rooms', rooms);
	});

})


function roomId() {
	return Math.random().toString(36).substr(2, 9);
}
function createRoom(player) {
	var room = { id: roomId(), players: Array() };

	player.roomId = room.id;

	room.players.push(player);
	rooms.push(room);
	console.log(rooms)
	return room;
}

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});
http.listen(8000, function () {
	console.log('Listening on port 8000');
});

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
	res.status(200).json({ status: "UP" });
});

