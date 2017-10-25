export class Book {
    public id: number;
    public title: string;
    public description: string;
    public image: string;
    public date: number;
    public price: number;
    public sales_price: number;
    public rank: number;

    constructor(id: number, title: string, description: string, image: string, date: number, price: number, sales_price: number, rank: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.date = date;
        this.price = price;
        this.sales_price = sales_price;
        this.rank = rank;
    }


}