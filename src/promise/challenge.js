
const fetchData = require("../utils/fetchData");
const API= "https://rickandmortyapi.com/api/character/";



/** se hace un primer llamado y un return de una nueva petición para después hacer otros
 * dos llamados a la API, finalmente se usa el catch para capturar el error 
 */
fetchData(API)
.then(data => { 
    console.log(data.info.count);
    return fetchData(`${API}${data.results[1].id}`);
})
.then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
})
.then (data => {
    console.log(data.dimension)
})
.catch(error => console.error(error));

