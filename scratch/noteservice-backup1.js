// import ham from ' https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { Observable, pipe, from, of , range, fromPromise, interval, fromEvent, subscribe } = rxjs;
const { bufferWhen, map, filter, tap, take } = rxjs.operators;
const { fromFetch } = rxjs.fetch;
// console.log('fromPromise', Observable)

// result.subscribe(x => console.log(x), e => console.error(e));

export default class {
  constructor(url = './data/note-data.json', fileType = 'json', rootEl = document.querySelector('.app'), noteDataKey = 'noteData') {
    this.root = rootEl;
    console.log('rootEl', rootEl)
    this.url = url;
    this.noteDataKey = noteDataKey;
    this.fileType = fileType;
    this._notes;
    this._res;

    this.init(url, fileType, noteDataKey);
  }

  async fetchNotes(url, fileType, key) {
    let data;
    const type = fileType.trim().toLowerCase();
    const res = await fetch(url);

    if (type === 'json') data = await res.json();
    else if (type === 'csv') { console.log('type csv'); }

    this.notes = await data.notes;
    this.emitNotesLoaded(this.notes)
    this.setLocalStorage(this.noteDataKey, this.notes);
    return this.notes;
  }

  toJson(data) { return JSON.stringify(data, null, 2) }
  emitNotesLoaded(data = this.notes) {
    const evt = new CustomEvent('notesloaded', { bubbles: true, detail: { data: data } })
    console.log('evt', evt)

    this.root.dispatchEvent(evt);
    console.log('made it past dispatch');
  }

  setLocalStorage(key, data) { localStorage.setItem(key, this.toJson(data)) }
  getLocalStorage(key) { return JSON.parse(localStorage.getItem(key)) }

  init(url, fileType, key) {
    if (!this.getLocalStorage(key)) {
      this.fetchNotes(url, fileType, key)
      console.log('this.notes inside fetch storagenbranch', this.notes);

    }
    else {
      this.notes = this.getLocalStorage(key)
      this.emitNotesLoaded(this.notes)
      // this.root.dispatchEvent(new CustomEvent('notesloaded', { bubbles: false, detail: { data: this.notes } })) 
      console.log('this.notes inside local storagenbranch', this.notes);
    }
    let result;
  }

  get notes() { return this._notes }
  set notes(incomingNotes) { this._notes = incomingNotes }

  get res() { return this._res }
  set res(incomingRes) { this._res = incomingRes }
}