/**
 * Clase que representa el cifrado y descifrados de un texto
 * mediante el cifrado de César
 * @class Cifrado
 * @attribute {string} _texto Texto a cifrar o descifrar
 * @attribute {string} _clave Clave para el cifrado
 * @attribute {string} _alfabeto
 */
export class Cifrado {
  private _texto: string;
  private _clave: string;
  private _alfabeto: string;

  /**
   * Constructor de la clase Cifrado
   * @param texto Texto a cifrar o descifrar
   * @param clave Clave para el cifrado
   * @param alfabeto Alfabeto para el cifrado
   */
  constructor(texto: string, clave: string, alfabeto?: string) {
    this._texto = texto;
    this._clave = clave;
    this._alfabeto = alfabeto || 'abcdefghijklmnopqrstuvwxyz';
  }

  /**
   * Método que devuelve el texto cifrado
   * @returns {string} Texto cifrado
   */
  public cifrar(): string {
    let textoCifrado: string = '';
    let clave: number = 0;

    for (let i = 0; i < this._texto.length; i++) {
      const posicion: number = this._alfabeto.indexOf(this._texto[i]);
      if (posicion !== -1) {
        clave = this._alfabeto.indexOf(this._clave[i % this._clave.length]);
        textoCifrado += this._alfabeto[(posicion + clave) %
            this._alfabeto.length];
      } else {
        textoCifrado += this._texto[i];
      }
    }

    return textoCifrado;
  }

  /**
   * Método que devuelve el texto descifrado
   * @returns {string} Texto descifrado
   */
  public descifrar(): string {
    let textoDescifrado: string = '';
    let clave: number = 0;

    for (let i = 0; i < this._texto.length; i++) {
      const posicion: number = this._alfabeto.indexOf(this._texto[i]);
      if (posicion !== -1) {
        clave = this._alfabeto.indexOf(this._clave[i % this._clave.length]);
        textoDescifrado += this._alfabeto[(posicion - clave +
            this._alfabeto.length) % this._alfabeto.length];
      } else {
        textoDescifrado += this._texto[i];
      }
    }

    return textoDescifrado;
  }
}