import { Producto, products } from './producto'

import * as _ from 'lodash';

new Producto();

class App {
    constructor() {
        console.log("Esta es una nueva app");

    }
}

console.log('¿Es arreglo? ', _.isArray(products))

new App();

