"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var peliculasRoutes = /** @class */ (function () {
    function peliculasRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    peliculasRoutes.prototype.config = function () {
        this.router.get('/obtener', function (req, res) {
            res.send('esto es una pelicula');
        });
    };
    return peliculasRoutes;
}());
var peliculas_routes = new peliculasRoutes();
exports.default = peliculas_routes.router;
