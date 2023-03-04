import {axiosService} from "../../services";
import {urls} from "../../config";

const CommentsRequest = {
    getAll: () => axiosService.get(urls.comment)
    // addComments: (data) => axios.post(axios.comments, data)
   // createComments: (data) => axiosService.post(axios.comments, data)
}

export {CommentsRequest}