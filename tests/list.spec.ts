import { IList, List } from '../src/index';
class Heoros {
    Name: string;
    Alias: string;
    SuperStrength: number;
}

describe("Typescript Generic List  ", () => {
    let testList: IList<number>;
    let heroList: IList<Heoros>
    let monthList: IList<string>;

    beforeEach(() => {
        testList = new List<number>();
        heroList = new List<Heoros>();
        monthList = new List<string>();

    });
    it("Should initialized array with no items", () => {
        expect(testList).toBeDefined();
    });
    it("Should add item to array with", () => {
        testList.add(1);
        expect(testList.count()).toBe(1);
    });
    it("Should clear list when clear is called ", () => {
        testList.add(2);
        testList.add(5);
        expect(testList.clear().length).toBe(0);

    });
    it("Should return true if list contains 1", () => {
        testList.add(1);
        testList.add(2);
        testList.add(3);
        expect(testList.contains(1)).toBeTrue();
    });
    it("Should return true if list contain 2", () => {
        testList.add(1);
        testList.add(2);
        testList.add(3);
        expect(testList.exists(ele => ele === 2)).toBeTrue();
    });

    it("Should return Steve Rogers if list conatin 2", () => {

        heroList.add({ Name: "Tony Stark", Alias: "Iron Man", SuperStrength: 8 });
        heroList.add({ Name: "Steve Rogers", Alias: "Captiain America ", SuperStrength: 8 });
        heroList.add({ Name: "Bruse Banner", Alias: "Hulk", SuperStrength: 8 });
        expect(heroList.find(hero => hero.Name.toLowerCase() === "steve rogers").Name).toBe("Steve Rogers");
    });

    /** Section for findLast index */
    it("Should return 3 if search for June in the list ", () => {
        monthList.add("Jan");
        monthList.add("June");
        monthList.add("Feb");
        monthList.add("June");
        expect(monthList.findLastIndex(item => item === "June")).toBe(3);

    });
    /** getRange */
    it("Should Return 2nd and 3rd element from numerical list", () => {

        testList.add(1);
        testList.add(2);
        testList.add(3);
        testList.add(4);
        testList.add(5);
        expect(testList.getRange(1, 2)).toEqual([2, 3]);
    });
    /** insertRange */
    it("Should add  2 and 3 after 1", () => {
        testList.add(1);
        testList.add(4);
        testList.add(5);
        testList.insertRange(1, [2, 3,])
        expect(testList.toArray()).toEqual([1, 2, 3, 4, 5])
    });
    /** removeAll */
    it("should remove all number more than 5", () => {
        testList.add(1);
        testList.add(4);
        testList.add(5);
        testList.add(6);
        testList.add(7);
        testList.add(8);
        testList.removeAll(item => item > 5)
        expect(testList.toArray()).toEqual([1, 4, 5])

    });
    /** removeAt */
    it("Should remove 2 from list", () => {

        testList.add(1);
        testList.add(2);
        testList.add(3);
        testList.add(4);
        testList.add(5);
        testList.removeAt(1);
        expect(testList.toArray()).toEqual([1, 3, 4, 5]);

    });
    /** removeRange */
    it("Should remove item from array and return length 3", () => {

        testList.add(1);
        testList.add(2);
        testList.add(3);
        testList.add(4);
        testList.add(5);

        testList.removeRange(2, 2);
        expect(testList.count()).toBe(3);
    });
    /** remove */
    it("Should remove 2 from list and return true", () => {
        testList.add(1);
        testList.add(2);
        testList.add(3);
        testList.add(4);
        testList.add(5);
        expect(testList.remove(9)).toBeFalse();
        expect(testList.remove(2)).toBeTrue();
    });
    /** trueForAll */
    it("Should return true when list is emply", () => {
        expect(testList.trueForAll(item => item == 0)).toBeTrue();

    });

    it("Should return true when all items are in list is even", () => {
        testList.add(2);
        testList.add(4);
        testList.add(6);
        testList.add(8);
        testList.add(10);
        expect(testList.trueForAll(item => item % 2 === 0)).toBeTrue();

    });

    it("Should return false when not all items are in list is even", () => {
        testList.add(2);
        testList.add(4);
        testList.add(6);
        testList.add(8);
        testList.add(9);
        expect(testList.trueForAll(item => item % 2 === 0)).toBeFalse();

    });

    /** reverse */
    it("Should reverse numeric list", () => {
        testList.add(2);
        testList.add(4);
        testList.add(6);
        testList.add(8);
        testList.reverse();
        expect(testList.toArray()).toEqual([8, 6, 4, 2]);

    });
    it("Should reverse strinng list", () => {
        monthList.add("Jan");
        monthList.add("Feb");
        monthList.add("March");
        monthList.add("April");
        monthList.reverse();
        expect(monthList.toArray()).toEqual(["April", "March", "Feb", "Jan"]);

    });

    /** Sort */

    it("Should sort numeric list by value ", () => {

        testList.add(4);
        testList.add(2);
        testList.add(1);
        testList.add(3);
        testList.sort();
        expect(testList.toArray()).toEqual([1, 2, 3, 4]);

    });
    it("Should sort string list by value", () => {

        monthList.add("Jan");
        monthList.add("Feb");
        monthList.add("March");
        monthList.add("April");
        monthList.sort();
        expect(monthList.toArray()).toEqual(["April", "Feb", "Jan", "March"]);
    });
    it("Should show Invalid or insufficient items in Array Message", () => {

        expect(function () { testList.sort() })
            .toThrow(new Error("Invalid or Insufficient items in Array"));
    });
    it("Should show Object Error", () => {
        heroList.add({ Name: "Tony Stark", Alias: "Iron Man", SuperStrength: 8 });
        heroList.add({ Name: "Steve Rogers", Alias: "Captiain America ", SuperStrength: 8 });
        heroList.add({ Name: "Bruse Banner", Alias: "Hulk", SuperStrength: 8 });

        expect(function () { heroList.sort() })
            .toThrow(new Error("'Sort' works with 'number' and 'string'. For sorting array of Objects, use 'orderBy' function"));
    });
    it("Shuold show invalid or insufficient error when array is blank ", () => {

        expect(function () { testList.sort() })
            .toThrow(new Error("Invalid or Insufficient items in Array"));
    });


});

