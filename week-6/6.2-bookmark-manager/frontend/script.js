const API_URL = 'http://localhost:3001/bookmarks';



// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', async () => {
//   start here
     
        await fetch(API_URL).then(res => {
            if (res.status>=200 && res.status <300) {
            return res.json()
            }else{
            throw new Error();
            }
        }).then(data=> addBookmarkToDOM(data.bookmarks))
        .catch(err=>console.log('fetch() failed'));
 
     

});

// Fetch bookmarks from the backend
function fetchBookmarks() {
    //  start here
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
    //  start here
   const list= document.getElementById("bookmark-list")
   list.innerHTML="";

    for(let i=0;i< bookmark.length;i++)
    {
        const listItem= document.createElement('li');
        const textNode= document.createTextNode(`${bookmark[i].bookmark} ${bookmark[i].category}`)
        listItem.appendChild(textNode);
        
        const buttonItem= document.createElement("button");
        buttonItem.innerHTML="Delete"
        buttonItem.addEventListener('click', ()=>{deleteBookmark(bookmark[i].id)})

        

        list.appendChild(listItem);
        list.appendChild(buttonItem);
    }

}

// Add a new bookmark
document.getElementById('add-bookmark-btn').addEventListener('click', async () => {
      //  start here
        let bookmark= document.getElementById('bookmark-url').value;
        let category= document.getElementById('bookmark-category').value;
        
        
        document.getElementById('bookmark-url').value="";  
        document.getElementById('bookmark-category').value="";

        const newBookmark= {
            bookmark:bookmark,
            category: category,
            
        }

       

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(newBookmark) 
      };

      // how to access data from fetch response
      // https://stackoverflow.com/questions/65267754/how-to-get-data-from-response-from-fetch-javascript-request

     await fetch(API_URL,options).then(res => {
        if (res.status>=200 && res.status <300) {
          return res.json()
        }else{
          throw new Error();
        }
    }).then(data=> addBookmarkToDOM(data.bookmarks))
     .catch(err=>console.log('fetch() failed'));
     
});

// Delete a bookmark
function deleteBookmark(id) {
     //  start here;

     fetch(API_URL+'/'+ id, {
        method: 'DELETE',
      })
      .then(res => res.text()) // or res.json()
      .then(res => console.log(res))

      location.reload();
}
