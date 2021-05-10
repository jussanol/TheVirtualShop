export class Categoria {
    titulo: string;
    categoria: string;
    tipoImagen: string;
    imagen: any;

    constructor(titulo: string, categoria: string, tipoImagen: string, imagen: any) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.tipoImagen = tipoImagen;
        this.imagen = imagen
    }
}
