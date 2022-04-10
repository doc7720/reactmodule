import { axiosService } from "./axios.service";
import { urls } from '../constants';

export const usersService = {
    gettAll: () => axiosService.get(urls.users)
}