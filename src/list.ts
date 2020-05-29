export interface IList<T> {
    count(): number;
    add(item: T): void;
    remove(item: T): boolean;
    toList(): Array<T>;
}

export class List<T> implements IList<T> {
    private list: Array<T>;
    constructor() {
        this.list = new Array<T>();
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
