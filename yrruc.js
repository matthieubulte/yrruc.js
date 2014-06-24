module.exports = function() {
    function curry(fn) {
        function twoArgs(a,b) {
            // all arguments
            if (b!==undefined) return fn(a,b);
            // one argument
            else if (a!==undefined) return function(b) { return fn(a,b); };
            // no arguments
            else return fn;
        };
        
        function threeArgs(a,b,c) {
            // all arguments
            if (c!==undefined) return fn(a,b,c);
            // two arguments
            else if (b!==undefined) return function(c) { return fn(a,b,c); };
            // one argument
            else if (a!==undefined) {
                var fun = function(b,c) {
                    // all arguments
                    if (c!==undefined) return fn(a,b,c);
                    // two argument
                    else if (b!==undefined) return function(c) { return fn(a,b,c); };
                    // one arguments
                    else return fun;
                };
                return fun;
            }
            // no arguments
            else return fn;
        };
        
        function fourArgs(a,b,c,d) {
            // all arguments
            if (d!==undefined) return fn(a,b,c,d);
            // three argument
            if (c!==undefined) return function(d) { return fn(a,b,c,d); };
            // two arguments
            if (b!==undefined) {
                var fun = function(c,d) {
                    // all arguments
                    if(d!==undefined) return fn(a,b,c,d);
                    // three arguments
                    else if(c!==undefined) return function(d) { return fn(a,b,c,d); };
                    // two arguments
                    else return fun;
                };
                return fun;
            }
            // one argument
            if (a!==undefined) {
                var fun = function(b,c,d) {
                    // all arguments
                    if(d!==undefined) return fn(a,b,c,d);
                    // three arguments
                    else if(c!==undefined) return function(d) { return fn(a,b,c,d); };
                    // two arguments
                    else if(b!==undefined) {
                        var fun_sec = function(c,d) {
                            // all arguments
                            if(d!==undefined) return fn(a,b,c,d);
                            // three arguments
                            else if(c!==undefined) return function(d) { return fn(a,b,c,d); };
                            // two arguments
                            else return fun;
                        };
                        return fun_sec;
                    }
                    // one arguments
                    else return fun;
                };
                
                return fun;
            }
            // no arguments
            return fn;
        };
        
        function multiArgs(fn, numArgs) {
            numArgs = numArgs || fn.length;
            
            function bind(fn) {
                var args = [].slice.call(arguments, 1);
                return function() { return fn.apply(this, args.concat([].slice.call(arguments))); };
            }
            
            return function() {
                if (arguments.length < numArgs) {
                    var binded = bind.apply(this, [fn].concat([].slice.call(arguments)));
                    if (numArgs - arguments.length > 0) {
                        binded = multiArgs(applied , numArgs - arguments.length);
                    }
                    return binded;
                } else
                    return fn.apply(this, arguments);
            };
        }
        
        switch (fn.length) {
            case 1: return fn;
            case 2: return twoArgs;
            case 3: return threeArgs;
            case 4: return fourArgs;
            default:return multiArgs(fn);
        }
    }
    
    return { curry : curry };
};
