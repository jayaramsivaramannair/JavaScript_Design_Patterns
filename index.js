const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '4bbade0b',
      s: 'avengers'
    }
  });

  console.log(response.data);
}

fetchData();
