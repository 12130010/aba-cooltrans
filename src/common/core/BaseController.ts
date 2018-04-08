import { StateService } from '@uirouter/angularjs';
export default class BaseController {
    constructor (protected state: StateService){

    }

    gotoSate(toState : string, param? : Object){
        this.state.go(toState, param);
    }
}