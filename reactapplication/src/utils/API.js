import axios from "axios";

export default {
    getRandomEmployee: function() {
        return axios.get("https://randomuser.me/api/?results=100&inc=image,name,phone,email,dob");
    },
    getSpecificEmployee: function(name) {
        return axios.get("https://randomuser.me/api/?name="+name)
    }
};