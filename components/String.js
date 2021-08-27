export default class {
  constructor({ stringNumber, stringTuning, positions }) {
    this._notes;
    this.stringNumber = stringNumber;
    this.stringTuning = stringTuning;
    this.positions = [...positions].map((pos, i) => {
      return { id: i, content: pos.content || '-' }
    });
  }
  
  createNote(pos) {
    const config = { id: pos.id, } 
  }

}