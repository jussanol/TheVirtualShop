export class Articulo {
    id: number;
    titulo: string;
    tipoImagen: string;
    imagen: any;
    precio: number;
    favorito: boolean;
    precioOferta: number;

    constructor(id: number, titulo: string, tipoImagen: string, imagen: any, precio: number, favorito: boolean, precioOferta: number) {

        this.id = id;
        this.titulo = titulo;
        this.tipoImagen = tipoImagen;
        this.imagen = imagen;
        this.precio = precio;
        this.favorito = favorito
        this.precioOferta = precioOferta;

    }
}
