// Cambiar require por import
import antlr4 from 'antlr4';
import MiGramaticaLexer from './generated/MiGramaticaLexer.js';
import MiGramaticaParser from './generated/MiGramaticaParser.js';
import fs from 'fs'; // 'fs' es un módulo interno de Node.js, se importa así en ES Modules

// --- LECTURA DEL ARCHIVO DE ENTRADA ---
let input = '';
try {
    input = fs.readFileSync('input.txt', 'utf-8');
    console.log("DEBUG: Contenido de input.txt leído:");
    console.log(`"${input}"`); // Rodeado de comillas para ver si está vacío o tiene espacios ocultos
} catch (error) {
    console.error("ERROR: No se pudo leer input.txt. Asegúrate de que existe y la ruta es correcta.", error);
    process.exit(1); // Salir si no se puede leer el archivo
}

if (input.trim().length === 0) { // Usamos .trim() para ignorar solo espacios en blanco
    console.error("ERROR: input.txt está vacío o solo contiene espacios en blanco. Asegúrate de que tenga contenido.");
    process.exit(1);
}

// --- SECCIÓN PARA MOSTRAR TOKENS DIRECTAMENTE DEL LEXER (PARA INFORMACIÓN) ---
// Creamos un lexer temporal SOLO para obtener y mostrar la lista de tokens.
const debugChars = new antlr4.InputStream(input);
const debugLexer = new MiGramaticaLexer(debugChars);

let debugTokens = [];
let debugToken = debugLexer.nextToken();
while (debugToken.type !== antlr4.Token.EOF) {
    debugTokens.push(debugToken);
    debugToken = debugLexer.nextToken();
}

console.log("\nTabla de Lexemas y Tokens:");
console.log("----------------------------");
console.log("Lexema\t\tToken");
console.log("----------------------------");

if (debugTokens.length === 0) {
    console.log("No se generaron tokens. Revisa tu gramática y la entrada.");
} else {
    debugTokens.forEach(t => {
        let tokenName = MiGramaticaLexer.symbolicNames[t.type];
        if (!tokenName) {
            tokenName = MiGramaticaLexer.literalNames[t.type];
        }
        if (t.type !== antlr4.Token.EOF) {
            console.log(`${t.text}\t\t${tokenName}`);
        }
    });
}
console.log("----------------------------\n");
// --- FIN SECCIÓN DE INFORMACIÓN DE TOKENS ---


// --- ANÁLISIS SINTÁCTICO ---
// Creamos un nuevo lexer para el CommonTokenStream del parser.
// Esto garantiza que el parser tenga un flujo de tokens completo y sin consumir.
const parserChars = new antlr4.InputStream(input);
const parserLexer = new MiGramaticaLexer(parserChars);
const tokens = new antlr4.CommonTokenStream(parserLexer);
tokens.fill(); // Esto llena el CommonTokenStream con los tokens del parserLexer

const parser = new MiGramaticaParser(tokens);
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
    }
});

try {
    console.log("Iniciando análisis sintáctico...");
    const tree = parser.programa();
    console.log("Árbol de análisis sintáctico:");
    console.log(tree.toStringTree(parser.ruleNames));
} catch (e) {
    console.error("Error durante el análisis sintáctico:", e.message);
}

// --- INTERPRETACIÓN: TRADUCCIÓN A JAVASCRIPT ---
function traducirCodigo(codigoFuente) {
    return codigoFuente.replace(/print\(/g, "console.log(");
}
const codigoTraducido = traducirCodigo(input);
console.log("\nCódigo traducido:");
console.log(codigoTraducido);

// --- EJECUCIÓN DEL CÓDIGO TRADUCIDO (¡CUIDADO CON EVAL!) ---
try {
    eval(codigoTraducido);
} catch (e) {
    console.error("Error al ejecutar el código traducido:", e.message);
}

console.log("\nAnálisis completado.");