Instalacion: CLona este repositorio:git clone https://github.com/JoacoCR/51945.git

Instrucciones de uso:
En la carpeta analizador Copiá el contenido de alguno de los archivos de entrada con formato .txt y pegalo en el archivo input.txt .Luego, guardalo(Ctrl+s).
para ejecutarlo desde la terminal del proyecto ejecuta: node analizador.js
Si todo funciona correctamente, deberías ver una salida similar a esta en tu terminal:
DEBUG: Contenido de input.txt leído:
"print("HOLA MUNDO");"

Tabla de Lexemas y Tokens:
----------------------------
Lexema          Token
----------------------------
print           PRINT
(               PAREN_ABRE
"HOLA MUNDO"            CADENA
)               PAREN_CIERRA
;               PUNTO_COMA
----------------------------

Iniciando análisis sintáctico...
Árbol de análisis sintáctico:
(programa (instrucciones (instruccion (salida print ( "HOLA MUNDO" ) ;))) <EOF>)

Código traducido:
console.log("HOLA MUNDO");
HOLA MUNDO

Análisis completado.

