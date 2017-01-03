// Test suite.
describe('serialPromises', function() {
  // Set the endpoint under test.
  before('configure', function() {
    this.endpoint = 'serialPromises';
  });
  after('configure', function() {
    delete this.endpoint; // Cleanup.
  });

  // Tests.
  it('should run.', function(done) {
    // Configure the request.
    var requestObject = {
      // Request details here.
    };

    // Run the endpoint.
    this.client.runCustomEndpoint(this.endpoint, requestObject, { }, function(err, blResult) {

      //
      // Assertions here.
      //

      done(err); // Continue.
    });
  });
});