import {observable, action} from 'mobx';

import axios from 'axios';

class ProfileStore {
    static __instance = null;
    static getInstance() {
        if(ProfileStore.__instance === null)
            ProfileStore.__instance = new ProfileStore();
        return ProfileStore.__instance;
    }

    constructor() {
        ProfileStore.__instance = this;
    }

    @observable user = null;
    @action login = async (user) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/loginUser',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(user)
            });
            if(response.data) {
                this.user = response.data;
                return true;
            }
        }catch (ex) {
            alert(ex.toLocaleString());
            return false;
        }
    };
}

export default ProfileStore.getInstance();