fetch('https://anapioficeandfire.com/api/books/1')
    .then((res) => {
        return res.json()
    })
    .then(bookData => {
        console.log(bookData)
        //add title
        const title = document.createElement('h1');
        title.textContent = bookData.name
        document.body.appendChild(title);

        //add authors to the page
        const ul = document.createElement('ul');
        document.body.appendChild(ul);

        bookData.authors.forEach(author => {
            const authorLi = document.createElement('li');
            authorLi.textContent = author;
            ul.appendChild(authorLi);
        })
    })