import {observable, action, computed} from "mobx";

class TimeStore{
    static __instance = null;
    static getInstance() {
        if(TimeStore.__instance === null)
            TimeStore.__instance = new TimeStore();
        return TimeStore.__instance;
    }

    constructor(){
        TimeStore.__instance = this;
    }

    @computed get ms(){
        return this.current_time ? this.current_time.getMilliseconds() : 'not set';
    }
}

export default TimeStore.getInstance();