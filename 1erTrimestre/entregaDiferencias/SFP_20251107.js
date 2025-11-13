/*
EL primer concepto a entender seria que JavaScript es un lenguaje de tipado dinamico
eso quiere decir que el "tipo" de dato que almacena una variable puede variar durante 
la ejecucion del programa (contrario a otro lenguajes como Java o C).

Gracias a TypeScript antes de ejecutarse el codigo, el compilador verifica que el tipo
indicado para esa variable se respeta, de esta manera, aporta claridad y sobretodo una capa
de seguridad, evitando que ocurran errores extraños de tipos en la fase de ejecucion.

Una ultima cosa a destacar antes de la explicacion... Typescript permite crear tus propios tipos
(custom) indicando el o los tipos que puede almacenar.
*/

// Gracias al uso de la palabra "type" declaramos un tipo de dato custom
type PostId = number; // En este caso PostId almacena number y ningun otro mas
type Day = string; // "Day" almacena un string
// Al igual que en JavaScript podemos declarar objetos, con TypeScript no iba a ser menos
// ya que TypeScript no es mas que un super set de JavaScript
type Post = { 
  id: PostId; // Este objeto "Post" almacena estas propiedades, un "id" que utiliza nuestro custom Type
  title: string; // UN "title" que solo almacena String
  author: string; // "author" nuevamente un string 
  day: Day; // "day" utiliza nuestro tipo de dato custom "Day"
  status: string; // "status" almacena una cadena de caracteres
  isSticky: boolean; // "isSticky" es un booleano
};
/*
Investigando sobre las estructuras de datos nativas de TypeScript he descubierto que "Dictionary"
no es un tipo de coleccion ya definido de este, por lo que se debe haber definido antes.
En este caso utiliza los tipo de datos previamente definidos almacenandolos en una estructura 
Clave-Valor
*/
type State = {
  posts: Dictionary<PostId, Post>; //Este almacena "PostId" como clave y el objeto "Post" como valor
  days: Dictionary<Day, PostId[]>; // Este otro "Day" como clave y un array de "PostId"
};
/*
La principal ventaja respecto a JavaScript, seria que al tener un tipado fuerte, podemos detectar errores
en una fase temprana del desarrollo. Tambien la refactorizacion es mas sencilla, pues si lo cambiamos, veremos
con antelacion todos los lugares afectados. Podemos llegar a decir que este lenguaje se "autodocumenta" a si mismo
pues la sintaxis es bastante clara y ya da un idea del uso de ese "type" incluso antes de ver su uso en el codigo.
*/