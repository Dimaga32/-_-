import axios from "axios";
class PostServise{
  static async fetchNames(url){
    try{
    const response =await axios.get(url)
    var d =response.data.map(({ id, body }) => ({name: body, id: id }))
    return(d)
    }
    catch(error){
      console.error(error);
      return
    } 
  }
}
export default PostServise