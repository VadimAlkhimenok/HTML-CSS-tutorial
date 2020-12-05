const chooseDesign = document.querySelector('#chooseDesign');
const createDesign = document.querySelector('#createDesign');
const htmlAndcss = document.querySelector('#htmlAndcss');
const htmlDoc = document.querySelector('#htmlDoc');
const htmlText = document.querySelector('#htmlText');
const htmlLinks = document.querySelector('#htmlLinks');
const basicCss = document.querySelector('#basicCss');
const basicCssText = document.querySelector('#basicCssText');

const chooseListDesign = document.querySelector('#chooseListDesign');
const createListDesign = document.querySelector('#createListDesign');
const basicListHtmlCss = document.querySelector('#basicListHtmlCss');
const basicHtmlDoc = document.querySelector('#basicHtmlDoc');
const basicHtmlText = document.querySelector('#basicHtmlText');
const basicHtmlLinks = document.querySelector('#basicHtmlLinks');
const basicListCss = document.querySelector('#basicListCss');
const basicCssTextList = document.querySelector('#basicCssTextList');

const toggleList = node => node.classList.toggle('open');

chooseDesign.addEventListener('click', () => toggleList(chooseListDesign));
createDesign.addEventListener('click', () => toggleList(createListDesign));
htmlAndcss.addEventListener('click', () => toggleList(basicListHtmlCss));
htmlDoc.addEventListener('click', () => toggleList(basicHtmlDoc));
htmlText.addEventListener('click', () => toggleList(basicHtmlText));
htmlLinks.addEventListener('click', () => toggleList(basicHtmlLinks));
basicCss.addEventListener('click', () => toggleList(basicListCss));
basicCssText.addEventListener('click', () => toggleList(basicCssTextList));



