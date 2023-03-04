
import {axiosService} from "../../services";
import {urls} from "../../config";

const UserRequest = {
    getAll: () => axiosService.get(urls.users),
    create:(newUser) => axiosService.post(urls.users, newUser)
}

export {UserRequest}