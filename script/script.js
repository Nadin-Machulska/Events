
const div = document.querySelector('.main__info');
let textarea = document.createElement('textarea');
const newDiv = document.createElement('div');
newDiv.classList.add('changed__text');

let text = '';

document.body.addEventListener("keydown", (event) => {
    if (event.code === "KeyE" && event.ctrlKey === true){
        event.preventDefault();
        let mainText = div.textContent;
        div.replaceWith(textarea);
        textarea.textContent = mainText;
        textarea.setAttribute('contenteditable', 'true')
        console.log(text)
    }

    text = textarea.value;

    if(event.code === "KeyS" && event.ctrlKey === true){
        event.preventDefault();
        textarea.replaceWith(newDiv);
        newDiv.innerHTML = text;
    }
})




const books = [
     {
        nameOfBook: "Pride and Prejudice",
        author: "Jane Austin",
        dateofRelease: 1813,
    },

    {
        nameOfBook: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        dateofRelease: 1925,
    },

    {
        nameOfBook: "Jane Eyre",
        author: "Charlotte Bronte",
        dateofRelease: 1847,
    },

    {
        nameOfBook: "The Master and Margarita",
        author: "Mykhail Bulgakov",
        dateofRelease: 1966,
    },

    {
        nameOfBook: "The Catcher in the Rye",
        author: "J.D. Salinger",
        dateofRelease: 1951,
    },

    {
        nameOfBook: "Anna Karenina",
        author: "Leo Tolstoy",
        dateofRelease: 1878
    },

    {
        nameOfBook: "Perfume",
        author: "Patrick Süskind",
        dateofRelease: 1985,
    },

    {
        nameOfBook: "A Christmas Carol",
        author: "Charles Dickens",
        dateofRelease: 1843,
    },

    {
        nameOfBook: "Little Women",
        author: "Louisa May Alcott",
        dateofRelease: 1868,
    },
]

const container = document.querySelector('.table');
const tableBody = document.querySelector('.table-body');
const tableHead = document.querySelector('.table-head');


createTable();

function createTable(){

    let tableContent = '';

    for (let i = 0; i <= books.length; i++){
        tableContent += `
            <tr>
            <td>${books[i].nameOfBook}</td>
            <td>${books[i].author}</td>
            <td>${books[i].dateofRelease}</td>
            </tr>
        `
        
        tableBody.innerHTML = tableContent;
    }

    // return tableContent;
}

// const th = document.getElementsByTagName('th');










// const namesColumn = document.querySelector('.sort-names');
// const authorColumn = document.getElementById('sort-authors');
// const yearsColumn = document.getElementById('sort-years');


// let rows = [...tableBody.querySelectorAll("tr")];
// let columns = [...tableHead.querySelectorAll("th")];
// for (let e of columns) e.onclick = sortDatas;

// function sortDatas(){
//     let i = columns.indexOf(this);

//     if (i === 0){
//         rows.sort((a, b) => a.cells[i].textContent - b.cells[i].textContent)
//     } else {
//         rows.sort((a, b) => a.cells[i].textContent.localeCompare(b.cells[i].textContent))
//     }
//     for (let e of rows) tableBody.appendChild(e);
// }

// @param {HTMLTableElement};
// @param (number);
// @param {boolean};

function sortTableByColumn(table, column, asc = true){
    const dirModifier = asc ? 1 : -1;
    let tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));


    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
    })

    while (tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows); 

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);

}

document.querySelectorAll(".table-sortable th").forEach(headerCell =>{
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");


        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);

    })
})





