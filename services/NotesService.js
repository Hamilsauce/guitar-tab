import ham from ' https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';

export default class {
  constructor(url = './data/note-data.json', fileType = 'json', rootEl = document.querySelector('.app')) {
    this.root = rootEl;
    this.url = url;
    this.fileType = fileType;
    this._notes = [];
    this.init(url, fileType);
  }

  async fetchNotes(url, fileType) {
    const fType = fileType.trim().toLowerCase();
    const res = await fetch(url);
    let data;

    if (fType === 'json') data = await res.json();
    else if (type === 'csv') { console.log('type csv'); }

    this.notes = await data.notes;

    this.setLocalStorage();
    this.root.dispatchEvent(new CustomEvent('notesloaded', { bubbles: false, detail: { data: this.notes } }))
    return this.notes;
  }

  toJson() {
    console.log('tojson',JSON.stringify(this.notes, null, 2) );
    return JSON.stringify(this.notes, null, 2) 
    
  }

  setLocalStorage() { localStorage.setItem('noteData', JSON.stringify(this.notes, null, 2)) }

  init(url, fileType) { this.fetchNotes(url, fileType) }

  get notes() { return this._notes }
  set notes(incomingNotes) { this._notes = incomingNotes }
}