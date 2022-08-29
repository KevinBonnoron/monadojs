import { ofType } from './of-type';

describe('of-type', () => {
  it('should return if value is of specified type', () => {
    expect(['a'].some(ofType('string'))).toBeTruthy();
    expect(['a'].some(ofType('number'))).toBeFalsy();
    expect(['a'].some(ofType('boolean'))).toBeFalsy();
    expect(['a'].some(ofType('symbol'))).toBeFalsy();
    expect(['a'].some(ofType('array'))).toBeFalsy();
    expect(['a'].some(ofType('function'))).toBeFalsy();
    expect(['a'].some(ofType('object'))).toBeFalsy();

    expect([0].some(ofType('string'))).toBeFalsy();
    expect([0].some(ofType('number'))).toBeTruthy();
    expect([0].some(ofType('boolean'))).toBeFalsy();
    expect([0].some(ofType('symbol'))).toBeFalsy();
    expect([0].some(ofType('array'))).toBeFalsy();
    expect([0].some(ofType('function'))).toBeFalsy();
    expect([0].some(ofType('object'))).toBeFalsy();

    expect([false].some(ofType('string'))).toBeFalsy();
    expect([false].some(ofType('number'))).toBeFalsy();
    expect([false].some(ofType('boolean'))).toBeTruthy();
    expect([false].some(ofType('symbol'))).toBeFalsy();
    expect([false].some(ofType('array'))).toBeFalsy();
    expect([false].some(ofType('function'))).toBeFalsy();
    expect([false].some(ofType('object'))).toBeFalsy();

    expect([Symbol()].some(ofType('string'))).toBeFalsy();
    expect([Symbol()].some(ofType('number'))).toBeFalsy();
    expect([Symbol()].some(ofType('boolean'))).toBeFalsy();
    expect([Symbol()].some(ofType('symbol'))).toBeTruthy();
    expect([Symbol()].some(ofType('array'))).toBeFalsy();
    expect([Symbol()].some(ofType('function'))).toBeFalsy();
    expect([Symbol()].some(ofType('object'))).toBeFalsy();

    expect([[]].some(ofType('string'))).toBeFalsy();
    expect([[]].some(ofType('number'))).toBeFalsy();
    expect([[]].some(ofType('boolean'))).toBeFalsy();
    expect([[]].some(ofType('symbol'))).toBeFalsy();
    expect([[]].some(ofType('array'))).toBeTruthy();
    expect([[]].some(ofType('function'))).toBeFalsy();
    expect([[]].some(ofType('object'))).toBeFalsy();

    expect([() => {}].some(ofType('string'))).toBeFalsy();
    expect([() => {}].some(ofType('number'))).toBeFalsy();
    expect([() => {}].some(ofType('boolean'))).toBeFalsy();
    expect([() => {}].some(ofType('symbol'))).toBeFalsy();
    expect([() => {}].some(ofType('array'))).toBeFalsy();
    expect([() => {}].some(ofType('function'))).toBeTruthy();
    expect([() => {}].some(ofType('object'))).toBeFalsy();

    expect([{}].some(ofType('string'))).toBeFalsy();
    expect([{}].some(ofType('number'))).toBeFalsy();
    expect([{}].some(ofType('boolean'))).toBeFalsy();
    expect([{}].some(ofType('symbol'))).toBeFalsy();
    expect([{}].some(ofType('array'))).toBeFalsy();
    expect([{}].some(ofType('function'))).toBeFalsy();
    expect([{}].some(ofType('object'))).toBeTruthy();
  });
});
