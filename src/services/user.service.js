import {axiosService} from "./axios.service";
import {url} from "../configs";

const userService = {
    getAll: () => axiosService.get(url.users)
}

export {userService};