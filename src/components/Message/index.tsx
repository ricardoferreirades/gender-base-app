import { MessageContainer } from "./styles";

export type MessageType = "success" | "error" | "default";
export interface IMessage {
  message: string;
  type?: MessageType | undefined;
}
export function Message({ message, type = "success" }: IMessage) {
  return <MessageContainer type={type}>{message}</MessageContainer>;
}
