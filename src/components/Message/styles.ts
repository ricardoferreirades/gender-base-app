import styled from "styled-components";
import { MessageType } from "../Message";

export const MessageContainer = styled.div<{ type: MessageType }>`
  color: ${({ type }) =>
    type === "success" ? "green" : type === "error" ? "red" : "gray"};
`;
