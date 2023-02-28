import {axiosService} from "./axiosService";
import {urls} from "../config";

const UserService = {
    getAll: () => axiosService.get(urls.users),
    create: (newUser) => axiosService.post(urls.users, newUser),

}
export {
    UserService
}