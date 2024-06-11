import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

export const LoginForm = ({setloginState}) => {
  return (
    <form action="" className="mt-4">
      <div className="input-group">
        <label htmlFor="email">Correo electrónico</label>
        <Input
          autoFocus
          type="Email"
          name="email"
          id="email"
          placeholder="Ej: jhondoe@gmail.com"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Ej: 33445889"
        />
      </div>
      <div className="mt-8 w-full flex justify-center align-middle text-center">
      <Link to={"/inicio"} className="w-full uppercase bg-primary p-3 rounded-md text-white" type="submit">
        Iniciar sesión
      </Link>
      </div>
      <div className="flex mt-8">
        <div className="flex items-center space-x-2 w-2/5">
          <Checkbox id="recuerdame" />
          <label htmlFor="recuerdame">Recuerdame</label>
        </div>
        <div className="flex justify-end w-3/5">
          <span onClick={() => setloginState("forgot")} className="text-blue-500 font-semibold hover:text-blue-300 cursor-pointer">
            Olvidé mi contraseña
          </span>
        </div>
      </div>
    </form>
  );
};
