'use strict'



let bookList = [];
let book;

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
   
    })
    
  )
);



function showDetails(bookId){
  let bookInfo =` <div ID="deletingElement" class=" mb-2 mx-2 last:mb-0 p-3 text-amber-500 last:border-b-0 border-b border-zinc-700 cursor-pointer absolute pointer-events-none">
${bookId.title} - ${bookId.id} -${bookId.author}-${bookId.pages}-${bookId.releaseDate}
<img src="${bookId.coverImage}" alt="bild saknas" width="50" height="60">
</div>` 

root.insertAdjacentHTML('beforebegin', (bookInfo));



}
function renderBookList(bookList){
    
  

    const existingElement = document.querySelector('.book-list');
    
    const root = document.getElementById('root');
    
    existingElement && root.removeChild(existingElement);
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


    for(let bookId of document.getElementsByClassName("book-list__item")) {
      bookId.addEventListener("mouseover", (e) => {
        
        getBookById(bookId.getAttribute("ID")).then((apiBooks) => (book = apiBooks));{
          console.log(book)
          
        
        }
        
     
      }
      
      )
    
   
    bookId.addEventListener("mouseout",(e) =>{
     
      document.getElementById("deletingElement").remove();
      
        })
        }
 }
