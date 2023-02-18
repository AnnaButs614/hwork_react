import {axiosService} from "./axiosService";

const airService={
    getAll: axiosService.get('/launches')

}
export
{
    airService
}