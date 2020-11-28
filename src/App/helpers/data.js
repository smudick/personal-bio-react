import axios from 'axios';

const baseUrl = 'https://sam-mudick.firebaseio.com/';

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`).then((response) => {
    resolve(Object.values(response.data));
  })
    .catch((error) => reject(error));
});

export default getProjects;
