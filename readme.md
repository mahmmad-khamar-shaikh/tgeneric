## What is tzlib ?
    It provides extension methods on javascript Array. 
    Some methods are replica of linq in .Net (C#).
## Function Documentation :
 ### *first()*
___
> Returns first elements of an array.
```javascript
function first() {
    let numArray = new Array<number>();
        numArray.push(3);
        numArray.push(100);
        numArray.push(2);
        numArray.push(10);
        numArray.push(4);
  console.log(numArray.first());  // This will print 3

}
```
 ### *last()*
___
> Returns last elements of an array.
```javascript
function last() {
    let numArray = new Array<number>();
        numArray.push(3);
        numArray.push(100);
        numArray.push(2);
        numArray.push(10);
        numArray.push(4);
  console.log(numArray.last());  // This will print 4

}
```
 ### *where(predicate)*
___
> Returns subset of source Array that satisfies predicate.
```javascript
function where() {
    let numArray = new Array<number>();
        numArray.push(3);
        numArray.push(100);
        numArray.push(2);
        numArray.push(10);
        numArray.push(4);
  console.log(numArray.where(ele => ele > 10));  // This will print 100
  console.log(numArray.where(ele => ele === 3)); // This will print 3

}
```
 ### *addRange()*
___
> Returns Array which is superset of two arrays.
```javascript
function addRange() {
    let numArray = new Array<number>();
        numArray.push(3);
        numArray.push(100);
        numArray.push(2);
        numArray.push(10);
        numArray.push(4);

    const augArray = [5,6,];

  console.log(numArray.addRange(augArray));  // This will print 3,100,2,10,4,5,6

}
```

 ### *removeRange()*
___
> Returns first elements of an array.
```javascript
function removeRange() {
    let numArray = new Array<number>();
        numArray.push(3);
        numArray.push(100);
        numArray.push(2);
        numArray.push(10);
        numArray.push(4);

  console.log(numArray.removeRange(2,2));  // This will print 2,10

}
```
### *strictSort()*
___
> Returns first elements of an array.
```javascript
function strictSort() {
    let sArray = new Array<number>();
        sArray.push('IronMan');
        sArray.push('Thor');
        sArray.push('Captain America');
        sArray.push('Hulk');

  console.log(numArray.strictSort);  
  
  // This will print : Captain America, Hulk, IronMan, Thor

let numArray = new Array<number>();
        numArray.push(3);
        numArray.push(100);
        numArray.push(2);
        numArray.push(10);
        numArray.push(4);

 console.log(numArray.strictSort);  
 // This will print : 2,3,4,10,100

}
```
### *orderBy(property,sortOrder?)*
___
> Returns first elements of an array.
```javascript
function orderBy(expression,sortOrder) {
    let sArray = new Array<number>();
        sArray=  [{ Name: 'Tony Stark', Alias: 'Iron Man' }, { Name: 'Robert Bruce Banner', Alias: 'Hulk' },
                  { Name: 'Steve Rojer', Alias: 'Captain America' }, { Name: 'Natasha Romanova', Alias: 'Black Widow' }];
  
  console.log(numArray.orderBy(item=>item.Name));  // Will sort array by Name property in Asc order
  console.log(numArray.orderBy(item=>item.Alias));  // Will sort array by Alias property in Desc order
}
```