import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {addToCart} from '../add-to-cart/add-to-cart';
import {detailsDirective} from './details.directive.js';
import {productsServiceModule} from '../service/products-service-module';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const details = angular.module('details', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  addToCart.name,
  productsServiceModule.name
])

.config( ($stateProvider) => {
  $stateProvider.
  state('details', {
    url: '/product/{productId}',
    template: '<details></details>'
  });
})

.directive('details', detailsDirective);
