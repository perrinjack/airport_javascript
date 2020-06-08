describe("Plane Class", function() {

  var plane = new Plane();
  
  it("returns an instance of plane", function(){

    expect(plane).toBeInstanceOf(Plane);

  });

  it("plane starts in flight", function(){

    expect(plane.inFlight()).toEqual(true);

  });

  



});
