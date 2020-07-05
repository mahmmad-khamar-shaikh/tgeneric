import { IList } from "./IList";

/**
 * Generic List type. similar to C# IList
 *
 * @export
 * @class List
 * @implements {IList<T>}
 * @template T
 */
export class List<T> implements IList<T> {
    private list: Array<T>;
    constructor() {
        this.list = new Array<T>();
    }
    addRange = (range: T[]): void => {
        throw new Error("Method not implemented.");
    };
    clear = (): T[] => {
        this.list.splice(0, this.list.length);
        return this.list;
    };
    contains = (item: T): boolean => {
        let isExists = false;
        this.list.forEach((element: T) => {
            if (typeof element === "object") {
                if (JSON.stringify(element) === JSON.stringify(item) && !isExists) {
                    isExists = true;
                }

            } else {
                if (element === item && !isExists) {
                    isExists = true;
                }
            }
        });
        return isExists;
    };
    exists = (predicate: (item: T) => boolean): boolean => {
        return this.list.filter(predicate).length > 0;
    }
    find = (predicate: (item: T) => boolean): T => {
        let result = this.list.filter(predicate);
        if (result.length > 0) {
            return result[0];

        } else {
            return <T>{};
        }

    }
    findAll = (predicate: (item: T) => boolean): T[] => this.list.filter(predicate);

    findIndex = (predicate: (item: T) => boolean): number => this.list.findIndex(predicate);

    findLast = (predicate: (item: T) => boolean): T => {
        let result = this.list.filter(predicate);
        if (result.length > 0) {
            return result[result.length - 1];
        } else {
            return <T>{};
        }
    };

    findLastIndex = (predicate: (item: T) => boolean): number => {
        let indexTracker = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (predicate(this.list[i])) {
                indexTracker = i;
            }
        }
        return indexTracker;
    }
    getRange = (index: number, count: number): T[] => {
        const endIndex = index + count;
        return this.list.slice(index, endIndex);
    }

    indexOf = (item: T): number => this.list.indexOf(item);

    insert(index: number, item: T): void {
        throw new Error("Method not implemented.");
    }
    insertRange(index: number, range: T[]): void {
        throw new Error("Method not implemented.");
    }
    lastIndexOf(item: T): number {
        throw new Error("Method not implemented.");
    }
    removeAll(predicate: (item: T) => boolean): number {
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
    count = (): number => this.list.length;


    toList(): T[] {
        throw new Error("Method not implemented.");
    }

    add(item: T): void {
        this.list.push(item);
    }



}
