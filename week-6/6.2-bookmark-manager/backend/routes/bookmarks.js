let bookmarks = []; // in memory space

// a function to generate random string
// that is used to make unique id for
// each bookmark item.
function randomStringGenerator()
{
    
    let random;
    for(let i=0;i<10;i++)
    {
        random += String.fromCharCode(97+ Math.floor( (26)*Math.random()));
    }
    return random;
}

 async function addBookmark(req,res,next){
// write here
    if(req.body){
    
    const bookmark= req.body.bookmark;
    const category=req.body.category;
    const id= randomStringGenerator();

    const newBookmark={
        bookmark:bookmark,
        category:category,
        id:id
    }

    bookmarks.push(newBookmark);
    console.log(bookmarks);
    res.json({
        bookmarks:bookmarks
    })
    }
    else{
        res.json({
            message:"No body"
        })
    }

}

 async function deleteBookmark(req,res,next){
// write here
    
    const id= req.params.id

    const indexOfBookmark = bookmarks.findIndex( (iterator)=> iterator.id === id)

    bookmarks.splice(indexOfBookmark, 1);
    res.json({
        message:"Item deleted successfully"
    })
}

 async function getAllBookmarks(req,res,next){
// write here
    res.json({
        bookmarks:bookmarks
    })
}

module.exports={
    addBookmark: addBookmark,
    deleteBookmark:deleteBookmark,
    getAllBookmarks:getAllBookmarks
}
