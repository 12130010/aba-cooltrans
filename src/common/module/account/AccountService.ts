import CommonService from "../common-ui/CommonService";
import { Promise } from "es6-promise";
import LocalStoreService from "../common-ui/LocalStoreService";

export default class AccountService{

    public static $inject = [
        'commonService',
        'localStoreService'
    ];

    public static readonly USER_DETAIL : string = 'user-detail';

    private userDetail : Object;
    private userDataLogin : Object;

    constructor(private commonService: CommonService,
                private localStoreService : LocalStoreService){
            
    }

    isUserLogin () : boolean {
        if (!this.commonService.isNotNull(this.userDetail)){
            this.userDetail = this.localStoreService.get(AccountService.USER_DETAIL);
        }
        return this.commonService.isNotNull(this.userDetail);
    }

    doLogin(userDataLogin : Object) : Promise<Object> {
        return new Promise( (resolve, reject) => {
            this.userDataLogin = userDataLogin;
            this.userDetail = userDataLogin;
            this.localStoreService.put(AccountService.USER_DETAIL, userDataLogin);
            resolve(userDataLogin);
        });
    }

    doLogout(){
        this.userDataLogin = null;
        this.userDetail = null;
        this.localStoreService.remove(AccountService.USER_DETAIL);
    }

}