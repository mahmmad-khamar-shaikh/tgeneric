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
    clear = (): T[] => {
        this.list.splice(0, this.list.length);
        return this.list;
    };

    /**
     *
     *
     * @memberof List
     */
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

    /**
     *
     *
     * @memberof List
     */
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

    /**
     *
     *
     * @memberof List
     */
    findAll = (predicate: (item: T) => boolean): T[] => this.list.filter(predicate);

    /**
     *
     *
     * @memberof List
     */
    findIndex = (predicate: (item: T) => boolean): number => this.list.findIndex(predicate);


    /**
     *
     *
     * @memberof List
     */
    findLast = (predicate: (item: T) => boolean): T => {
        let result = this.list.filter(predicate);
        if (result.length > 0) {
            return result[result.length - 1];
        } else {
            return <T>{};
        }
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
    removeRange(index: number, count: number): void {
        throw new Error("Method not implemented.");
    }

    /**
     *
     *
     * @param {T[]} this
     * @memberof List
     */
    reverse(this: T[]): void {
        throw new Error("Method not implemented.");
    }

    /**
     *
     *
     * @param {T[]} this
     * @memberof List
     */
    sort(this: T[]): void {
        throw new Error("Method not implemented.");
    }

    /**
     *
     *
     * @param {(item: T) => boolean} predicate
     * @returns {boolean}
     * @memberof List
     */
    trueForAll(predicate: (item: T) => boolean): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     *
     *
     * @param {T} item
     * @returns {boolean}
     * @memberof List
     */
    remove(item: T): boolean {
        throw new Error("Method not implemented.");
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
