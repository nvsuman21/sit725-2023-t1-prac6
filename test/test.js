describe("Divide Two Numbers", function() {
  var url = "http://localhost:8080/divideTwoNumbers/10/2";
  it("returns status 200 to check if API works", function(done) {
      request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
  });
  it("returns statusCode key in body to check if API gives the right result should be 200", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.statusCode).to.equal(200);
          done();
      });
  });
  it("returns the result as number", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.be.a('number');
          done();
      });
  });
  it("returns the result equal to 5", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.equal(5);
          done();
      });
  });
  it("returns the result not equal to 10", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.not.equal(10);
          done();
      });
  });
});


describe("Subtract Two Numbers", function() {
  var url = "http://localhost:8080/subtractTwoNumbers/10/5";
  it("returns status 200 to check if API works", function(done) {
      request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
  });
  it("returns statusCode key in body to check if API gives the right result should be 200", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.statusCode).to.equal(200);
          done();
      });
  });
  it("returns the result as number", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.be.a('number');
          done();
      });
  });
  it("returns the result equal to 5", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.equal(5);
          done();
      });
  });
  it("returns the result not equal to 10", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.not.equal(10);
          done();
      });
  });
});

describe("Multiply Two Numbers", function() {
  var url = "http://localhost:8080/multiplyTwoNumbers/4/3";
  it("returns status 200 to check if API works", function(done) {
      request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
  });
  it("returns statusCode key in body to check if API gives the right result should be 200", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.statusCode).to.equal(200);
          done();
      });
  });
  it("returns the result as number", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.be.a('number');
          done();
      });
  });
  it("returns the result equal to 12", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.equal(12);
          done();
      });
  });
  it("returns the result not equal to 10", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.not.equal(10);
          done();
      });
  });
});
