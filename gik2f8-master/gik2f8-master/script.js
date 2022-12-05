'use strict'



let bookList = [];
let bookDetail=[]
window.addEventListener("load", () =>{
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




function renderBookList(bookList){
    
  

    const existingElement = document.querySelector('.book-list');
    
    const root = document.getElementById('root');
    
    existingElement && root.removeChild(existingElement);
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
 
}
document.body.addEventListener('mouseover', (e) => getDetails(
  bookList.filter(({id, title, author, coverImage , pages, releasedate})=>{
    return(
      id||title.indexOf(searchTerm.toLowerCase())>=0|| author.indexOf(searchTerm.toLowerCase())>=0|| coverImage|| pages ||releasedate 

      );
    })
    
  )

);



/* function hoverRemoveElement() {
    const existingElement = document.getElementById('bookDetail');
    existingElement.remove();
} */
/* document.body.addEventListener('mouseover', (e) => 
hoverCreateElement(e.target));
 */
/* function elementFromHtml(html){
    const template = document.createElement("template");
    
    return template.content.firstElementChild;
}
 */


   

/* document.body.addEventListener('mouseover',() =>document.body.innerText='Mouse Enter');
document.body.addEventListener('mouseleave',() =>document.body.innerText='Mouse leave'); */