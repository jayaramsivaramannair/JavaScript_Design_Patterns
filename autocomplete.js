const createAutoComplete = ({root}) => {
  
  root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;
  

  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');
  const input = root.querySelector('.input');

  
  //This is the call back function which will be passed into the event listener on input
  const onInput = async (event) => {
      const movies = await fetchData(event.target.value);

      if(!movies.length) {
        dropdown.classList.remove('is-active');
        return;
      }
  
      resultsWrapper.innerHTML = '';
      dropdown.classList.add('is-active');
      for(let movie of movies) {
        const option = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

        //Backticks are required instead of single quotes for multi-line strings
        option.classList.add('dropdown-item');
        option.innerHTML = `
          <img src="${imgSrc}"/>
          ${movie.Title}
        `;

        option.addEventListener('click', () => {
          dropdown.classList.remove('is-active');
          input.value = movie.Title;
          onMovieSelect(movie);
        })
        
        resultsWrapper.appendChild(option);
      }
  };

  input.addEventListener('input', debounce(onInput, 1000));

  document.addEventListener('click', event => {
    //If the click is not on the input or the dropdown menu, then close the dropdown menu
    if (!root.contains(event.target)) {
      dropdown.classList.remove('is-active');
    }
  })
}