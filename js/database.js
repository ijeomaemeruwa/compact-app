//Set up offline data
db.enablePersistence()
   .catch(err => {
       if(err.code === 'failed-precondition'){
           console.log('Persistence failed') //error when multiple tabs are open at once
       } else if(err.code === 'implemented'){
           console.log('Persistence is not available')//error when browser is not supported
       }
   });


//Set up Database Real-time listener
db.collection('files').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
        renderFiles(change.doc.data(), change.doc.id); //render data to webpage
    }
    if(change.type === 'removed'){
        removeFiles(change.doc.id); //remove data from webpage
    }
    });
})


//Add new file
form.addEventListener('submit', e => {
    e.preventDefault();

    const newFile = {
        title: title.value,
        category: category.value,
        link: link.value
    };
    db.collection('files').add(newFile)
    .catch(err => console.log(err))
   
     title.value = '';
     category.value = '';
     link.value = '';
});

//Delete a File
const cards = document.querySelector('.cards');
cards.addEventListener('click', e => {
    //console.log(e);
    if(e.target.tagName === 'svg'){
        const id = e.target.getAttribute('data-id');
        db.collection('files').doc(id).delete();
    }
})

