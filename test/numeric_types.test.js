var test = require('tape')
var convert = require('../')

test('handles int32 format', function (assert) {
  assert.plan(1)

  var schema = {
    type: 'integer',
    format: 'int32'
  }

  var result = convert(schema)

  var expected = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'integer',
    format: 'int32',
    minimum: 0 - Math.pow(2, 31),
    maximum: Math.pow(2, 31) - 1
  }

  assert.deepEqual(result, expected, 'int32 converted to minimum|maximum')
})

test('handles int64 format', function (assert) {
  assert.plan(1)

  var schema = {
    type: 'integer',
    format: 'int64'
  }

  var result = convert(schema)

  var expected = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'integer',
    format: 'int64',
    minimum: 0 - Math.pow(2, 63),
    maximum: Math.pow(2, 63) - 1
  }

  assert.deepEqual(result, expected, 'int64 converted to minimum|maximum')
})

test('handles float format', function (assert) {
  assert.plan(1)

  var schema = {
    type: 'number',
    format: 'float'
  }

  var result = convert(schema)

  var expected = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'number',
    format: 'float',
    minimum: 0 - Math.pow(2, 128),
    maximum: Math.pow(2, 128) - 1
  }

  assert.deepEqual(result, expected, 'float converted to minimum|maximum')
})

test('handles double format', function (assert) {
  assert.plan(1)

  var schema = {
    type: 'number',
    format: 'double'
  }

  var result = convert(schema)

  var expected = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'number',
    format: 'double',
    minimum: 0 - Number.MAX_VALUE,
    maximum: Number.MAX_VALUE
  }

  assert.deepEqual(result, expected, 'double converted to minimum|maximum')
})
