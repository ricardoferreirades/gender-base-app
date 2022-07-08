import { ButtonContainer } from "./styles";

export function Button(props: any) {
  return <ButtonContainer disabled={props.disabled} {...props} />;
}
