import {axiosService} from "./axiosService";
import {urls} from "../config";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    updateById:(id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    delete:(id) => axiosService.delete(`${urls.cars}/${id}`)
}
export {
    carService
}