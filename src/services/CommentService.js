import {axiosService} from "./axiosService";
import {urls} from "../config";

const CommentService = {
    getAll: () => axiosService.get(urls.comment),
    create: (newComment) => axiosService.post(urls.comments, newComment),

}
export {
    CommentService
}