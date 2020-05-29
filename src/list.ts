export interface IList<T> {
    count(): number;
    add(item: T): void;
    remove(item: T): boolean;
    toList(): Array<T>;
    addRange(range: T[]);
    clear();
    contains(predicate: (item: T) => boolean): boolean;
    
}

export class List<T> implements IList<T> {
    private list: Array<T>;
    constructor() {
        this.list = new Array<T>();
    }
    remove(item: T): boolean {
        throw new Error("Method not implemented.");
    }
    count = (): number => {
        return this.list.length;
    }

    public toList(): T[] {
        throw new Error("Method not implemented.");
    }

    public add(item: T): void {
        this.list.push(item);
    }



}
