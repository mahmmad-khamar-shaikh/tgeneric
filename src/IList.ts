export interface IList<T> {
    count(): number;
    add(item: T): void;
    addRange(range: T[]): void;
    clear(): T[];
    contains(item: T): boolean;
    exists(predicate: (item: T) => boolean): boolean;
    find(predicate: (item: T) => boolean): T;
    findAll(predicate: (item: T) => boolean): T[];
    findIndex(predicate: (item: T) => boolean): number;
    findLast(predicate: (item: T) => boolean): T;
    findLastIndex(predicate: (item: T) => boolean): number;
    getRange(index: number, count: number): T[];
    indexOf(item: T): number;
    insert(index: number, item: T): void;
    insertRange(index: number, range: T[]): void;
    lastIndexOf(item: T): number;
    remove(item: T): boolean;
    removeAll(predicate: (item: T) => boolean): void;
    removeAt(index: number): void;
    removeRange(index: number, count: number): void;
    reverse(this: T[]): void;
    sort(this: T[]): void;
    trueForAll(predicate: (item: T) => boolean): boolean;
    toArray(): Array<T>;
}
