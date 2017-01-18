/* eslint-env jest */

it('failing test', function () {
  throw new Error('foo')
})

it('succeeding test', function () {})
