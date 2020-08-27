"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexroutes_1 = __importDefault(require("./routes/indexroutes"));
var peliculasroutes_1 = __importDefault(require("./routes/peliculasroutes"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var server = /** @class */ (function () {
    function server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    // localhost:3000/movie/obtener
    server.prototype.routes = function () {
        this.app.use(indexroutes_1.default);
        this.app.use('/movie', peliculasroutes_1.default);
    };
    server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('servidor en el puerto: ', _this.app.get('port'));
        });
    };
    return server;
}());
var servidor = new server();
servidor.start();
