function fetchUrl(url) {
return fetch(url)
    .then(res => res.json())
}
fetch('https://anapioficeandfire.com/api/books/1')
.then((res) => {
    return res.json()
})
.then((bookData) => {
    console.log(bookData)
    // add title
    const title = document.getElementById('title');
    title.textContent = bookData.name;
    // add authors
    const ul = document.getElementById('authors');
    bookData.authors.forEach((author) => {
    const authorLi = document.createElement('li');
    authorLi.textContent = author;
    ul.appendChild(authorLi);
    })
    const charPromises = bookData.povCharacters.map((url) =>{
    return fetchUrl(url)
    })
    Promise.all(charPromises)
    .then(characters => {
        console.log(characters);
        const charList = document.getElementById('characters');
        characters.forEach(char => {
        const li = document.createElement('li');
        li.textContent = char.name;
        charList.appendChild(li)
        })
    })
})