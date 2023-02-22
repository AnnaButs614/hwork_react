import axios from "axios";
import {axiosService} from "../../services";
import {urls} from "../../config";

const UserRequest = {
    getAll: () => axiosService.get(urls.users),
    createUsers: (data) => axiosService.post(axios.users, data)
}

export {UserRequest}