import Item from "./ItemClass";
export default class Budget {
    id: number;
    name: string;
    total: number;
    current: number;
    items: Item[];
    constructor(id: number, name: string, total: number, items: Item[]) {
        this.id = id;
        this.name = name;
        this.total = total;
        this.current = 0;
        this.items = items;
    }
    calculateCurrent() {
        this.current  = 0;
        this.items.forEach((item)=> {
            this.current += item.calculatePrice();
        })
        return this.current;
    }
}