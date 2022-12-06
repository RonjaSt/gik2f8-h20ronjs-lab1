'use strict'



let bookList = [];
let bookDetail=[]
window.addEventListener("load", () =>{
    getAll().then((apiBooks) => (bookList = apiBooks));
});

window.addEventListener("load", () =>{
  getAll().then((apiBooks) => (bookDetail = apiBooks));
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


    for(let bookId of document.getElementsByClassName("book-list__item")) {
      bookId.addEventListener("mouseover", (e) => {
        
        let bookDetails =` <div ID="idbookdetails" class=" mb-2 mx-2 last:mb-0 p-3 text-amber-500 last:border-b-0 border-b border-zinc-700 cursor-pointer" ${bookId.getAttribute('ID')}-${bookId.getAttribute("Author")}
        -${bookId.getAttribute("Title")}-${bookId.getAttribute("Pages")}-${bookId.getAttribute("Date")}>
        ${bookId.getAttribute("Title")} - ${bookId.getAttribute('ID')} -${bookId.getAttribute("Author")}-${bookId.getAttribute("CoverImg")}-${bookId.getAttribute("Pages")}-${bookId.getAttribute("Date")}
        <img src="${bookId.getAttribute("CoverImg")}" alt="bild saknas" width="50" height="60">
        </div>` 
      
        
        root.insertAdjacentHTML('beforeend', (bookDetails));
      }
        
      )
    bookId.addEventListener("mouseleave",(e) =>{
      console.log("mouseout")
      document.getElementById("idbookdetails").remove();
        }
        )}
 }


/* document.body.addEventListener('mouseover', (e) => 
hoverAddElement());
  
    
var myDiv = document.createElement('div');
 
  
    
   myDiv.mouseover =function hoverAddElement(){ 
      for(i=0; i<5; i++){
        theData.onmouseover = function() { return get(i);}
        }
        console.log(bookDetail[i]);
        document.getElementsById("myDiv").innerHTML = myDiv;
        document.body.appendChild.getElementsByName(myDiv)
        return HTML;
      
    }
    */
    
   
   
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