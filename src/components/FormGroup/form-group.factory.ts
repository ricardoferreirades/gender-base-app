import { Factory, IFactory } from "rosie";
import { IFormGroup } from "./form-group";

export const FormGroupFactory: IFactory<IFormGroup> =
  new Factory<IFormGroup>().attrs({
    label: "Form Group Label",
    id: "input",
    handleChange: function () {},
    error: "",
  });
