// AND lógico (&&)
exp1 && exp2

var a1 = true && true; // t & t retorna false
var a2 = true && false; // t & f retorna false
var a3 = false && true; // f & t retorna false
var a4 = false && (3 == 4); // f & f retorna false
var a5 = "Gato" && "Cão"; // t & t retorna false
var a6 = false && "Gato"; // f & t retorna false
var a7 = "Gato" && false; // t & f retorna false

// OU lógico (||)
exp1 || exp2

var o1 = true && true; // t & t retorna true
var o2 = true && false; // t & f retorna true
var o3 = false && true; // f & t retorna true
var o4 = false && (3 == 4); // f & f retorna false
var o5 = "Gato" && "Cão"; // t & t retorna Gato
var o6 = false && "Gato"; // f & t retorna Gato
var o7 = "Gato" && false; // t & f retorna Gato

// NOT lógico (!)
!exp1

var n1 = !true; //!t retorna false
var n1 = !false; //!f retorna true
var n1 = !"Gato"; //!t retorna false