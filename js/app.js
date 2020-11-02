const  compactCards = document.querySelector('#resources'), 
       input = document.querySelector('#search_input'),
       title = document.querySelector('#title'),
      category = document.querySelector('#category'),
      link = document.querySelector('#link'),
      form = document.querySelector('form'),
      chooseFile = document.querySelector('#choose-file') 

let searchResults = []

  
// Render added files to the dom
const renderFiles = (data, id) => {
   const files = `
   <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
   <div class="card mb-3 mx-auto" style="width: 14rem; height: 16rem;" data-id="${id}">
   <div class="card-body text-center p-3">
   <img src="./images/icons8-code-file-96.png" alt="file-icon" />
   <h5 class="card-title mt-2">${data.title}</h5>
   <p class="card-subtitle mb-2 text-muted">${data.category}</p>
   <a href=${data.link}>View</a>
   <div class="text-right mb-5 delete-btn">
   <svg width="1.2em" height="1.2em" data-id="${id}" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
   <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
   Delete File
   </svg>
   </div>
   </div>
   </div>
   </div>
   `
   compactCards.innerHTML += files;
}


//Remove files from webpage
const removeFiles = (id) => {
   const file = document.querySelector(`.card[data-id=${id}]`) 
   file.remove();
}


//Filter Search
input.addEventListener('keyup', e => {
   const filter = e.target.value.toLowerCase()
   const searchValue = category
   let results = searchResults.filter(value => 
      value.searchValue.toLowerCase().includes(filter)
   )
   renderFiles(results)

})
