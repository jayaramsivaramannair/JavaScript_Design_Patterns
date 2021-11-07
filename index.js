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

let timeoutId;

//This is the call back function which will be passed into the event listener on input
const onInput = event => {
  //While entering the function, if the timerID is alraeady set then clear it and set a new timer
  if(timeoutId) {
    clearTimeout(timeoutId);
  }

  //This is the timeout function which will fetch movies after 1000 milliseconds has elapsed
  //Once the user stops typing, the final timer will run after 1000 milliseconds and fetch the movies
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000)
};


input.addEventListener('input', /* onInput */);
