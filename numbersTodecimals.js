function decimals(n, d) {  /* At first, declaring a function to the (given) decimals */

    if ((typeof n !== 'number') || (typeof d !== 'number'))  /*checking if n and d are numbers are not. If not it returns false*/
        return false;                               /* || os the logical OR operator */

    n = parseFloat(n) || 0;  /* parseFloat() is used toconvert it to a string first if needed */
                              /* and returns a floating point number*/
    return n.toFixed(d);
}
console.log(decimals(2.100212, 2));  /* tofixed() converts a number to a string rounded to a specified number of decimals */
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));