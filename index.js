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
input.addEventListener('input', (event) => {
  console.log(event.target.value);
})
