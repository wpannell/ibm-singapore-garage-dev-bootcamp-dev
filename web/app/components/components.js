import angular from 'angular';
import {details} from './products/details/details';
import {addToCart} from './products/add-to-cart/add-to-cart';
import {cart} from './cart/cart';
import {products} from './products/products';

export const components = angular.module('components', [
  details.name,
  addToCart.name,
  cart.name,
  products.name
]);
