export class Toode {
    id: number;
    name: string;
    price: number;
    isFood: boolean;

    constructor(id: number, name: string, price: number, isFood: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isFood = isFood;
    }
}