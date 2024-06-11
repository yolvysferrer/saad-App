import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const RegisterForm = () => {
  return (
    <form action="" className="mt-4">
      <div className="input-group">
        <label htmlFor="email">Correo electrónico</label>
        <Input type="Email" id="email" placeholder="Ej: jhondoe@gmail.com" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="input-group">
          <label htmlFor="document_id">Número de cédula</label>
          <Input type="Email" id="document_id" placeholder="Ej: 22602761" />
        </div>
        <RadioGroup defaultValue="option-one">
          <div className="flex mt-4 justify-center gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Femenino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Masculino</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <Input type="password" id="password" placeholder="Ej: 33445889" />
        </div>
        <div className="input-group">
          <label htmlFor="repassword">Repita contraseña</label>
          <Input type="password" id="repassword" placeholder="Ej: 33445889" />
        </div>
      </div>
      <Button className="w-full mt-8 uppercase" type="submit">
        Registrarme ahora
      </Button>
    </form>
  );
};
