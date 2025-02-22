import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { isValidCpf } from "../../helpers/cpf";

// const formSchema = z.object({
//   name: z.string().trim().min(1, {
//     message: "Nome é obrigatório",
//   }),
//   cpf: z.string().refine((cpf) => isValidCpf(cpf), { message: "CPF inválido" }),
// });

const FinishOrderButton = () => {
  const {} = useForm();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="rounded-full w-full">Finalizar pedido</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Finalizar Pedido</DrawerTitle>
          <DrawerDescription>
            Insira suas informações abaixo para finalizar o seu pedido
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Finalizar</Button>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FinishOrderButton;
