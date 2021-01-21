const debounce =(func, delay=1000) => {
    let timeoutId;
    return(...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func.apply(null, args);
        },delay);
    };
};

/*********************************SEARCH  operation below */
/*const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey: '215f4bc2',
            s:'avengers'
        }
    });

    console.log(response.data);
};

fetchData();*/
/********************************************** END of SEARCH OPERATION */

/*********************************************** LOOK by ID */
/*const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey: '215f4bc2',
        i: 'fdfd'
        }
    });

    console.log(response.data);
}; 

fetchData();
}
*/

/******************************************END of ID search */

/***************************************** SetTIMEOUT and CLEARTIMEOUT addition */

/*const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            apikey: '215f4bc2',
            s: searchTerm
        }
    });

    console.log(response.data);
}; 

const input = document.querySelector('input');
 /**Adding a set timeOut to prevent the code to run after each letter, only when user stops typing */
 /*let timeoutId;
 
 const onInput= (event) => {
    if (timeoutId){
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {fetchData(event.target.value)}, 500);
 };

input.addEventListener('input', onInput)

/*******************************************End of SetTIMEOUT and CLEARTIMEOUT addition */
/**Adding a set timeOut to prevent the code to run after each letter, only when user stops typing */
 
 /**One way to write debouce function */

 /*const onInput= debounce(event => {
   fetchData(event.target.value)
 });

input.addEventListener('input', onInput)*/
