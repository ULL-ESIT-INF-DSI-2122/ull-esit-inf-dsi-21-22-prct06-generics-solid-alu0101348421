# Práctica 6 - Clases e interfaces genéricas. Principios SOLID.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101348421/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101348421?branch=main)

# Introducción
Esta práctica consiste en una serie de ejercicios que nos servirán para manejarnos mejor con las clases e interfaces genéricas y para poder aplicar los Principios SOLID.

Las clases y interfaces genéricas son una forma de crear estos elementos pero que nos permiten reutilizar código y que nos permiten crear una estructura de datos más flexible y reutilizable.

Por otro lado, los Principios SOLID son un conjunto de principios orientados a objetos que nos permiten aplicar una política de diseño a nuestros programas.

Estos principios son:
- Single responsibility principle: Una clase debe tener una sola responsabilidad.
- Open/closed principle: Una clase debe ser abierta a la extensión y cerrada a la modificación.
- Liskov substitution principle: Una clase debe ser sustituible por sus subclases.
- Interface segregation principle: Sugiere que es mejor separar interfaces de clases teniendo una gran cantidad de estas que menos interfaces que sean complejas.
- Dependency inversion principle: Una clase debe ser fruto de la abstracción y no de la implementación. 

## Istanbul - Coveralls
En esta práctica, además de lo que hemos hablado en la introducción, también nos servirá para acostumbrarnos a usar herramientas como Istanbul/nyc o Coveralls para poder hacer un seguimiento de nuestros cambios y asegurarnos de que los test que hemos realizado son correctos y comprenden todas las líneas de código.

Istanbul es la herramienta que nos permitirá hacer este control de la cobertura de nuestro código.

A continuación, una muestra de como se ve el uso de Istanbul:

```
---------------------------------|---------|----------|---------|---------|-------------------
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------|---------|----------|---------|---------|-------------------
All files                        |     100 |      100 |     100 |     100 |                   
 Ejercicio-01                    |     100 |      100 |     100 |     100 |                   
  Combat.ts                      |     100 |      100 |     100 |     100 |                   
  Fighter.ts                     |     100 |      100 |     100 |     100 |                   
  Pokedex.ts                     |     100 |      100 |     100 |     100 |                   
  Pokemon.ts                     |     100 |      100 |     100 |     100 |                   
  SAO.ts                         |     100 |      100 |     100 |     100 |                   
  Saiyan.ts                      |     100 |      100 |     100 |     100 |                   
 Ejercicio-02                    |     100 |      100 |     100 |     100 |                   
  BasicStreamableCollection.ts   |     100 |      100 |     100 |     100 |                   
  DocumentalsCollection.ts       |     100 |      100 |     100 |     100 |                   
  FilmsCollection.ts             |     100 |      100 |     100 |     100 |                   
  SeriesCollection.ts            |     100 |      100 |     100 |     100 |                   
  audiovisual.ts                 |     100 |      100 |     100 |     100 |                   
 Ejercicio-03                    |     100 |      100 |     100 |     100 |                   
  Cifrado.ts                     |     100 |      100 |     100 |     100 |                   
 Ejercicio-04                    |     100 |      100 |     100 |     100 |                   
  NumericSearchableCollection.ts |     100 |      100 |     100 |     100 |                   
  SearchableCollection.ts        |     100 |      100 |     100 |     100 |                   
  StringSearchableCollection.ts  |     100 |      100 |     100 |     100 |                   
---------------------------------|---------|----------|---------|---------|-------------------
```

Como podemos ver, nos analiza el porcentaje de código que ha sido ejecutado y especifíca las ramas y líneas que no han sido ejecutadas.

Por otro lado, Coveralls es el servicio web que nos permite revisar este seguimiento a lo largo del tiempo para ver como ha evolucionado nuestro código y nos permite compartir estos datos.
# Ejercicios
## Ejercicio 1 - El combate definitivo
En este ejercicio vamos a aprovechar la idea de combate de la práctica anterior y vamos a expandirlo a diferentes universos.

En primer lugar, vamos a definir una clase abstracta `fighter` que nos permitirá crear los tipos de personajes que vamos a usar en nuestra aplicación.

Un personaje, para que sea válido debe tener algunos datos básicos como nombre, peso, altura, ataque, defensa, puntos de vida y un conjunto de frases que usa el personaje en cuestión.

Por otro lado, para que nuestros personajes sean capaces de combatir, deben tener un método `getDamage` que nos permita calcular el daño que recibirá un adversario en función de los atributos del personaje.

```typescript
export abstract class fighter {
  protected name: string;
  protected weight: number;
  protected height: number;
  protected attack: number;
  protected defense: number;
  protected hp: number;
  protected catchingPhrases: string[];

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

  (...)

  abstract getDamage(enemy: fighter): number;
}
```

En mi caso, los universos son:
- Pokémon
- Dragon Ball
- Sword Art Online

Estos universos tendrán sus particularidades y deberán adaptar su lógica de combate a las necesidades de cada uno.

En el caso de los Pokémon, a los atributos se les añadirán la velocidad y el tipo.
Aprovechándonos de lo aprendido en la práctica anterior, el daño se calculará en función a la efectividad de los tipos si nos enfrentamos a otro pokemon, o con una fórmula estándar si nos enfrentamos a otro tipo de adversario.

```typescript
  public getDamage(enemy: fighter): number {
    if (enemy instanceof Pokemon) {
      return 50 * (this.attack / enemy.getDefense()) *
          this.effectiveness(this.type, enemy.type);
    } else {
      return 50 * (this.attack / enemy.getDefense());
    }
  }
```

Para el universo Dragon Ball, los atributos extra serán el poder del peleador y el lvl (referencia a nivel de evolución) del mismo.

El daño es indiferente del tipo del rival, ya que los saiyan no tienen compasión.

En este caso, el daño sigue la siguiente ecuación:

`((Poder / 10) * Lvl * Ataque) / Defensa del rival`

```typescript
  public getDamage(enemy: fighter): number {
    return ((this.power / 10) * this.lvl * this.attack) / enemy.getDefense();
  }
```

El universo final es Sword Art Online, un mundo virtual de MMORPG en el que cada personaje tiene un tipo y un arma nivelada.

Dependiendo del tipo del personaje, se aplicarán unos multiplicadores a su ataque que comenzará desde la mitad de su ataque real.

Con este ataque calculado, la fórmula que retornará el daño será:
`50 * ataque * LVLArma / Defensa`

```typescript
  public getDamage(enemy: fighter): number {
    let attack: number = this.attack / 2;
    if (this.playerType === 'Sniper' || this.playerType === 'Slayer') {
      attack *= 2;
    }
    if (this.playerType === 'Swordsman' || this.playerType === 'Ninja' ||
        this.playerType === 'Samurai' || this.playerType === 'Monk') {
      attack *= 1.2;
    }
    if (this.playerType === 'Gunner' || this.playerType === 'Berserker') {
      attack *= 1.5;
    }
    return 50 * attack * this.weaponLevel / enemy.getDefense();
  }
```

Con todos nuestros universos creados, el siguiente paso será definir nuestra Pokedex universal

Esta contendrá una lista específica para cada universo y se le podrán añadir nuevos luchadores ademas de poder obtenerlos según su nombre.

```typescript
export class Pokedex {
  PokemonList: Pokemon[];
  SAOList: SwordArtOnline[];
  SaiyanList: Saiyan[];

  /**
   * Constructor
   */
  constructor() {
    this.PokemonList = [];
    this.SAOList = [];
    this.SaiyanList = [];
  }

  /**
   * Método que permite añadir un luchador a su lista correspondiente
   * @param fighter {fighter} Luchador a añadir
   */
  public addFighter(fighter: fighter): void {
    if (fighter instanceof Pokemon) {
      this.PokemonList.push(fighter);
    } else if (fighter instanceof SwordArtOnline) {
      this.SAOList.push(fighter);
    } else {
      this.SaiyanList.push(fighter as Saiyan);
    }
  }

  /**
   * Método que devuelve un luchador a partir de su nombre
   * @param name {string} Nombre del luchador
   * @returns {fighter} Luchador
   */
  public getFighter(name: string): fighter | undefined {
    for (let pokemon of this.PokemonList) {
      if (pokemon.getName() === name) {
        return pokemon;
      }
    }
    for (let sao of this.SAOList) {
      if (sao.getName() === name) {
        return sao;
      }
    }
    for (let saiyan of this.SaiyanList) {
      if (saiyan.getName() === name) {
        return saiyan;
      }
    }
    return undefined;
  }

  /**
   * Método que devuelve una lista con todos los luchadores
   * @returns {fighter[]} Lista de luchadores
   */
  public getAllFighters(): fighter[] {
    let allFighters: fighter[] = [];
    allFighters = allFighters.concat(this.PokemonList);
    allFighters = allFighters.concat(this.SAOList);
    allFighters = allFighters.concat(this.SaiyanList);
    return allFighters;
  }
}
```

Por último, nos faltará la clase que se encargará de gestionar el combate.

La clase combat se construirá por dos combatientes. El primero de ellos será el que iniciará cada turno y en cada turno se realizará el calculo del daño de cada uno y se evaluará un ganador.

Además, hay que tener en cuenta que cada combatiente, tras golpear, dirá una frase característica que se obtendrá mediante `getCatchingPhrase()`

La lógica del combate será la siguiente:

```typescript
  public fight(): [fighter, string] {
    let output: string = '';
    const damage1: number = this.fighter1.getDamage(this.fighter2);
    const damage2: number = this.fighter2.getDamage(this.fighter1);
    let hp1: number = this.fighter1.getHP();
    let hp2: number = this.fighter2.getHP();
    output += `--- ${this.fighter1.getName()} vs ${this.fighter2.getName()} ---\n`;
    output += `${this.fighter1.getName()} HP: ${hp1}\n`;
    output += `${this.fighter2.getName()} HP: ${hp2}\n`;
    output += `----------------------------------------------------------------\n`;
    while (true) {
      output += `--- Turno de ${this.fighter1.getName()} ---\n`;
      hp2 -= damage1;
      output += `${this.fighter1.getCatchingPhrase()}\n`;
      if (hp2 <= 0) {
        output += `${this.fighter1.getName()} ha ganado la pelea\n`;
        return [this.fighter1, output];
      }
      output += `${this.fighter1.getName()} HP: ${hp1}\n`;
      output += `${this.fighter2.getName()} HP: ${hp2}\n`;
      output += `----------------------------------------------------------------\n`;
      output += `--- Turno de ${this.fighter2.getName()} ---\n`;
      hp1 -= damage2;
      output += `${this.fighter2.getCatchingPhrase()}\n`;
      if (hp1 <= 0) {
        output += `${this.fighter2.getName()} ha ganado la pelea\n`;
        return [this.fighter2, output];
      }
      output += `${this.fighter1.getName()} HP: ${hp1}\n`;
      output += `${this.fighter2.getName()} HP: ${hp2}\n`;
      output += `----------------------------------------------------------------\n`;
    }
  }
```

Con esta función retornará dos valores, en primer lugar devolverá al ganador, y en segundo lugar una cadena que servirá como registro del combate, con los daños, puntos de vida, turnos y frases de cada combatiente.

## Ejercicio 2 - DSIflix

Este ejercicio consiste en crear unas especies de videotecas que almacenen los datos de diferentes tipos de contenidos audiovisuales.

En primer lugar, debemos crear la interfaz Streamable, de la cuál saldrán estas colecciones.

Para ello, y para cumplir con el principio de Interface Segregation Principle, la interfaz `Streamable` se compone de dos interfaces denominadas `Collection` y `SearchableStream`. La primera se encarga de que los objetos puedan ser añadidos a una colección y la segunda de que los objetos puedan ser buscados dentro de la colección.

```typescript
export interface Collection <T> {
  items: T[];
  addItem(item: T): void;
  getItems(): T[];
  getItem(index: number): T;
  removeItem(index: number): void;
  getNumberOfItems(): number;
}

export interface SearchableStream <T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
}

export interface Streamable <T> extends Collection <T>, SearchableStream <T> {}
```

Con esta interfaz creada, el siguiente paso será crear una clase abstracta que defina este tipo de colecciones de contenido:

BasicStreamableCollection implementa este tipo de colecciones y se basa en una lista del objeto `T` y diferentes métodos para añadir, obtener, eliminar y buscar elementos. Los métodos de búsqueda se implementan como métodos abstractos para que cada subclase las defina según sus necesidades.

A continuación, he definido otro tipo de clase abstracta que será la que definirá estos contenidos audiovisuales. Se compone por un nombre, un autor, un año de estreno, un género y una descripción del contenido.

```typescript
export abstract class Audiovisual {
  private name: string;
  private author: string;
  private year: number;
  private genre: string;
  private description: string;

  (...)
}
```

El siguiente paso será definir las particularidades que tendrán los contenidos audiovisuales.
Los documentales tendrán una duración, las películas, una duración y una valoración en estrellas, y las series tendrán un número de temporadas y un número de episodios.

```typescript
export class Documental extends Audiovisual {
  private duration: number;

  (...)
}

export class Film extends Audiovisual {
  private duration: number;
  private stars: number;

  (...)
}

export class Serie extends Audiovisual {
  private seasons: number;
  private episodes: number;
  
    (...)
}
```
Estas clases tendrán getters extra para obtener estos datos.

El último paso, será definir las diferentes colecciones que contendrán los contenidos audiovisuales poniendo especial atención a estos datos que son únicos para cada tipo de contenido.

Asimismo, todas deberán definir los métodos que marcamos como abstractos en `BasicStreamableCollection` para que cada subclase las defina según sus necesidades.

Pongamos como ejemplo una colección de documentales.

```typescript
import { BasicStreamableCollection } from './BasicStreamableCollection';
import { Documental } from './audiovisual';

export class DocumentalsCollection extends BasicStreamableCollection<Documental> {
  public searchByName(name: string): Documental[] {
    return this.items.filter((item) => item.getName() === name);
  }

  public searchByYear(year: number): Documental[] {
    return this.items.filter((item) => item.getYear() === year);
  }

  public searchByGenre(genre: string): Documental[] {
    return this.items.filter((item) => item.getGenre() === genre);
  }

  public searchByDuration(duration: number): Documental[] {
    return this.items.filter((item) => item.getDuration() === duration);
  }
}
```
Esto deberemos repetirlo para las películas y las series, añadiendo métodos como `searchByStars`, `searchBySeasons` y `searchByEpisodes`.

```typescript
  public searchByStars(stars: number): Film[] {
    return this.items.filter((item) => item.getStars() === stars);
  }
```

```typescript
  public searchBySeasons(seasons: number): Serie[] {
    return this.items.filter((item) => item.getSeasons() === seasons);
  }

  public searchByEpisodes(episodes: number): Serie[] {
    return this.items.filter((item) => item.getEpisodes() === episodes);
  }
```

## Ejercicio 3 - El cifrado indescifrable
Para este ejercicio se nos propone una clase que nos permita cifrar y descifrar un texto mediante una variante del cifrado César, la cuál nos permite introducir una clave que será la que determine cuantas posiciones debe moverse cada letra del texto.

Este cifrado es conocido como cifrado Vigenere y se puede entender mas sencillamente de la siguiente manera:

texto a cifrar
||||| | ||||||
clave c lavecl
||||| | ||||||
vpxps c nibvcd

En este caso, la `c` nos determina un movimiento de 2 posiciones, por tanto, la letra `t` se convertirá en una `v` y así sucesivamente.

para nuestra clase, en el constructor vamos a permitir que el usuario introduzca el texto a cifrar/descifrar, la clave, y en caso de que quiera usar su propio alfabeto, también podrá introducirlo. Si no introduce ninguno, se usará el alfabeto por defecto.

```typescript
  constructor(texto: string, clave: string, alfabeto?: string) {
    this._texto = texto;
    this._clave = clave;
    this._alfabeto = alfabeto || 'abcdefghijklmnopqrstuvwxyz';
  }
```

A la hora de cifrar, nos serviremos de la función indexOf para obtener la posición de la letra en el alfabeto, si no está en el alfabeto, nos devolverá -1, pero si está, nos devolverá la posición en la que se encuentra. Con esta posición, podremos sumársela a la posición de la letra de la clave que corresponda y lo agregaremos al texto descifrado.

En caso de que no se encuentre un valor del texto, simplemente no se cifrará esa letra.

```typescript
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
```

Para descifrar el proceso es idéntico, salvo que en vez de sumar la posición de la letra de la clave, restamos la posición de la letra de la clave.

```typescript
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
```
# Conclusión

Estos ejercicios nos ayudan bastante a entendernos con las clases e interfaces genéricas. El primero se baso sobretodo en el uso de clases, clases genéricas y herencia, el segundo en el uso de las interfaces genéricas.

El uso de Istanbull ha sido realmente útil para comprobar que todos los detalles de nuestro código están siendo testeados, pero hay un detalle, y es que en casos como el ejercicio 01, cuando hay multiples comprobaciones de un dato, como en el calculo de la efectividad, debes testear todas las posibles combinaciones, cuando son una réplica de las anteriores.

Sin embargo, aunque llega a ser tedioso en ciertos puntos en los que esto sucede, es realmente útil para que no se nos pase ningún detalle ni ninguna rama sin testear.