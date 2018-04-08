import CommonCore from '../../core/CommonCore';

export default class CommonService extends CommonCore{

    public static $inject = [
        '$http'
    ];
    
    constructor ( $http: ng.IHttpService) {
        super($http);
    }

    postFrom (actionParam, formObject : Object) : Promise<Object> {
        let formData = new FormData();

        this.iterateObj(formObject, (key, value) => {
            formData.append(key, value);
        })

        return this.http.post(this.extractUrl(actionParam.action, actionParam.param), formData, {
            headers : { 'Content-Type': undefined} 
        });
    }
}

