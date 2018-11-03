import axios from 'axios';

// since we can't alter the data returned from axios,
// we may need to write it out the long way occasionally
// const getCats = () => {
//   return new Promise((resolve, reject) => {
//     .then((data) => {
//       const cleanData = data.data.cats;
//       resolve(cleanData);
//     })
//     .catch ((err) => {
//         reject(err);
//      })
//   })
// }

const getCats = () => {
  return axios.get('https://random-dogs-api.herokuapp.com/cats/15');
};

export default getCats;
