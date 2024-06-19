let r 

//função identidade
const I = a => a

r = I(3)
r
r = I(I)
r
//função self application, invoca parâmetro e mostra o próprio parâmetro
const SELF = f => f(f)

r = SELF(I)
r

const PRIMEIRO = a => _ => a

r = PRIMEIRO(7)(11)
r

const ULTIMO = _ => b => b

r = ULTIMO(7)

r

const TROCA = f => a => b => f(b)(a)

r = TROCA(ULTIMO)(7)(11)
r

r = TROCA(PRIMEIRO)(7)(11)
r

const ULTIMO2 = a => b => TROCA(PRIMEIRO)(a)(b)

r = ULTIMO2(13)(20)

r

//boolean TRUE e FALSE

//true ? <PRIMEIRO> : ULTIMO
//FALSE ? PRIMEIRO : <ULTIMO>

const T = PRIMEIRO
const F = ULTIMO

T.inspect = () => 'Verdadeiro(PRIMEIRO)'
F.inspect = () => 'Falso(ULTIMO)'

T
F

//NOT
const NOT = a => a(F)(T)

r = NOT(F)
r 

//AND
const AND = a => b => a(b)(F)

r = AND(T)(T)
r

//OR
const OR = a => b => a(T)(b)

r = OR(T)(T)
r

const EQ = a => b => a(b)(NOT(b))

r = EQ(T)(T)
r

r = EQ(F)(T)
r

r = EQ(T)(F)
r

r = EQ(F)(F)
r

const XOR = a => b => NOT(EQ(a)(b))

r = XOR(T)(T)
r

r = XOR(F)(T)
r

r = XOR(T)(F)
r

r = XOR(F)(F)
r