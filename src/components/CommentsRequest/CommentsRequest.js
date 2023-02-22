import axios from "axios";

const CommentsRequest = {
    getAll: () => axios.get(axios.comments),
    addComments: (data) => axios.post(axios.comments, data)
}

export {CommentsRequest}