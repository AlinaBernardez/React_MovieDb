export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGVkODZlMDgwZjkyY2Q3ODc3NmU0ZjY2MGU1MWMxMyIsInN1YiI6IjY0Yjk0ZjM2NGQyM2RkMDBhZDBkMWJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.urckhKhBZWRoVmR18FdZ81X8tRhuDkyaxe58gy1aRVk'
    }
};

// export function getData(path) {
//     return(
//         fetch('https://api.themoviedb.org/3/' + path, options)
//     )
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

export const getData = (path) => fetch('https://api.themoviedb.org/3/' + path, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
