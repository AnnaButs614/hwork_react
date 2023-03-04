import {axiosService} from "../../services";
import {urls} from "../../config";

const CommentsRequest = {
    getAll: () => axiosService.get(urls.comment),

   create: (data) => axiosService.post(urls.comment, data)
}

export {CommentsRequest}