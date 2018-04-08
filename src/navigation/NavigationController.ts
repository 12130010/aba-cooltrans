import AccountService from "../common/module/account/AccountService";
import BaseController from "../common/core/BaseController";

export default class NavigationController extends BaseController{
    public static $inject = [
        '$scope',
        '$state',
        '$ionicActionSheet',
        '$ionicViewService',
        'accountService'
    ];

    constructor(
        private $scope,
        private $state,
        private $ionicActionSheet,
        private $ionicViewService,
        private accountServive : AccountService
    ){
        super($state);
    }

    openActionSheet(){
        let buttons = [
            { 
                text: 'Đăng xuất' ,
                action : ()=>{
                    this.accountServive.doLogout();
                    this.gotoSate('login');
                    this.$ionicViewService.clearHistory()
                }
            }
        ];
        var hideSheet = this.$ionicActionSheet.show({
            buttons: buttons,
            destructiveText: 'Hủy',
            titleText: 'Chọn hành động',
            cancelText: 'Cancel',
            cancel: () => {
                 // add cancel code..
            },
            destructiveButtonClicked : () => {
                hideSheet();
            },
            buttonClicked: (index) => {
                buttons[index].action();
              return true;
            }
          });
    }

    doLogout(){
        this.accountServive.doLogout();
    }

}