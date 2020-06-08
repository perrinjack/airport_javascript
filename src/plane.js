class Plane {
    constructor() { this.airborne = true;
        console.log(this.airborne)
    }

    inFlight() {return this.airborne ;}


    land() {
        
        console.log(this.airborne)
        this.airborne = false;
    
    
    }
}