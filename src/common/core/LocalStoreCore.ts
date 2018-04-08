export default class LocalStoreCore {
    put(key: string, value : any){
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key:string) : any {
        return JSON.parse(localStorage.getItem(key));
    }
    remove(key: string) {
        localStorage.removeItem(key);
    }
    clear(){
        localStorage.clear();
    }
    isExistKey(key:string){
        return this.get(key) && true;
    }

}