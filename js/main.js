"use strict"

const formDrop = document.querySelector('.menudropdown');
const bookmark = document.querySelector('.data-actions__add');
const dataListItem = document.querySelector ('.item__url')

dataListItem.innerHTML += "https://github.com/Mariamafalda2021/Modulo-2-ejercicio-bookmarks"


formDrop.classList.remove('collapsed');

bookmark.classList.remove('hidden');

