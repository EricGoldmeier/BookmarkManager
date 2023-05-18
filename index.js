// let bookmarks = [];

//create function to add to bookmarks array
const addBookmark = () => {
    const inputLink = document.getElementById("inputLink")
    const bkName = document.getElementById("bkName")
    const link = inputLink.value
    const tag = bkName.value
    bookmarks.push({link, tag})
    renderBookmarks()
}

//create function to remove to bookmarks array
const removeBookmark = (index) => {
    bookmarks.splice(index,1)
    renderBookmarks()
}

//create a render function
const renderBookmarks = () => {
    const bkList = document.getElementById("bkList")
    bkList.innerHTML = ""
    const bookmarks = bookmarks.map((bookmark, index) => {
        const listElement = document.createElement("li")
        listElement.className = "bkElem"
        listElement.innerHTML = `<a href="${bookmark.link}">${bookmark.tag}</a>`
        //create remove button
        const delButton = document.createElement("button")
        delButton.className = "delButton"
        delButton.innerText = "Remove"
        delButton.addEventListener('click', () => removeBookmark(index))
        listElement.appendChild(delButton)
        bkList.appendChild(listElement)
    })
}


const addButton = document.getElementById("smbButton")
addButton.addEventListener('click', addBookmark)
console.log(bookmarks)
