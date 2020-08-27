"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexRoutes = /** @class */ (function () {
    function indexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    indexRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) {
            res.send('Hola mundo!');
        });
        this.router.get('/prueba', function (req, res) {
            res.send('Esta es la prueba para el nuevo dominio /prueba');
        });
    };
    return indexRoutes;
}());
var index_routes = new indexRoutes();
exports.default = index_routes.router;
