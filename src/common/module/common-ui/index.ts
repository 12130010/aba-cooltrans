declare var angular: any;

import CommonService from "./CommonService";
import LocalStoreService from "./LocalStoreService";

 export default function () {
    angular.module('commonUIModule', [])
    .service('commonService', CommonService)
    .service('localStoreService', LocalStoreService)
    ;
 }

