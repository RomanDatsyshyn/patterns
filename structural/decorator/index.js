var Server = /** @class */ (function () {
    function Server(ip, port) {
        this.ip = ip;
        this.port = port;
    }
    Server.prototype.getUrl = function () {
        return "https://".concat(this.ip, ":").concat(this.port);
    };
    return Server;
}());
function aws(server) {
    server.isAWS = true;
    server.awsInfo = function () { return server.getUrl(); };
    return server;
}
function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}
var s1 = aws(new Server("12.34.56.78", 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());
var s2 = azure(new Server("98.87.76.12", 1000));
console.log(s2.isAzure);
console.log(s2.getUrl());
