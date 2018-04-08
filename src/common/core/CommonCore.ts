import {Promise} from 'es6-promise';

import {UrlUtil} from "../util";

declare var serverUrl : string;
declare var urlMapping : Object;

class CommonCore {
    private urlUtil : UrlUtil;
    private serverUrl : string;
    protected http : any;

    constructor ($http) {
        this.serverUrl = serverUrl;
        this.urlUtil = new UrlUtil(urlMapping);
        this.http = $http;
    }

    extractUrl(action:string, param :  Object) : string{
        return this.serverUrl + this.urlUtil.getUrl(action, param);
    }

    protected iterateObj(obj : Object | Array<Object>, callback : Function) {
        Object.keys(obj).forEach((key) => {
            callback(key, obj[key]);
        });
    }

    isNotNull(obj) : boolean {
        return obj && obj !== undefined && obj !== null;
    }
}

export default CommonCore;