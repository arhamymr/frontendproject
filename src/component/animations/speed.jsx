export default class MouseSpeed {
  constructor() {
    this.distance = 0
    this.getDistance = this.getDistance.bind(this)
    this.calcSpeed = this.calcSpeed.bind(this)
  	this.convertToRange = this.convertToRange.bind(this)
  }

  convertToRange(val, max, min) { 
  	return ((val - min) / (max - min)).toFixed(1); 
  }

  getDistance (p) {
    const distance = Math.floor(Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2)))
    this.distance = Math.abs(this.convertToRange(distance, 25, 1))
  }

  calcSpeed(e) {
    this.getDistance(
      {x: e.movementX, y: e.movementY}
    )
  }

  init() {
    document.addEventListener("mousemove", this.calcSpeed);
  }
};