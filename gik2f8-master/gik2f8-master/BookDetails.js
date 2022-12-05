const BookDetails = (book) => {
    
    
     let html = `<li 
    class="book-Details mb-2 mx-2 last:mb-0 p-3 text-amber-300 last:border-b-0 border-b border-zinc-500 cursor-pointer">
    ${book.id} -${book.author}-${book.title}-${book.coverImage}-${book.pages}-${book.releasedate}
    </li>`; 
    return html;
    
}
