import { SERVIDOR } from "./Configuracion";

export class Servidor {

    link!: string;

    constructor(){
        this.configurarServidor();
    }

    configurarServidor(){
        this.link = `http://${SERVIDOR.IP}:${SERVIDOR.PUERTO}${SERVIDOR.PATH}`;
    }

}
