import axios from 'axios';
class API {
  getData = () => {
    axios.get('https://dummyjson.com/users')
    .then(function (response) {
      if (response.status === 200 && response != null) {
        var data = response.data;
        console.log(data)
        return data
      } else {
        console.log('problem');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
export default API;