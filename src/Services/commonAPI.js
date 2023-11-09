import axios from 'axios'

export const commonAPI = async (httpMethod,url,body,header) => {
    let reqConfig = {
        method:httpMethod,
        url,
        data:body,
        header:header?header:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(
        result=>{return result}
    ).catch(err=>{return err})
}