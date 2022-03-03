export class Usuario {
    public id: number;
    public nombre: string;
    public password: string;


    constructor(id: number, nombre: string, password: string) {
        this.id = id;
        this.nombre = nombre;
        this.password = password;

    }
}
