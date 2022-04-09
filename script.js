const myImg = document.querySelector('img');
const defaultImg = new Image();
defaultImg.src = './oops.png';

const container = document.querySelector('[data-container]');
        const headerContainer = document.createElement('div');        
        headerContainer.classList.add('header-container');
        const header = document.createElement('h1');
        header.classList.add('header');
        header.innerHTML = 'Cool GIFs'
        const randomBtn = document.createElement('button');
        randomBtn.classList.add('random-btn');
        randomBtn.innerHTML = 'cats';

        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');
        const searchBtn = document.createElement('button');
        searchBtn.classList.add('search-btn');
        searchBtn.innerHTML = 'Search';

        const searchBar = document.createElement('input');
        searchBar.classList.add('search-bar');

        barContainer.appendChild(searchBar);
        barContainer.appendChild(searchBtn);
        barContainer.appendChild(randomBtn);

        headerContainer.appendChild(header);
        container.appendChild(headerContainer);
        container.appendChild(barContainer);

        randomBtn.addEventListener('click', function(){
            console.log('Cat button clicked')
            fetch('https://api.giphy.com/v1/gifs/translate?api_key=Sek4VZCrk7hE5ecQnw2WPGHIMkUrIdUt&s=cats', { mode: 'cors' })
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            myImg.src=response.data.images.original.url;
            container.appendChild(myImg);
        })
        })

        searchBtn.addEventListener('click', function(){
            if(container.contains(defaultImg)) {

                console.log('Container has blue fren')
                defaultImg.parentNode.removeChild(defaultImg);

            }
            let searchTerm = searchBar.value;
            console.log('Search button clicked')
            fetch('https://api.giphy.com/v1/gifs/translate?api_key=Sek4VZCrk7hE5ecQnw2WPGHIMkUrIdUt&s=' + searchTerm, { mode: 'cors' })
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            myImg.src=response.data.images.original.url;
            container.appendChild(myImg);
        }).catch(function(err){
            console.log(err);
            container.appendChild(defaultImg);
        })

        })