/**
 * Clase que representa a un luchador
 * @class Fighter
 * @attribute {string} name Nombre del luchador
 * @attribute {number} weight Peso del luchador
 * @attribute {number} height Altura del luchador
 * @attribute {number} attack Ataque del luchador
 * @attribute {number} defense Defensa del luchador
 * @attribute {number} hp Health Points del luchador
 * @attribute {string[]} catchingPhrases Frases que usa el luchador
 */
export abstract class fighter {
  protected name: string;
  protected weight: number;
  protected height: number;
  protected attack: number;
  protected defense: number;
  protected hp: number;
  protected catchingPhrases: string[];

  /**
   * Constructor
   * @param name {string} Nombre del luchador
   * @param weight {number} Peso del luchador
   * @param height {number} Altura del luchador
   * @param attack {number} Ataque del luchador
   * @param defense {number} Defensa del luchador
   * @param hp {number} Health Points del luchador
   * @param catchingPhrases {string[]} Frases que usa el luchador
   */
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number, hp: number,
      ...catchingPhrases: string[]) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.catchingPhrases = catchingPhrases;
  }

  /**
   * Método que devuelve el nombre del luchador
   * @returns {string} Nombre del luchador
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Método que devuelve el peso del luchador
   * @returns {number} Peso del luchador
   */
  public getWeight(): number {
    return this.weight;
  }

  /**
   * Método que devuelve la altura del luchador
   * @returns {number} Altura del luchador
   */
  public getHeight(): number {
    return this.height;
  }

  /**
   * Método que devuelve el ataque del luchador
   * @returns {number} Ataque del luchador
   */
  public getAttack(): number {
    return this.attack;
  }

  /**
   * Método que devuelve la defensa del luchador
   * @returns {number} Defensa del luchador
   */
  public getDefense(): number {
    return this.defense;
  }

  /**
   * Método que devuelve los puntos de vida del luchador
   * @returns {number} Health Points del luchador
   */
  public getHP(): number {
    return this.hp;
  }

  /**
   * Método que añade una frase al repertorio del luchador
   * @param phrase {string} Frase que usa el luchador
   */
  public addCatchingPhrase(phrase: string): void {
    this.catchingPhrases.push(phrase);
  }

  /**
   * Método que devuelve una frase del repertorio del luchador
   * @returns {string} Frase del repertorio del luchador
   */
  public getCatchingPhrase(): string {
    return this.catchingPhrases[Math.floor(Math.random() *
      this.catchingPhrases.length)];
  }

  /**
   * Método que calcula el daño que recibe un oponente
   * @param enemy {fighter} Oponente
   */
  abstract getDamage(enemy: fighter): number;
}