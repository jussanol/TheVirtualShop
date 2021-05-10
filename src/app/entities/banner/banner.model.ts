export class Banner {
    titulo: string;
    descripcion: string;
    tipoImagen: string;
    imagen: any;

    constructor(titulo: string, descripcion: string, tipoImagen: string, imagen: any) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tipoImagen = tipoImagen;
        this.imagen = imagen;
    }
}
