


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

const root = document.querySelector('.autocomplete')
root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input"/>
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector(".results");

/**Debounce function ***** moved to utils.js to make a file better to read/

 
/**Second way to call debounce function */
const onInput= async event => {
    const movies = await fetchData(event.target.value); /**because fetchData is async function, you have to use await word to wait for the function to return to you with the data */
    
    if(!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }


    resultsWrapper.innerHTML = '';
    dropdown.classList.add("is-active");

    for (let movie of movies) {
        const option = document.createElement('a')
        const imgSrc = movie.Poster ==="N/A" ? "" : movie.Poster;
        
        option.classList.add("dropdown-item")
        option.innerHTML = `
            <img src=${imgSrc} />
            ${movie.Title}
        `;
        option.addEventListener('click',()=>{
            dropdown.classList.remove("is-active");
            input.value = movie.Title;
            onMovieSelect(movie);
        })

        resultsWrapper.appendChild(option);
    }
  };
 
 input.addEventListener('input', debounce(onInput,500))

 /**Code to close the drodown menu when it is clicked outside of root element */
 document.addEventListener('click', event=>{
     if (!root.contains(event.target)){
         dropdown.classList.remove('is-active')
     }
 })
/*******************************************End of DEBOUNCE */

const onMovieSelect = async movie =>{
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey: '215f4bc2',
            i: movie.imdbID
        }
    })

    console.log(response.data)
}