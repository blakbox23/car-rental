import axios from "axios";

class AppApi {

  async getVehicles() {
      const response = await axios.get('http://localhost:3000/api/v1/vehicles/')
      return (response.data)
    }

//   async getAgentById(id){
//       const response = await axios.get(`/agents/${id}`)
//       return (response.data)
//   }

}


export const api = new AppApi(); 