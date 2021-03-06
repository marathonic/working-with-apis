const myImg = document.querySelector('img');
const defaultImg = new Image();
defaultImg.src = './oops.png';


const container = document.querySelector('[data-container]');
const headerContainer = document.createElement('div');        
headerContainer.classList.add('header-container');
const header = document.createElement('h1');
header.classList.add('header');
header.innerHTML = 'gif'
const randomBtn = document.createElement('button');
randomBtn.classList.add('random-btn');
randomBtn.innerHTML = 'cats';

const loadinMsg = document.createElement('p');
loadinMsg.innerHTML = 'loading...'

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


////clicking logo reloads webpage

header.addEventListener('click', function(){
    location.reload();
});

searchBtn.addEventListener('click', getRequested);

            
randomBtn.addEventListener('click', getCats);



////display a GIF related to the query: 

async function getRequested() {

    try {
        if(container.contains(defaultImg)) {
    
            console.log('Container has blue fren')
            defaultImg.parentNode.removeChild(defaultImg);
        }
    
        let searchTerm = searchBar.value;
        console.log('Search button clicked')

        let response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Sek4VZCrk7hE5ecQnw2WPGHIMkUrIdUt&s=' + searchTerm, { mode: 'cors' })
        let queryData = await response.json();

        myImg.src = queryData.data.images.original.url;
        container.appendChild(myImg);
        
    }   catch(err)  {
        console.log(err);
        if(container.contains(myImg)) myImg.parentNode.removeChild(myImg);
        container.appendChild(defaultImg);
    }
};


////display a cat related GIF
async function getCats() {
    try {
        console.log('Cat button clicked')
        
        let response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Sek4VZCrk7hE5ecQnw2WPGHIMkUrIdUt&s=cats', { mode: 'cors' })
        let catData = await response.json();
        if(container.contains(defaultImg)) defaultImg.parentNode.removeChild(defaultImg)
    
        myImg.src = catData.data.images.original.url;
        container.appendChild(myImg);
    }   catch(err)   {
    console.log(err);
    if(container.contains(myImg)) myImg.parentNode.removeChild(myImg);
    container.appendChild(defaultImg);
    }
};    