describe("Airport Class", function() {
    var plane = new Plane();
    var airport = new Airport();
    
    it("returns an instance of Airport", function(){
  
      expect(airport).toBeInstanceOf(Airport);
    });

    it("xit instructs a plane to land", function(){
        airport.land(plane)
        console.log(plane.inFlight())
        expect(plane.inFlight()).toEqual(false);
      });
  });