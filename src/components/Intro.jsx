import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Toma El Control de <span className="accent">Tu Dinero</span>
        </h1>
        <p>
          Crea un presupuesto para tus compras de forma rápida y sencilla.
          <br></br>
          Los datos que ingreses quedan almacenados en la caché de tu dispositivo, ya que no hacemos uso de ellos :)
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="¿Cómo te llamas?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Crear una cuenta</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro