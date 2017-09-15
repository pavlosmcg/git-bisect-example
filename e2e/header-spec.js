describe('my awesome webpage', function() {
  it('should have a header section', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:3000');

    var header = element(by.css('.header'));
    expect(header.isPresent()).toBeTruthy();
  });

  it('should have a header that is not red', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:3000');

    var header = element(by.css('.header'));
    var borderStyle = header.getCssValue('border').then(function(style) {
      expect(style).not.toContain("rgb(255, 0, 0)");
    });
  });
});
