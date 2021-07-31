import { IList } from "./IList";
import { compare } from "./util";

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

    /**
     *Creates an instance of List.
     * @memberof List
     */
    constructor() {
        this.list = new Array<T>();
    }

    /**
     *
     *
     * @memberof List
     */
    addRange = (range: T[]): void => {
        throw new Error("Method not implemented.");
    };

    /**
     *
     *
     * @memberof List
     */
    clear = (): T[] => this.list.splice(0, this.list.length);


    /**
     *
     *
     * @memberof List
     */
    contains = (item: T): boolean => {
        let isExists = false;
        this.list.forEach((element: T) => {
            if (typeof element === "object") {
                isExists = JSON.stringify(element) === JSON.stringify(item) && !isExists;
            } else {
                isExists = element === item && !isExists;
            }
        });
        return isExists;
    };

    /**
     *
     *
     * @memberof List
     */
    exists = (predicate: (item: T) => boolean): boolean => this.list.filter(predicate).length > 0;

    /**
     *
     * @memberof List
     */
    find = (predicate: (item: T) => boolean): T => {

        const result = this.list.filter(predicate);
        return result.length > 0 ? result[0] : <T>{};
    }

    /**
     *
     * @memberof List
     */
    findAll = (predicate: (item: T) => boolean): T[] => this.list.filter(predicate);

    /**
     *
     * @memberof List
     */
    findIndex = (predicate: (item: T) => boolean): number => this.list.findIndex(predicate);

    /**
     *
     * @memberof List
     */
    findLast = (predicate: (item: T) => boolean): T => {
        const result = this.list.filter(predicate);
        return result.length > 0 ? result[result.length - 1] : <T>{}
    };

    /**
     *
     *
     * @memberof List
     */
    findLastIndex = (predicate: (item: T) => boolean): number => {
        let indexTracker = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (predicate(this.list[i])) {
                indexTracker = i;
            }
        }
        return indexTracker;
    }

    /**
     *
     *
     * @memberof List
     */
    getRange = (index: number, count: number): T[] => {
        const endIndex = index + count;
        return this.list.slice(index, endIndex);
    }

    /**
     *
     *
     * @memberof List
     */
    indexOf = (item: T): number => this.list.indexOf(item);

    /**
     *
     *
     * @param {number} index
     * @param {T} item
     * @memberof List
     */
    insert(index: number, item: T): void {
        this.list.splice(index, 0, item);

    }
    insertRange(index: number, range: T[]): void {

        this.list.splice(index, 0, ...range);
    }

    /**
     *
     *
     * @memberof List
     */
    lastIndexOf = (item: T): number => this.list.lastIndexOf(item);

    /**
     *
     *
     * @param {(item: T) => boolean} predicate
     * @memberof List
     */
    removeAll(predicate: (item: T) => boolean): void {
        const indexToBeRemoved = this.list.findIndex(predicate);
        if (indexToBeRemoved > -1) {
            this.list.splice(indexToBeRemoved, 1);
            // Recursive call to iterate all potential candidate.
            this.removeAll(predicate);
        }
    }

    /**
     *
     *
     * @param {number} index
     * @memberof List
     */
    removeAt = (index: number): void => {
        this.list.splice(index, 1);
    }

    /**
     *
     *
     * @param {number} index
     * @param {number} count
     * @memberof List
     */
    removeRange = (index: number, count: number): void => {
        this.list.splice(index, count);
    }

    /**
     *
     *
     * @param {T[]} this
     * @memberof List
     */
    reverse = (): void => {
        this.list.reverse();
    }

    /**
     *
     *
     * @param {T[]} this
     * @memberof List
     */
    sort = (): void => {
        if (this.list.length > 1) {
            const typeDetermine = typeof this.list[0];
            switch (typeDetermine) {
                case "string":
                    this.list.sort();
                    break;
                case "number":
                    this.list.sort(compare);
                    break
                default:
                    throw new Error("'Sort' works with 'number' and 'string'. For sorting array of Objects, use 'orderBy' function");
            }
        } else {
            throw new Error("Invalid or Insufficient items in Array");
        }
    }

    /**
     *
     *
     * @param {(item: T) => boolean} predicate
     * @returns {boolean}
     * @memberof List
     */
    trueForAll(predicate: (item: T) => boolean): boolean {
        let result = false;
        if (this.list.length === 0) {
            result = true
            return result;
        }
        result = this.list.every(predicate);
        return result;
    }

    /**
     *
     *
     * @param {T} item
     * @returns {boolean}
     * @memberof List
     */
    remove(item: T): boolean {
        let result = false;
        const index = this.list.indexOf(item);
        if (index > -1) {
            result = true;
            this.list.splice(index, 1);

        }
        return result;
    }

    /**
     *
     *
     * @memberof List
     */
    count = (): number => this.list.length;

    /**
     *
     *
     * @memberof List
     */
    toArray = (): T[] => this.list

    /**
     *
     *
     * @param {T} item
     * @memberof List
     */
    add(item: T): void {
        this.list.push(item);
    }

}
