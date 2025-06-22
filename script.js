import tab from './data/test-tabs.js';
import notes from './data/note-data.js';
import noteJson from './data/note-data.js';
import TabNote from './components/TabNote.js';
import NotesService from './services/NotesService.js';
// import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';;

const app = document.querySelector('.app');
const conversionForm = document.querySelector('.note-conversion-form');
const positions = document.querySelectorAll('.pos');
const out = document.querySelector('.output')

conversionForm.addEventListener('submit', async e => {
  e.preventDefault();
})

const clipper = navigator.clipboard

setTimeout(async() => {
// await clipper.writeText(app.innerHTML)
// console.warn('clipper.readText()', await clipper.readText())
  
  console.log(' ', );
}, 1000)


const notesService = new NotesService('./data/note-data.json', 'json', app, 'noteData');

app.addEventListener('notesloaded', async e => {
  console.log('heard notelosd');
  // console.log('e.detail.data', e.detail.data);
  // out.innerHTML = await notesService.toJson();
  out.innerHTML = notesService.toJson(e.detail.data);
  
  out.addEventListener('click', e => {
    selectAllText(e)
    document.execCommand("Copy");
    alert('Copied!')
  });
})

const selectAllText = (e) => { window.getSelection().selectAllChildren(e.target) };
const strings = tab.trim().split('\n');
// ham.help()
// make row
strings.forEach(str => {
  const row = document.createElement('div');
  row.classList.add('row')
  // classList: ['row']
  // }, [], str.split('|')[1]);
  // console.log('row', row)
  row.textContent = str.split('|')[1];
  app.appendChild(row);
});

[...positions].forEach(pos => {
  pos.addEventListener('click', e => {
    selectAllText(e)
  })
});

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