"use strict";

let createHeaderDom = () => {
    let header = document.createElement(`div`);
    header.id = `header`;
    header.innerHTML = `
        <div id="navigation-form">
            <form id="add-refresh-form">
                <input id="add-refresh-form_add-button" type="submit" value="Добавить">
                <input id="add-refresh-form_refresh-button" type="submit" value="Обновить"> 
            </form>
            <form id="search-form">
                <input id="search-form_input" type="text" name="search" placeholder="Событие, дата или участник">
                <input id="search-form_button" type="submit" value="&#x1F50D;"> 
            </form>
        </div>
    `;
    document.body.appendChild(header);
};

createHeaderDom();