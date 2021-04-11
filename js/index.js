'use strict'

var sectionContinue = document.getElementById('continue');
var sectionContinue2 = document.getElementById('continue2');
var login = document.getElementById('login');
var login2 = document.getElementById('login2');

function profileContinue() {
  sectionContinue.style.display = 'flex';
  sectionContinue2.style.display = 'flex';

  login.style.display = 'none';
  login2.style.display = 'none';
}

function profileLogin() {
  sectionContinue.style.display = 'none';
  sectionContinue2.style.display = 'none';

  login.style.display = 'flex';
  login2.style.display = 'flex';
}

function pageLoad() {
  setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loading").remove();
  document.getElementById("page").style.display = "initial";
}