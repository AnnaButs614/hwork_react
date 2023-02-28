import axios from "axios";
import {axiosService} from "../../services";

const CommentsRequest = {
    getAll: () => axios.get(axios.comments),
    // addComments: (data) => axios.post(axios.comments, data)
    createComments: (data) => axiosService.post(axios.comments, data)
}

export {CommentsRequest}