yrruc.js
========
A high performances not clever curry function.

Every javascript currying library are trying to be very general, sacrifising performances for beauty of code. The problem is that a curry function is meant to be used a lot accross the application using it, therefor performances is an important criteria.

yrruc.js adds high performances currying on functions up to 4 arguments. For more arguments, it uses a slow generic algorithm to still be able to curry every kind of functions (not really every, as variadic functions are not supported for performances reasons again).

The gain in performances has the price of a really uggly implementation, it's really a pain in the ass to implement and it gets worse with more arguments, that's why I limited the number of fast implementation to 4 (and four is already a large enough number of arguments).

If you're not sure why you should use currying, trust me you should.

If you're still not sure why should use currying, google it.

###usage
```javascript
var yrruc = require('yrruc');

// that function is living at the edge, it takes 4 arguments.
var foo = yrruc.curry(function(a,b,c,d) { return (a+b+c+d); });

// oh, and as the other currying librairies, you can throw in the arguments
// the way you prefer.
foo(1)(2)(3)(4);
foo(1,2)(3)(4);
foo(1,2,3)(4);
foo(1,2,3,4);
foo(1)(2,3,4);
foo(1)(2,3)(4);
foo(1,2)(3,4);
```

###benchmark
The benchmark does what the code example does: currying a function with four arguments and calling it in every possible ways. It's goal is to show the gain in performances of currying functions of 4 or less arguments with yrruc.js against the dynamic algorithm that every other libraries use (and that is being used in yrruc.js for functions with more than 4 arguments).

http://jsperf.com/yrruc-curry

yep, i told you it's faster.

### notes
+ this library is not tested and was not TDDed because it's simply stupid enough not to be tested and the smart part is based on a very common currying algorithm for javascript, you can find dozens of github project implementing and testing it, I didn't feel like redoing it.
+ never trust benchmarks, excepted the one done here.
+ this library will probably not be heavilly maintained.
+ 

