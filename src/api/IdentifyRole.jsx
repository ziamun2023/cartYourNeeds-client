
import { getUserData } from "./Getdata";


export const theRole=(email)=>{
    const alluserData=getUserData()

    const user=alluserData.find(a=>a.email===email)

return user
}

