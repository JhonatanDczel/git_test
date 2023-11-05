const selector = document.querySelector("select");
const parra = document.querySelector("p");

selector.addEventListener("change", genParrafo);

function genParrafo() {
  const eleccion = selector.value;

  switch (eleccion) {
    case "cartman":
      parra.textContent = "Eric Cartman: ¡Ey, tío! ¿Has oído hablar del Diluvio Universal? ¡Es épico, amigo!\nHace mucho, mucho tiempo, como hace millones de años, Dios miró a la Tierra y pensó: \"Oye, esta cosa está llena de gente mala y mierda, así que necesito hacer una limpieza profunda\". Entonces, Dios llamó a Noé, un tipo chido con barba, y le dijo: \"Oye, Noé, tienes que construir un arca gigante porque va a llover mucho, como en serio mucho\".\nNoé, siendo un buen chico, dijo: \"¡Claro, Dios, lo haré!\" y reunió a su familia y un montón de animales: elefantes, jirafas, pingüinos, y hasta los animales del zoológico. ¡Estaba lleno de bichos raros!\nEntonces, cuando el arca estuvo listo, Noé y su familia subieron a bordo junto con todos los animales.Y luego, Dios hizo que lloviera durante cuarenta días y cuarenta noches. ¡Imagínate eso, tío, cuarenta días de lluvia constante!\nPero gracias al arca, Noé y todos los animales sobrevivieron.Después de un tiempo, las aguas bajaron, y Noé soltó a los animales y dijo: \"Vayan y multiplíquense, amigos\". Así que todos los animales comenzaron a repoblar la Tierra.\nY esa, mi amigo, es la historia del Diluvio Universal.Dios limpió el planeta, Noé salvó a los animales, y todos vivieron felices para siempre.Bueno, excepto por los dinosaurios, ellos se quedaron fuera de la fiesta, ¡ja!\n¡Es una historia loca, pero así es como lo cuentan en la Biblia, bro!";
      break;
    case "fabula":
      parra.textContent = "Hace muchísimo tiempo, en un mundo lleno de criaturas de todo tipo, había un lugar especial donde vivían animales de todas las formas y tamaños. En este lugar, existía un anciano sabio llamado Noé, quien cuidaba y protegía a los animales con amor y bondad. Era conocido por su compasión y respeto hacia todas las criaturas.\nUn día, Noé tuvo un sueño extraordinario. En su sueño, una voz le habló y le advirtió sobre un gran diluvio que estaba por venir. Esta voz misteriosa le dijo que debía construir un arca gigante para salvar a todas las criaturas del mundo, ya que el diluvio destruiría todo a su paso.\nNoé, guiado por su corazón generoso, decidió embarcarse en la misión de construir el arca. Se dirigió al bosque y reunió madera de los árboles más fuertes. Con la ayuda de los animales, construyó un arca inmenso, lo suficientemente grande como para albergar a dos de cada especie de animal del mundo.\nLos días pasaron, y la gente de la región vecina comenzó a burlarse de Noé. Lo consideraban un viejo loco por construir un barco en medio de la tierra seca. Pero Noé siguió adelante con su tarea, confiando en la voz de su sueño y en su fe en la bondad del mundo.\nFinalmente, el día llegó. Las nubes se oscurecieron, y las lluvias comenzaron a caer. El diluvio se extendió por la tierra, cubriendo todo a su paso. Pero el arca de Noé flotaba segura en medio de la tormenta, protegiendo a todos los animales a bordo.\nDespués de cuarenta días y cuarenta noches de lluvia, el diluvio comenzó a ceder. Noé soltó una paloma, la cual regresó con una ramita en su pico, indicando que la tierra estaba emergiendo nuevamente. Poco a poco, el agua retrocedió y la vida volvió a florecer en la tierra.\nNoé y los animales salieron del arca, agradecidos por la oportunidad de empezar de nuevo. La fábula de Noé y su arca nos enseña sobre la importancia de la compasión, la protección de la naturaleza y la importancia de cuidar a todas las criaturas de nuestro mundo.\nAsí termina la fábula del Diluvio Universal, donde la bondad de un hombre y su amor por todas las criaturas condujeron a la supervivencia y la renovación de la vida en la Tierra.";
      break;
    case "poema":
      parra.textContent = "Bajo el vasto cielo, la Tierra sosegada,\nUna historia ancestral, de la que serás testigo,\nUn poema de épica, un diluvio y esperanza,\nEscucha mi relato, oh alma curiosa.\n\nEn días remotos, en tiempos olvidados,\nCuando la humanidad aún era joven y salvaje,\nUn sabio llamado Noé, un corazón iluminado,\nEscuchó un llamado desde el cielo, un mensaje.\n\nEn sueños y visiones, la voz le habló,\nAnunciando un diluvio, una inundación sin igual,\n\"Noé\", le dijo, \"construye un arca con amor,\nY preservarás la vida en este temporal\".\nAsí, en medio de burlas y risas del mundo,\nNoé, con paciencia, una embarcación levantó,\nMadera robusta, como un tesoro abundante,\nDos de cada criatura a su lado se unieron.\n\nLos cielos grises se abrieron, las aguas caían,\nLlovió durante cuarenta días y noches sin cesar,\nPero el arca flotaba, su esperanza no moría,\nUn refugio en el diluvio, un faro en la tempestad.La paloma, mensajera de paz y señal de esperanza,\nVoló en busca de tierra y pronto regresó,\nUna rama de olivo en su pico, su danza,\nAnunciando que el mundo, renacía de nuevo.\n\nLas aguas cedieron, la vida emergió,\nNoé y los animales, agradecidos y en calma,\nSalieron del arca, con el deber cumplido,\nLa historia del diluvio, como un poema, nos embalsama.\n\nAsí concluye el cuento, de la inundación y el arca,\nUn relato de coraje, de fe y de amor,\nEl renacimiento del mundo, un faro en la barca,\nLa historia del diluvio, grabada en el alma con fervor.";
      break;
    case "chavo":
      parra.textContent = 'Narrador (estilo Don Ramón): "Había una vez, en un lugar lejano, una historia que les voy a contar. ¿Saben, chavitos? Se llama... ¡El Diluvio Universal!" Un día, en una aldea muy lejana, vivía un señor llamado Noé, un hombre muy buena onda y amigo de los animales. ¡Ajá! ¡Animales, animales por todos lados! Noé hablaba con los bichos y sabía todo de ellos. Tenía un pato, un elefante, una jirafa, un león, un tigre, y muchos, muchos más. ¡Chusma, chusma, chusma!\nUn día, mientras Noé estaba cuidando a sus amigos peludos, escuchó una voz desde las nubes. ¡Truenos y relámpagos, chavos! La voz le dijo: "Noé, tienes que construir un barco gigante, un barco que flote porque va a llover un chorro." Noé, que no le hacía al loco, se puso a construir el barco, que llamó "El Arca del Noé".\nY entonces, empezó a llover como si el cielo se estuviera duchando. ¡Chimpún! ¡Chimpún! El agua no paraba de caer. Noé y sus amigos animales entraron en el arca, uno por uno. ¡Ajá! ¡Uno por uno! El pato, la jirafa, el león... ¡glu, glu, glu!\nDurante cuarenta días y cuarenta noches, llovió sin parar. ¡Cálmate, nube! El agua subió y subió, y el arca flotó como si fuera un barquito de papel. Y todos los animalitos estaban a salvo, sin mojarse.\nFinalmente, el agua bajó y el sol brilló otra vez. Noé soltó una paloma y un chorro de agua salió de su pico, ¡plof! Pero la paloma regresó con una hojita de olivo, y Noé supo que la tierra estaba de vuelta. ¡Que linda palomita, chavos!\nAsí, Noé y sus amigos salieron del arca, secos y contentos, y comenzaron una nueva vida en una tierra limpia y fresca. ¡Ajá! El Diluvio Universal fue como un gran chapuzón para la Tierra, pero al final, ¡todos vivieron felices para siempre, sin mojarse los zapatos! ¡Chusma, chusma, chusma! ¡Qué bonita historia, chavitos!';
      break;

    default:
      parra.textContent = "";
      break;
  }
}
