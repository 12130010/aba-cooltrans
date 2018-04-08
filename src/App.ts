declare var angular: any;

//import module
import commonUIModule from './common/module/common-ui'
commonUIModule();

import accountModule from './common/module/account'
accountModule();

import abaOrderModule from './orders'
abaOrderModule();

import NavigationController from './navigation/NavigationController';
angular.module('aba-cooltrans')
.controller('navigationController', NavigationController);