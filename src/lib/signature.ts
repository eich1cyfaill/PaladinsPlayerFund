import { resDate } from "./date"
import md5 from "blueimp-md5"


export let signatureDI = '4178'
export let signatureMethod = 'createsession'
export let signatureAPI = '23DE5825C1584F6FAF742A2B7B39F4B8'
export let signature = (DI: string, method:string, API:string, Date: string):string => {
    return md5(DI + method + API + Date)
}


