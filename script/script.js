
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
        textarea.innerText = mainText;
        newDiv.replaceWith(textarea);
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
         name: 'name',
         value: [
            "Pride and Prejudice",
            "The Great Gatsby",
            "Jane Eyre",
            "The Master and Margarita",
            "The Catcher in the Rye",
            "Anna Karenina", 
            "Perfume",
            "A Christmas Carol",
            "Little Women",

        ]
       
    },

    {
        name: 'author',
        value: ["Jane Austin",
        "F. Scott Fitzgerald",
        "Charlotte Bronte",
        "Mykhail Bulgakov",
        "J.D. Salinger",
        "Leo Tolstoy",
        "Patrick Süskind",
        "Charles Dickens",
        "Louisa May Alcott",
        ] ,
    },

    {
        name: 'publicated',
        value: [1813,
            1925,
            1847,
            1966,
            1951,
            1878,
            1985,
            1843,
            1868,
        ]
    },

]

const tableAll = document.querySelector('.table');
const tableBody = document.querySelector('.table-body');
const tableHead = document.querySelector('.table-head');


// createTable();

// function createTable(){

//     let tableContent = '';

//     for (let i = 0; i <= books.length; i++){
//         tableContent += `
//             <tr>
//             <td>${books[i].value[i]}</td>
//             <td>${books[i].value[i]}</td>
//             <td>${books[i].value[i]}</td>
//             </tr>
//         `
        
//         tableBody.innerHTML = tableContent;
//     }

// }

// for (const table of tableAll) {
//     const tBody = table.tBodies[0];
//     const rows = Array.from(tBody.rows);
//     const headerCells = table.tHead.rows[0].cells;

//     for (const th of headerCells) {
//         const cellIndex = th.cellIndex;

//         th.addEventListener('click', () => {
//             rows.sort((tr1, tr2) => {
//                 const tr1Text = tr1.cells[cellIndex].textContent;
//                 const tr2Text = tr2.cells[cellIndex].textContent;
//                 return tr1Text.localeCompare(tr2Text);
//             });

//             tBody.append(...rows);
//         });
//     }
// }

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





