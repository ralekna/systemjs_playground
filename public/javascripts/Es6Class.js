/**
 * Created by rytis on 2015-03-27.
 */
export default class {

  constructor() {
    this.tryGererators();
    this.tryTemplatesInterpolation();
    this.tryDeconstruction();
    this.tryScopeBinding();
  }

  static *incNumber(x) {
    while (true) {
      x++;
      yield x;
    }
  }

  tryGererators () {
    var some = Es6Class.incNumber(10);
    console.log('some.next(): ', some.next());
    console.log('some.next(): ', some.next());
    console.log('some.next(): ', some.next());
    some = Es6Class.incNumber(100);
    console.log('some.next(): ', some.next());
    console.log('some.next(): ', some.next());
  }

  tryDeconstruction () {
    let [one, two] = ['vienas', 'du'];
    console.log(`${one}, ${two}`);
    // swapping
    [two, one] = [one, two];
    console.log(`${one}, ${two}`);
  }

  tryTemplatesInterpolation () {
    let myName = 'rytis';
    console.log(`Hello, ${myName}!`);
  }

  tryScopeBinding () {

    let someFunc = () => console.log(this);
    someFunc();
    someFunc.call('hello1');

    (function () { console.log(this) }).bind('hello2')();

  }

}
