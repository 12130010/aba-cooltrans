import AccountService from "./AccountService";
import BaseController from "../../core/BaseController";

export default class AccountController extends BaseController{
    public static $inject = [
        '$scope',
        '$state',
        'accountService'
    ];

    constructor(
        private $scope,
        private $state,
        private accountService : AccountService
    ) {
        super($state);
        $scope.userDataLogin = {};
        $scope.userDetail = null;

        if(this.accountService.isUserLogin())
            this.gotoSate('tab.orders');
    }

    doLogin () {
        this.accountService.doLogin(this.$scope.userDataLogin)
        .then( (userDetail) => {
            this.$scope.userDetail = userDetail;

            this.gotoSate('tab.orders');
        })
        .catch(e => {
            console.error(e);
        })
    }
}