declare var angular: any;

import AccountService from "./AccountService";
import AccountController from "./AccountController";


 export default function () {
    angular.module('accountModule', ['commonUIModule'])
    .service('accountService', AccountService)
    .controller('accountController', AccountController)
    ;
 }

