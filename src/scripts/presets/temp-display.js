export default class TempDisplay {
  constructor() {
    this.element = document.createElement('div');

    this.element.classList.add('temp-display');
    document.querySelector('.container').appendChild(this.element);
  }

  update(min, max) {
    this.element.textContent = `Interval: [${min}, ${max}] °C`;
  }
}
