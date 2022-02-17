"use strict";
var Producto = /** @class */ (function () {
    function Producto() {
        console.log("Soy un producto");
    }
    return Producto;
}());
///<reference path="./producto.ts"/>
//import { Producto } from './producto'
new Producto();
var App = /** @class */ (function () {
    function App() {
        console.log("Esta es una nueva app");
    }
    return App;
}());
new App();
