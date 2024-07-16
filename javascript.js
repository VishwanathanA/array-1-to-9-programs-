// 1.array creation

let array=[1,2,3,4,5];
document.write(array);

// // 2.array manipulation

let arr1=[1,2,3,4,5];
console.log("before : "+arr1);
arr1.pop();
console.log("pop operation : "+arr1+"\n");
arr1.push(50);
console.log("push operation : "+arr1+"\n");
arr1.shift();
console.log("shift operation : "+arr1+"\n");
arr1.unshift(10)
console.log("unshift operation : "+arr1+"\n");
console.log("after : "+arr1);

// 3.array find,indexof and include
 
let arr2=[1,2,3,4,5,6];
console.log("array : "+arr2);
console.log("indexof 5 : "+arr2.indexOf(5));
console.log("find even : "+arr2.find(x=>x%2==0));
console.log("include 4 : "+arr2.includes(4));

// 4.filter

let arr3=[1,2,3,4,5];
console.log("array : "+arr3);
console.log("filter even number: "+arr3.filter(x=>x%2==0));

// 5.map

// let arr4=[1,2,3,4,5,6];
// console.log("array : "+arr4);
// console.log("mapping: "+arr4.map(x=>x*x));

//6. sort and reverse

// let arr5=[2,1,4,3,5,7,6];
// console.log("unsorted array : "+arr5);
// console.log("sorted array : "+arr5.sort());
// console.log("reverse array : "+arr5.reverse());

//7.array destructing

// let arr6=[1,2,3,4,5,6];
// let [a,b,c,d,e,f]=arr6;
// console.log("destructing array :[a,b,c,d,e,f] \n"+"array values : [1,2,3,4,5,6]");
// console.log("destructing a:"+a);
// console.log("destructing b:"+b);
// console.log("destructing c:"+c);
// console.log("destructing d:"+d);
// console.log("destructing e:"+e);
// console.log("destructing f:"+f);

//8.spreading

// let arr7=[1,2,3,4,5,6];
// console.log("array : "+arr7)
// console.log("Spreading : "+[...arr7,7,8,9,10]);

//9.join and split

let arr8=[1,2,3,4,5];
let arr9=[6,7,8,9,10];
console.log("first array :"+arr8);
console.log("second array : "+arr9);
console.log("join array without , : "+arr8.concat(arr9).join(" "));