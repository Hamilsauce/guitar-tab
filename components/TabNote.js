export default class {
  constructor({ id, stringNumber, stringTuning, fretNumber }) {
    this.id = id;
    this.stringNumber = stringNumber;
    this.stringTuning = stringTuning;
    this.fretNumber = fretNumber;
    this.note;
    this.octave;
  }
}