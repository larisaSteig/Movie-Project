


/***************************************** DEBOUNCE HELPER FUNCTION*/

const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey: '215f4bc2',
            s: searchTerm
        }
    });

    if(response.data.Error){
        return[]; /**return empty array  when you see an error  */
    }

    return response.data.Search /**Search is the part of the response.data collection and start with S, thats why we are using it this way */
}; 

const input = document.querySelector('input');

/**Debounce function ***** moved to utils.js to make a file better to read/

 
/**Second way to call debounce function */
const onInput= async event => {
    const movies = await fetchData(event.target.value); /**because fetchData is async function, you have to use await word to wait for the function to return to you with the data */
    
    for (let movie of movies) {
        const div = document.createElement('div')

        div.innerHTML = `
            <img src=${movie.Poster} />
            <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
  };
 
 input.addEventListener('input', debounce(onInput,500))
/*******************************************End of DEBOUNCE */