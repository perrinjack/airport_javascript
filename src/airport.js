
class Airport{
  constructor() {
    this.hangarArray = [];
  }

  hangar() {
    return this.hangarArray;
  }

  land(plane) { 
    plane.land();
    this.hangarArray.push(plane);
    console.log(this.hangarArray)
  }

}