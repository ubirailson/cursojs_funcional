Number.prototype.log = function() { console.log(+this) }
Function.prototype.log = function() { console.log(this.toString()) }

//função identidade
const I = a => a

I(3).log()
I(I).log()
//função self application, invoca parâmetro e mostra o próprio parâmetro
const SELF = f => f(f)

SELF(I).log()

const PRIMEIRO = a => _ => a

PRIMEIRO(7)(11).log()

const ULTIMO = _ => b => b

ULTIMO(7).log()

const TROCA = f => a => b => f(b)(a)

TROCA(PRIMEIRO)(7)(11).log()
TROCA(ULTIMO)(7)(11).log()

const ULTIMO2 = a => b => TROCA(PRIMEIRO)(a)(b)

ULTIMO2(13)(20).log()

//boolean TRUE e FALSE

//true ? <PRIMEIRO> : ULTIMO
//FALSE ? PRIMEIRO : <ULTIMO>

const T = PRIMEIRO
const F = ULTIMO

T.toString = () => 'Verdadeiro - PRIMEIRO '
F.toString = () => 'Falso - ULTIMO'

T.log()
F.log()

//NOT
const NOT = a => a(F)(T)

NOT(F).log()

//AND
const AND = a => b => a(b)(F)

AND(T)(T).log()

// //OR
const OR = a => b => a(T)(b)

OR(T)(T).log()

const EQ = a => b => a(b)(NOT(b))

EQ(T)(T).log()
EQ(F)(T).log()
EQ(T)(F).log()
EQ(F)(F).log()

const XOR = a => b => NOT(EQ(a)(b))
XOR(T)(T).log()
XOR(F)(T).log()
XOR(T)(F).log()
XOR(F)(F).log()
