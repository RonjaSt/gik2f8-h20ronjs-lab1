const BookListItem = (book) => {
    

    let html = `<li 
    class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-amber-500 last:border-b-0 border-b border-zinc-700 cursor-pointer">
    ${book.author} -${book.title}
    </li>`; 
    return html;
}
const BookListDetails= (book) => {
    

    let html = `<li 
    class="book-list__details mb-2 mx-2 last:mb-0 p-3 text-amber-500 last:border-b-0 border-b border-zinc-700 cursor-pointer">
    ${book.id} -${book.author}-${book.title}-${book.coverImage}-${book.pages}-${book.releasedate}
    </li>`; 
    return html;
}