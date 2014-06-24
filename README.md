yrruc.js
========
A high performances not clever curry function.

Every javascript currying library are trying to be very general, sacrifising performances for beauty of code. The problem is that a curry function is meant to be used a lot accross the application using it, therefor performances is an important criteria.

yrruc.js adds high performances currying on functions up to 4 arguments. For more arguments, it uses a slow generic algorithm to still be able to curry every kind of functions (not really every, as variadic functions are not supported for performances reasons again).

The gain in performances has the price of a really uggly implementation, it's really a pain in the ass to implement and it gets worse with more arguments, that's why I limited the number of fast implementation to 4 (and four is already a large enough number of arguments).

###usage
```
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
If you're not sure why you should use currying, trust me you should.

If you're still not sure why should use currying, google it.
