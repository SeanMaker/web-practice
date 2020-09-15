const months = ['Jan', 'March', 'April', 'June','July'];
months.splice(1, 0, 'Feb');

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


months.pop()
console.log(months);


