import { Address } from "./address";

export class NewUserData {
    username: string;
    email: string;
    password: string;
    rol: string;
    firstname: string;
    lastname: string;
    filenumber: number;

    street: string;
    number: string;
    city:string;
    floor: string;
    departament: string;
    clarification: string;

    constructor() {
        this.username = "";
        this.email = "";
        this.password = "";
        this.rol = "";
        this.firstname = "";
        this.lastname = "";
        this.filenumber = 0;

        this.street = "";
        this.number = "";
        this.city = "";
        this.floor = "";
        this.departament = "";
        this.clarification = "";
    }
}