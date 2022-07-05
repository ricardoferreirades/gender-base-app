import { Label, Input } from "../GenderForm/styles";
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
      {!!error && <div data-testid="error-message">{error}</div>}
    </div>
  );
}
