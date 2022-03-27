<br>

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



## Ejercicio 2 - DSIflix

## Ejercicio 3 - El cifrado indescifrable


# Conclusión