import Foo from 'bar'

var a =    '4'; // format - remove spaces and semi
const jsx = <dasda    p=""/> // need to import "react", format
wat = 4 // not defined

spyOn(a) // it's in globals - not reported
afsfafwa(2) // not in globals - should be undefined

// this should be formatted
const fn = 
() => 
{
  const l = 1 + 4
      return l
}

// just to avoid not-used
console.log(a, Foo, fn)