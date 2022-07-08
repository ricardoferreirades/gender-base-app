import { useEffect, useState } from "react";
import { MessageContainer } from "./styles";

export type MessageType = "success" | "error" | "default";
export interface IMessage {
  message: string;
  type?: MessageType | undefined;
}
export function Message({ message, type = "success" }: IMessage) {
  const [visiblity, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(!!message);
  }, [message]);

  const handleClose = () => {
    setVisibility(false);
  };

  return (
    <>
      {visiblity && (
        <MessageContainer type={type}>
          <span className="text">{message}</span>
          <span className="close" onClick={handleClose}>
            X
          </span>
        </MessageContainer>
      )}
    </>
  );
}
