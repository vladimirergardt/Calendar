"use strict";

let createHeaderDom = () => {
    let header = document.createElement(`div`);
    header.id = `header`;
    header.innerHTML = `
        <div id="navigation-form">
            <form id="add-form">
                <input id="add-form_button" type="submit" value="Добавить">
            </form>
            <form id ="refresh-form">    
                <input id="refresh-form_button" type="submit" value="Обновить"> 
            </form>
            <form id="search-form">
                <input id="search-form_button" type="submit" value="&#x1F50D;" disabled> 
                <input id="search-form_input" type="text" name="search" placeholder="Событие, дата или участник">
            </form>
        </div>
    `;
    document.body.appendChild(header);
};

createHeaderDom();


let formAddRef = document.querySelector(`#refresh-form`);
console.log(formAddRef);
formAddRef.onsubmit = (event) => {
    let searchButton = document.querySelector(`#refresh-form_button`);
    console.log(searchButton);
    searchButton.disabled = false;
    alert(`проверка видимости узла`);
    event.preventDefault();
};

