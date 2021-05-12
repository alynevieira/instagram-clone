'use strict'

function pageLoad() {
  setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loading").remove();
  document.getElementById("page").style.display = "initial";
}