export class Articulo {
    id: number;
    titulo: string;
    urlImagen: string;
    precio: number;
    favorito: boolean;
    precioOferta: number;

    constructor(id: number, titulo: string, urlImagen: string, precio: number, favorito: boolean, precioOferta: number) {

        this.id = id;
        this.titulo = titulo;
        this.urlImagen = urlImagen;
        this.precio = precio;
        this.favorito = favorito
        this.precioOferta = precioOferta;

    }
}
