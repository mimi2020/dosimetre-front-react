import http from "./interceptor/Axiosinterceptor.js";
export default class DoseService
{
  create(data){
    console.log("add dose",data)
      return http.post("/dose/createdose",data);
  }

  getAll(){
        return http.get("/dose/getListAlldose");
  }
  remove(id){
      return http.delete("/user/deleteuser/" + id);
  }
  update(id, data){
          return http.put("/user/updateUser/"+ id, data);
      }

  findByid(id){
      return http.get("/user/getUserById/"+id);
  }
  
}
//  getCarsOfOneUser(id){

//  return http.get("/user/CarsOfOneUser/"+id)
// }


