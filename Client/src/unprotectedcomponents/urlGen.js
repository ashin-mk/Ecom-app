import axios from "axios"

const fetchData=(methodType,endpoint,isheader,payload="")=>{
const authtoken=localStorage.getItem("authorization")
let token={}
    if(isheader===true){
 token["authorization"]=authtoken
    }
return axios({
    url:"https://serverecom.herokuapp.com/"+endpoint,
method:methodType,
headers:token,
data:payload
})
}
export default fetchData