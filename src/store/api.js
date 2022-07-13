import axios from "axios";

class AppApi {

  async getAgents() {
      const response = await axios.get('/agents/')
      return (response.data)
    }

//   async getAgentById(id){
//       const response = await axios.get(`/agents/${id}`)
//       return (response.data)
//   }

}


export const api = new AppApi(); 