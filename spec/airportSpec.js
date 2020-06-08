describe("Airport Class", function() {
    var plane = new Plane();
    var airport = new Airport();
    
    it("returns an instance of Airport", function(){
  
      expect(airport).toBeInstanceOf(Airport);
    });

    it("it instructs a plane to land", function(){
        airport.land(plane)
        expect(plane.inFlight()).toEqual(false);
      });

    it("stores a plane instance in an array", function(){
      airport.land(plane)
      expect(airport.hangar()).toContain(plane);
    });
  });