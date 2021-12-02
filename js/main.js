"use strict"

const formDrop = document.querySelector('.js-menudropdown');
const bookmark = document.querySelector('.js-data-actions__add');
const dataArticle = document.querySelector('.js-data-item');
const dataArticle2 = document.querySelector('.js-data-item2');
const dataSection = document.querySelector('.data');

const input_search_desc = document.querySelector(".js_in_search_desc");

const descrSearchText = input_search_desc.value;




const bmk_1_url = "books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk_1_desc = "JS en los materiales de Adalab";
const bmk_1_seen = '<input type="checkbox" checked name="item_imp_2" id="item_imp_2"></input>';
const bmk_1_tags_1 = "javascript";
const bmk_1_tags_2 = "html";



const bmk_2_url = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const bmk_2_desc = "Ideas de proyectos JS";
const bmk_2_seen = '<input type="checkbox" checked name="item_imp_1" id="item_imp_1"></input>';
const bmk_2_tags_1 = "css";




let html1 = "";

html1 += `<a href="https://${bmk_1_url}">${bmk_1_url}</a>`;
html1 += `${bmk_1_seen}`;
html1 += `<p class="item__desc"> ${bmk_1_desc}</p>`;
html1 += `<ul class="item__tags"> 
        <li class="item__tag">${bmk_1_tags_1}</li>
        <li class="item__tag">${bmk_1_tags_2}</li>
        </ul>`;



let html2 = "";
html2 += `<a href="${bmk_2_url}">${bmk_2_url}</a>`;






dataArticle.innerHTML = html1;
dataArticle2.innerHTML = html2;


formDrop.classList.remove('collapsed');

// bookmark.classList.remove('hidden');


if (dataSection.classList.contains('listview')) {
        dataSection.classList.remove('listview');
        dataSection.classList.add('tableview');
} else if (dataSection.classList.contains('tableview')) {
        dataSection.classList.add('listview');
        dataSection.classList.remove('tableview');
}


input_search_desc.value = "materiales"


if (bmk_2_url.includes(descrSearchText)) {
        dataArticle.innerHTML = html2;



} else (bmk_1_url.includes(descrSearchText)){


}

