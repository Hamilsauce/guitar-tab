import tab from './data/test-tabs.js';
import notes from './data/note-data.js';
import noteJson from './data/note-data.js';
import TabNote from './components/TabNote.js';
import NotesService from './services/NotesService.js';
// import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';;

const app = document.querySelector('#app');
// const app = app.querySelector('#output');
const conversionForm = document.querySelector('.note-conversion-form');
const positions = document.querySelectorAll('.pos');
const out = document.querySelector('#output')

// conversionForm.addEventListener('submit', async e => {
//   e.preventDefault();
// })

const clipper = navigator.clipboard

// setTimeout(async () => {
//   await clipper.writeText(app.innerHTML)
//   // console.warn('clipper.readText()', await clipper.readText())
  
//   console.log(' ', );
// }, 1000)


const notesService = new NotesService('./data/note-data.json', 'json', app, 'noteData');

// app.addEventListener('notesloaded', async e => {
//   console.log('heard notelosd');
//   // console.log('e.detail.data', e.detail.data);
//   // out.innerHTML = await notesService.toJson();
//   out.innerHTML = notesService.toJson(e.detail.data);

//   out.addEventListener('click', e => {
//     selectAllText(e)
//     document.execCommand("Copy");
//     alert('Copied!')
//   });
// })


const getBars = (tabRaw) => {
  const bars = tabRaw.trim().split('|')
  return bars
}

const getStringRows = (tabRaw) => {
  const rows = tabRaw.trim().split('\n')
  return rows
}

const mapBarsToString = (row) => {
  const [stringName, ...bars] = row.trim().split('|').filter(_ => _)
  
  return {
    [stringName.trim()]: bars.map((_, i) => _.trim()),
  }
  
  return rows
}


const selectAllText = (e) => { window.getSelection().selectAllChildren(e.target) };
const strings = tab.trim().split('\n');

const tabBars = getBars(tab);
const tabStringRows = getStringRows(tab);
const stringBarMap = mapBarsToString(tabStringRows[0]);

console.warn('tabBars', tabBars)
console.warn('tabStringRows', tabStringRows)
console.warn('stringBarMap', stringBarMap)
setTimeout(() => {
  
  console.log(' ', );
  
  out.innerHTML = ''
  // document.body = '<div id=app"></div>'
  strings.forEach((str, i) => {
    const row = document.createElement('div');
    const chars = str.split('|')[2].trim()
    const fretChars = chars.slice(1, chars.length - 1).split('');
    const spaces = fretChars.filter((x, i) => x == '-');
    const fretNums = fretChars.filter((x, i) => x != '-');
    
    // console.warn('{ i, spaces, fretNums, fretChars.length }', { i, spaces, fretNums, fretChars })
    
    row.classList.add('row')
    row.textContent = str.split('|')[2].trim();
    // console.warn('row.textContent.length', row.textContent.length)
    out.appendChild(row);
  });
}, 50);

// [...positions].forEach(pos => {
//   pos.addEventListener('click', e => {
//     selectAllText(e)
//   })
// });

[...positions].forEach(pos => {
  // pos.addEventListener('blur', e => { console.log('e', e); })
})

// app.textContent = tab

/*
const noteSteps = { "C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5, "F#": 6, "G": 7, "G#": 8, "A": 9, "A#": 10, "B": 11 };

const noteStepMap = new Map(Object
  .entries(noteSteps)
  .reduce((acc, [key, value]) => {
    return [...acc, [value, key]];
  }, []));

console.log('map', noteStepMap)
*/