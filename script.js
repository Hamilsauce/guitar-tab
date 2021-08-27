import tab from './data/test-tabs.js';
import notes from './data/note-data.js';
import noteJson from './data/note-data.js';
import TabNote from './components/TabNote.js';
import NotesService from './services/NotesService.js';

const notesService = new NotesService();

const app = document.querySelector('.app');
const positions = document.querySelectorAll('.pos');
const out = document.querySelector('.output')

app.addEventListener('notesloaded', e => {
  console.log('e', e)
// out.innerHTML = e.detail.data;
out.innerHTML = notesService.toJson();
  
  out.addEventListener('click', e => {
    console.log('e', e.target);
    selectAllText(e)
    document.execCommand("Copy");
    alert('Copied!')
  });
})


const selectAllText = (e) => { window.getSelection().selectAllChildren(e.target) };

const strings = tab.trim().split('\n');


// const output = document.querySelector('.output')

// console.log('strings', strings);

// make row
strings.forEach(str => {
  const row = document.createElement('div');
  row.classList.add('row');
  // console.log(str.split('|')[2].split(''));
  row.textContent = str.split('|')[1];
  app.appendChild(row);
});

[...positions].forEach(pos => {
  pos.addEventListener('click', e => {
    selectAllText(e)
  })
});
[...positions].forEach(pos => {
  pos.addEventListener('blur', e => {})
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