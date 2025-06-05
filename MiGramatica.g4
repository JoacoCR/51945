grammar MiGramatica;

// Reglas del Parser
programa: instrucciones EOF;
instrucciones: instruccion+;
instruccion: bucle | salida;

bucle: WHILE PAREN_ABRE condicion PAREN_CIERRA LLAVE_ABRE instrucciones LLAVE_CIERRA;
salida: PRINT PAREN_ABRE CADENA PAREN_CIERRA PUNTO_COMA;
condicion: NUMERO;

// --- Reglas del LEXER (empiezan con MAYÚSCULA) ---
WHILE: 'while';
PRINT: 'print';

PAREN_ABRE: '(';
PAREN_CIERRA: ')';
LLAVE_ABRE: '{';
LLAVE_CIERRA: '}';
PUNTO_COMA: ';';

CADENA: '"' (~["])* '"';

NUMERO: DIGITO+;
LETRA: [a-zA-Z];
DIGITO: [0-9];

// Ignorar espacios y saltos de línea
ESPACIO: [ \t\r\n]+ -> skip;