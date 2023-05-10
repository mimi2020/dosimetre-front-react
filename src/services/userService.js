import http from "./interceptor/Axiosinterceptor.js";
export default class UserService
{
  create(data){
    console.log("add user UserService")
      return http.post("/user/create",data);
  }

  getAll(){
        return http.get("/user");
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
  lokin(data)
  {
    return http.post("/user/lo")
  }
}
//  getCarsOfOneUser(id){

//  return http.get("/user/CarsOfOneUser/"+id)
// }


