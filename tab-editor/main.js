import { renderSVGTab } from '../tab-editor/init-tab.js';

renderSVGTab()
const app = document.querySelector('#app');
const svg = app.querySelector('svg');
const appBody = document.querySelector('#app-body')
const containers = document.querySelectorAll('.container')

const copyTextToClipboard = async (text) => {
  await navigator.clipboard.writeText(text)
};


// setTimeout(async () => {
// const tabgroup = svg.querySelector('.tab-group');
//   copyTextToClipboard(svg.outerHTML)
//   // const clipper = navigator.clipboard
//   // await clipper.writeText(tabgroup.innerHTML)
//   // console.warn('clipper.readText()', await clipper.readText())
  
//   console.log(' ', );
// }, 1000)
