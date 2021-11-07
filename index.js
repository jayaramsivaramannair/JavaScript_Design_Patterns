const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '4bbade0b',
      s: searchTerm,
    }
  });
  console.log(response.data);
}


const input = document.querySelector('input');

//Debounce is a function which returns a function.
const debounce = (cb, delay = 500) => {
  let timeoutId;
  return (...args) => {
    //While entering the function, if the timerID is already set then clear it and set a new timer
    if(timeoutId) {
      clearTimeout(timeoutId);
    }

    //This is the timeout function which will fetch movies after 1000 milliseconds has elapsed
    //Once the user stops typing, the final timer will run after 1000 milliseconds and fetch the movies
    timeoutId = setTimeout(() => {
      //Take each argument passed into the function and pass them separately into the callback function
      cb.apply(null, args);
    }, delay)
  };
}


//This is the call back function which will be passed into the event listener on input
const onInput = (event) => {
    fetchData(event.target.value);
};


input.addEventListener('input', debounce(onInput, 1000));
