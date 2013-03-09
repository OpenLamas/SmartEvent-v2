suite('Dep', function() {
  var assert = should;
  test('jQuery doit être créé', function() {
    assert.ok($);
  });

  test('Underscore doit être créé', function() {
    assert.ok(_);
  });

  test('Backbone doit être créé', function() {
    assert.ok(Backbone);
  });
});