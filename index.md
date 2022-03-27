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

## Ejercicio 2 - DSIflix

## Ejercicio 3 - El cifrado indescifrable


# Conclusión