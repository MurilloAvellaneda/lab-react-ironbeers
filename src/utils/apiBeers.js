import axios from "axios";

class apiBeers {

  constructor () {
    this.api = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    })
  }

  getAllBeers = async () => {
    try {
      const { data } = await this.api.get('/')
      return data
    } catch (error) {
      throw new Error('Cannot Fetch Data')
    }
  }

  /*
  getOneBeer = async (id) => {
    try {
      const { data } = await this.api.get(`/${id}`)
      return data
    } catch (error) {
      throw new Error('Cannot Fetch Data')
    }
  }
  */

}

export default new apiBeers()