import ham from ' https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { Observable, pipe, from, of , range, fromPromise, interval, fromEvent, subscribe } = rxjs;
const { bufferWhen, map, filter, tap, take } = rxjs.operators;
const { fromFetch } = rxjs.fetch;

export default class {
  constructor(url = './data/note-data.json', fileType = 'json', rootEl = document.querySelector('.app')) {
    this.root = rootEl;
    this.url = url;
    this.noteDataKey = 'noteData'
    this.fileType = fileType;
    this._notes = [];
    this.init(url, fileType, this.noteDataKey, this.root);
    this._res;
  }

  async init(url, fileType, key = this.noteDataKey, root) {
    if (!this.getLocalStorage(key)) this.fetchNotes(url, fileType)
    else {
      this.notes = await this.getLocalStorage(key)
      this.emitNotesLoaded(this.getLocalStorage(key))
    }
  }

  async fetchNotes(url, fileType) {
    let data;
    const type = fileType.trim().toLowerCase();
    const res = await fetch(url);

    if (type === 'json') data = await res.json();
    else if (type === 'csv') { console.log('type csv'); }

    this.notes = await data.notes;
    this.setLocalStorage(this.noteDataKey, this.notes);
    this.emitNotesLoaded(this.notes)
    return this.notes;
  }

  emitNotesLoaded() { this.root.dispatchEvent(new CustomEvent('notesloaded', { bubbles: false, detail: { data: this.notes } })) }

  toJson(data) { return JSON.stringify(data, null, 2) }

  setLocalStorage(key, data) { localStorage.setItem(key, this.toJson(data)) }
  getLocalStorage(key) { return JSON.parse(localStorage.getItem(key)) }


  get notes() { return this._notes }
  set notes(incomingNotes) { this._notes = incomingNotes }

  get res() { return this._res }
  set res(incomingRes) { this._res = incomingRes }
}