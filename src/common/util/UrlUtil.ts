export default class UrlUtil {
    private urlMapping : Object;

    constructor(urlMapping : Object){
        this.urlMapping = urlMapping;
    }
    getUrl(action, paramObj: Object): string {
        return this.replaceParam(this.urlMapping[action].url, paramObj);
    }

    private replaceParam(url: string, paramObj: Object): string {
        if(paramObj){
            Object.keys(paramObj).forEach( (key) => {
                url = url.replace(':' + key, paramObj[key]);
            });
        }
        return url;
    }
}