/*Self Closing tags = etiquetas que se cierran en si misma es porque no vamos a poner contenido en ellas
Las componentes en react son funciones que pueden retornar html</p>
Los componenetes en react siempre deben emepzar con mayuscula*/
export function Saludar({ title, user = "default" }) {
  // const name = "kev";
  // return <h1>{name ? "Eres Kevin" : "No eres Kevin :o"}</h1>

  /*function add(x, y) {
    return x + y;
  }*/

  /*const user = {
    firstName: "Kevin",
    secondName: "Cotes",
  };*/

  /*React para mostrar elementos complejos debemos convertimos en un string
    return <h3>{ JSON.stringify(user) }</h3>
    return <div>
    <h2>{user.firstName}</h2>
    <p>{user.secondName}</p>
    </div>*/

  console.log(title);

  return (
    /*<>
      <h3>{add(20, 10)}</h3>
    </>*/
    <>
      <h2>Componente {title} </h2>
      <h3>usuario: {user}</h3>
    </>
  );
}

export function UserPlayer() {
  return <h2>Soy un Jugar pro</h2>;
}
