// Generated from c:/analizadorrrrrr/MiGramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiGramaticaListener from './MiGramaticaListener.js';
import MiGramaticaVisitor from './MiGramaticaVisitor.js';

const serializedATN = [4,1,12,41,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,1,4,1,17,8,1,11,1,12,1,18,1,2,1,2,3,2,23,8,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,
4,6,8,10,0,0,36,0,12,1,0,0,0,2,16,1,0,0,0,4,22,1,0,0,0,6,24,1,0,0,0,8,32,
1,0,0,0,10,38,1,0,0,0,12,13,3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,17,3,4,
2,0,16,15,1,0,0,0,17,18,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,3,1,0,0,0,
20,23,3,6,3,0,21,23,3,8,4,0,22,20,1,0,0,0,22,21,1,0,0,0,23,5,1,0,0,0,24,
25,5,1,0,0,25,26,5,3,0,0,26,27,3,10,5,0,27,28,5,4,0,0,28,29,5,5,0,0,29,30,
3,2,1,0,30,31,5,6,0,0,31,7,1,0,0,0,32,33,5,2,0,0,33,34,5,3,0,0,34,35,5,8,
0,0,35,36,5,4,0,0,36,37,5,7,0,0,37,9,1,0,0,0,38,39,5,9,0,0,39,11,1,0,0,0,
2,18,22];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiGramaticaParser extends antlr4.Parser {

    static grammarFileName = "MiGramatica.g4";
    static literalNames = [ null, "'while'", "'print'", "'('", "')'", "'{'", 
                            "'}'", "';'" ];
    static symbolicNames = [ null, "WHILE", "PRINT", "PAREN_ABRE", "PAREN_CIERRA", 
                             "LLAVE_ABRE", "LLAVE_CIERRA", "PUNTO_COMA", 
                             "CADENA", "NUMERO", "LETRA", "DIGITO", "ESPACIO" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "salida", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiGramaticaParser.ruleNames;
        this.literalNames = MiGramaticaParser.literalNames;
        this.symbolicNames = MiGramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiGramaticaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.instrucciones();
	        this.state = 13;
	        this.match(MiGramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiGramaticaParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 15;
	            this.instruccion();
	            this.state = 18; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiGramaticaParser.RULE_instruccion);
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.bucle();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiGramaticaParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(MiGramaticaParser.WHILE);
	        this.state = 25;
	        this.match(MiGramaticaParser.PAREN_ABRE);
	        this.state = 26;
	        this.condicion();
	        this.state = 27;
	        this.match(MiGramaticaParser.PAREN_CIERRA);
	        this.state = 28;
	        this.match(MiGramaticaParser.LLAVE_ABRE);
	        this.state = 29;
	        this.instrucciones();
	        this.state = 30;
	        this.match(MiGramaticaParser.LLAVE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiGramaticaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(MiGramaticaParser.PRINT);
	        this.state = 33;
	        this.match(MiGramaticaParser.PAREN_ABRE);
	        this.state = 34;
	        this.match(MiGramaticaParser.CADENA);
	        this.state = 35;
	        this.match(MiGramaticaParser.PAREN_CIERRA);
	        this.state = 36;
	        this.match(MiGramaticaParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiGramaticaParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(MiGramaticaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiGramaticaParser.EOF = antlr4.Token.EOF;
MiGramaticaParser.WHILE = 1;
MiGramaticaParser.PRINT = 2;
MiGramaticaParser.PAREN_ABRE = 3;
MiGramaticaParser.PAREN_CIERRA = 4;
MiGramaticaParser.LLAVE_ABRE = 5;
MiGramaticaParser.LLAVE_CIERRA = 6;
MiGramaticaParser.PUNTO_COMA = 7;
MiGramaticaParser.CADENA = 8;
MiGramaticaParser.NUMERO = 9;
MiGramaticaParser.LETRA = 10;
MiGramaticaParser.DIGITO = 11;
MiGramaticaParser.ESPACIO = 12;

MiGramaticaParser.RULE_programa = 0;
MiGramaticaParser.RULE_instrucciones = 1;
MiGramaticaParser.RULE_instruccion = 2;
MiGramaticaParser.RULE_bucle = 3;
MiGramaticaParser.RULE_salida = 4;
MiGramaticaParser.RULE_condicion = 5;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(MiGramaticaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_bucle;
    }

	WHILE() {
	    return this.getToken(MiGramaticaParser.WHILE, 0);
	};

	PAREN_ABRE() {
	    return this.getToken(MiGramaticaParser.PAREN_ABRE, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PAREN_CIERRA() {
	    return this.getToken(MiGramaticaParser.PAREN_CIERRA, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(MiGramaticaParser.LLAVE_ABRE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(MiGramaticaParser.LLAVE_CIERRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_salida;
    }

	PRINT() {
	    return this.getToken(MiGramaticaParser.PRINT, 0);
	};

	PAREN_ABRE() {
	    return this.getToken(MiGramaticaParser.PAREN_ABRE, 0);
	};

	CADENA() {
	    return this.getToken(MiGramaticaParser.CADENA, 0);
	};

	PAREN_CIERRA() {
	    return this.getToken(MiGramaticaParser.PAREN_CIERRA, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(MiGramaticaParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_condicion;
    }

	NUMERO() {
	    return this.getToken(MiGramaticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiGramaticaParser.ProgramaContext = ProgramaContext; 
MiGramaticaParser.InstruccionesContext = InstruccionesContext; 
MiGramaticaParser.InstruccionContext = InstruccionContext; 
MiGramaticaParser.BucleContext = BucleContext; 
MiGramaticaParser.SalidaContext = SalidaContext; 
MiGramaticaParser.CondicionContext = CondicionContext; 
