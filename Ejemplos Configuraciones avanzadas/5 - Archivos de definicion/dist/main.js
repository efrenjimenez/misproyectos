"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var _ = require("lodash");
new producto_1.Producto();
var App = (function () {
    function App() {
        console.log("Esta es una nueva app");
    }
    return App;
}());
console.log('¿Es arreglo? ', _.isArray(producto_1.products));
new App();
