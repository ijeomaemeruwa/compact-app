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
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
     //console.log(change, change.doc.data(), change.doc.id)
    if(change.type === 'added'){
        //render data to webpage
        renderFiles(change.doc.data(), change.doc.id)
    }
    if(change.type === 'removed'){
        //remove data from webpage
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

