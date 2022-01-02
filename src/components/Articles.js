import "../styles/Articles.scss";
const Articles = (props) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleCollapsable(ev.currentTarget.id);
  };
  return (
    <>
      <section className="main_section">
        <h2 className="main_title">¿Que son? </h2>
        <article className="main_text">
          El lince ibérico (Lynx pardinus) es una especie de mamífero carnívoro
          de la familia Felidae, endémico de la península ibérica, conocidos por
          su recuperación tras haber estado en peligro de extinción. En 2013 se
          calculaba que solo quedaban dos poblaciones en Andalucía aisladas
          entre sí con un total de algo más de trescientos individuos en
          aumento,​ más otra en los Montes de Toledo de unos quince individuos y
          por ello escasamente viable, lo que lo convierte en la especie de
          felinos más amenazada del mundo. ​
          <button id="collapsable1" onClick={handleClick}>
            Leer más
          </button>
          <div className={`container_div ${props.collapsable1}`}>
            En el año 2018 se estimó una población de seiscientos ochenta y seis
            ejemplares en libertad distribuidos principalmente por Andalucía (en
            Parque Nacional y Natural de Doñana, en Sierra de Andújar, Parque
            natural de la Sierra de Cardeña y Montoro en Córdoba y Sierra de
            Cazorla), en Castilla-La Mancha (en los Montes de Toledo),
            Extremadura y Portugal (Parque natural del Valle del Guadiana)
          </div>
        </article>
      </section>
      <section className="main_section">
        <h2 className="main_title">Descripción</h2>
        <article className="main_text">
          Es un felino de aspecto grácil, con patas largas y una cola corta con
          una borla negra en el extremo que suele mantener erguida batiéndola en
          momentos de peligro o excitación. Sus características orejas
          puntiagudas están terminadas en un pincel de pelos negros rígidos que
          favorece su camuflaje al descomponer la redonda silueta de su cabeza.
          ​
          <button id="collapsable2" onClick={handleClick}>
            Leer más
          </button>
          <div className={`container_div ${props.collapsable2}`}>
            También son características las patillas que cuelgan de sus
            mejillas. Aparecen a partir del año de vida, cuando apenas cuelgan
            por debajo de la barbilla y aumentan de tamaño con la edad. Los
            machos tienen las patillas y los pinceles negros y más largos que
            las hembras.
          </div>
        </article>
      </section>
      <section className="main_section">
        <h2 className="main_title">Distribución</h2>
        <article className="main_text">
          ​En el año 2006 los únicos núcleos con presencia de reproducción
          segura de la especie se limitaban a Sierra Morena, en concreto el
          Parque natural de la Sierra de Andújar (que es la principal población
          de lince ibérico que hay en el mundo), el Parque natural de la Sierra
          de Cardeña y Montoro, y el parque nacional y natural de Doñana y su
          entorno. Podría haber poblaciones muy reducidas en otras comarcas, con
          datos de presencia reciente en el suroeste de Madrid, Montes de
          Toledo, sureste de Ciudad Real y en la Sierra de Alcaraz, donde se han
          localizado al menos quince ejemplares distintos mediante fototrampeo:
          tres hembras adultas, dos machos adultos, cuatro subadultos (dos
          machos y dos hembras) y seis cachorros
          <button id="collapsable3" onClick={handleClick}>
            Leer más
          </button>
          <div className={`container_div ${props.collapsable3}`}>
            Tras décadas de investigación para su cría en cautividad y
            reintroducción en el medio natural financiado mediante fondos a
            cargo del Programa LIFE europeo, el censo realizado en 2018 estimó
            un incremento de la población de lince ibérico en casi setecientos
            ejemplares distribuidos en una superficie era de 3.064 km²
            repartidos por Andalucía, Extremadura, Castilla-La Mancha y el sur
            de Portugal.​
          </div>
        </article>
      </section>
    </>
  );
};

export default Articles;
