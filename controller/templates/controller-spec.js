describe('<%= _.camelize(name) %>', function() {

  beforeEach(module('<%= appname %>'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('<%= _.camelize(name) %>', {$scope: scope});
  }));

  it('should ...', inject(function() {

    expect(1).toEqual(1);

  }));

});
