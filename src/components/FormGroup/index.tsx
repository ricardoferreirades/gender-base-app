import { Input } from "../Input";
import { Label } from "../Label";
import { Message } from "../Message";
import { IFormGroup } from "./form-group";

export function FormGroup(props: IFormGroup | any) {
  const {
    label,
    value,
    handleChange,
    error,
    type = "text",
    name,
    id,
  }: IFormGroup = props;

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        error={!!error}
        {...props}
      />
      {!!error && (
        <Message data-testid="error-message" message={error} type="error" />
      )}
    </div>
  );
}
