const API_KEY = 'qhaiazHloJQDXgwcHKeofAciahQEkd7X0M39i2Pa';
const END_POINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`;

/**
 * interacts with NASA API to get images data
 */
export const getNASAAOPD = () => {
  return fetch(END_POINT).then(response => response.json())
}