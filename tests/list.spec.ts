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
        
        expect(testList.indexOf(2)).toEqual(1);
        expect(testList.indexOf(3)).toEqual(2);
        expect(testList.indexOf(4)).toEqual(3);
    });



});

