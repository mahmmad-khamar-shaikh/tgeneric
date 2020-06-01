import { IList } from "./IList";

export class List<T> implements IList<T> {
    private list: Array<T>;
    constructor() {
        this.list = new Array<T>();
    }
    addRange(range: T[]): void {
        throw new Error("Method not implemented.");
    }
    clear(this: T[]): T[] {
        this.splice(0, this.length);
        return this;
    }
    contains(this: T[], item: T): boolean {
        let isExists = false;
        this.forEach((element: T) => {
            if (typeof element === "object") {
                isExists = JSON.stringify(element) === JSON.stringify(item) && !isExists

            } else {
                isExists = element === item && !isExists
            }
        });
        return isExists;
    }
    exists(predicate: (item: T) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    find(predicate: (item: T) => boolean): T {
        throw new Error("Method not implemented.");
    }
    findAll(predicate: (item: T) => boolean): T[] {
        throw new Error("Method not implemented.");
    }
    findIndex(predicate: (item: T) => boolean): number {
        throw new Error("Method not implemented.");
    }
    findLast(predicate: (item: T) => boolean): T {
        throw new Error("Method not implemented.");
    }
    findLastIndex(predicate: (item: T) => boolean): number {
        throw new Error("Method not implemented.");
    }
    getRange(index: number, count: number): T[] {
        throw new Error("Method not implemented.");
    }
    indexOf(item: T): number {
        throw new Error("Method not implemented.");
    }
    insert(index: number, item: T): void {
        throw new Error("Method not implemented.");
    }
    insertRange(index: number, range: T[]): void {
        throw new Error("Method not implemented.");
    }
    lastIndexOf(item: T): number {
        throw new Error("Method not implemented.");
    }
    removeAll(predicate: (item: T)   =>  boolean): number {
        throw new Error("Method not implemented.");
    }
    removeAtt(index: number): void {
        throw new Error("Method not implemented.");
    }
    removeRange(index: number, count: number): void {
        throw new Error("Method not implemented.");
    }
    reverse(this: T[]): void {
        throw new Error("Method not implemented.");
    }
    sort(this: T[]): void {
        throw new Error("Method not implemented.");
    }
    trueForAll(predicate: (item: T) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    remove(item: T): boolean {
        throw new Error("Method not implemented.");
    }
    count(): number {
        return this.list.length;
    }

    toList(): T[] {
        throw new Error("Method not implemented.");
    }

    add(item: T): void {
        this.list.push(item);
    }



}
