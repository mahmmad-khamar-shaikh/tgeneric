## What is tgeneric ?
    It provides C# like generic data structure in Typescript
+ List
+ Dictionary
## Library Documentation :
### *List<T>*
#### **clear**
___
> Returns empty list
```javscript
function clearDemo(){
let numList = new List<number>();
 numList.add(3);
 numList.add(100);
 numList.add(2);
 numList.add(10);
 numList.add(4);
 console.log(numList.clear()); // will Print {}
};
```
#### **contains**
___
> checks if elements exist in list
```javscript
function containDemo(){
let numList = new List<number>();
 numList.add(3);
 numList.add(100);
 numList.add(2);
 numList.add(10);
 numList.add(4);
 console.log(numList.contains(3)); // will Print true
};
```
#### **exist**
___
> Returns true if element satisfies predicate
```javscript
function existDemo(){
let numList = new List<number>();
 numList.add(3);
 numList.add(100);
 numList.add(2);
 numList.add(10);
 numList.add(4);
 console.log(numList.exist(3)); // will Print true
};
```