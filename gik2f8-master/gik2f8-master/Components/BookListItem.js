
const BookListItem= (book) => {
    

    let html = `<li  ID="${book.id}" Author="${book.author}" Title="${book.title}" CoverImg="${book.coverImage}" Pages="${book.pages}" Date="${book.releasedate}"
    class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-amber-500 last:border-b-0 border-b border-zinc-700 cursor-pointer">
   
    ${book.author} - ${book.title} 
    </li>`; 
    return html;
}