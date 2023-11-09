import { commonAPI } from "./commonAPI"

// login API
export const loginAPI = async () => {
    return await commonAPI("POST",`https://api.denzo.io/api/cus/v1/login`,)
}