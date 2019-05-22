---
date: '2019-05-21'
latestUpdateDate: '2019-05-21'
title: 'Unicode en Javascript'
author: Azteca
tags: ['unicode', 'javascript']
---

![imagenchida](img1.jpg)

## El otro dia...

estaba viendo mi 'feed' de Twitter cuando me tope con esta imagen, al verla note que el lenguaje de programacion usado para realizar este cyberataque fue Javascript, sin emargo note algo raro, aunque ya tengo mis años de experiencia trabajando en javascript, no podia entender el codigo ya que este estaba codificado en unicode, lo cual genera cierto grado de ofuscacion.

Dado mi interes e inclinacion por la ciberseguridad decidi investigar que era lo que este codigo escondia, ya que estaba puesto en una pagina de muy alto perfil en la web (forbesmagazine.com)

# Empezemos con la definicion de Unicode

Como buen investigador milenial que soy, el primer lugar al que acudo es wikipedia para ver que informacion puedo sacar y tener el conocimiento basico en Unicode (https://es.wikipedia.org/wiki/Unicode). Al darle una leida rapido podemos ver que para denominar un elemento Unicode escribimos la letra U, el simbolo de mas y 4 numeros hexadecimales. Existe la composicion de caracteres y secuencias. Existen varios estandares de Unicode, entre estos los mas populares UTF-8 y UTF-16, y muchas informacion muy interesante mas que les dejare a ustedes que lean a discrecion.

# ?Donde estan y cuales son?

Ok, ya tenemos una nocion basica de Unicode, ahora lo siguiente es como decodificar un caracter. Para esto una buena "Googleada" nos puede traer buenos resultados como https://unicode-table.com/es/ la cual nos puede faciliar la busqueda por secciones y por su nombre/uso, origen de caracter, por ejemplo si es cirilico, kanjis japoneses, lenguas muertas, Runas, etc.

# Ok, pero... y Javascript

Claro la manera de Javascript de implementar Unicode es muy sencilla, dado que Unicode al final del dia termina siento texto, este mismo puede ser utilizado para ver su 

Claro la manera de Javascript de implementar Unicode es muy sencilla, dado que Unicode al final del dia termina siento texto, este mismo es utilizado para representar y traducir estos caracteres utilizando el caracter de escape la famosa y peligrosa diagonal invertida \

# Un poco mas de esa famosa y peligrosa...

La diagonal invertida dentro de un texto en javascript sirve para escapar el texto y tenga un diferente comportamiento a simplemente imprimir el caracter dentro del texto. Aqui unos que muy posiblemente ya conozcas:

- \n : Este caracter se usa para generar una nueva linea en el texto
- \t : Tabulador horizontal
- \\ : Impresion de la diagonal invertida
- \' : Impresion del comilla simple en un texto con comillas dobles
- \" : Impresion del comilla doble en un texto con comillas simple

Pero igualmente funcionan las impresion de los caracteres Unicode

# '\u0048\u006f\u006c\u0061\u0020\u006d\u0075\u006e\u0064\u006f'

No, espera! No te apresures a traducir lo que dice, el texto dice "Hola Mundo", no me crees? Te invito a jugar con Unicode y seguir los ejemplos abriendo la consola de tu navegador o una consola de comandos y correr Node.js y pegar los ejemplos que voy a dejar aqui.

# Pero la imagen que compartiste tienen este formato '\x64\x75\x68\x21'

Oh si, tambien existe el escape de \x el cual sirve solamente para las dos primeras secciones de Unicode, denominadas Latin-1, los cuales comprenden los 3 primeros bloques de Unicode, siendo caracteres de control y Latin basico exactamente como ASCII para tener retrocompatibilidad y Latin-1 sumplemento, el cual comprenden letras con acento, dieresis, circunflejo (Nueva palabra para mi tambien) y otras letras latinas.

# Excelente, que mas se puede escapar?

Como pudiste ver para escribir un caracter de Unicode se tiene que escribir el caracter de escape, la letra U y el codigo Unicode en 4 caracteres hexadecimal

# Entonces? el codigo que dice

@TODO

# Algo mas

Si, siguiendo la normas/syntaxis de Javascript significa que tambien podemos usar Unicode para declarar una variable

> let \u0078 = '\u{1f609}';
