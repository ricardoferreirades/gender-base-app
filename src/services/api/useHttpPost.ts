import axios from "axios";
import { useState } from "react";
import { MessageType } from "../../components/Message";

enum HTTPResponseTypes {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}

export function useHttpPost(path: string): {
  method: () => Promise<void>;
  response: any;
  statusText: string;
  statusType?: MessageType;
} {
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState<MessageType>();
  const [response, setResponse] = useState("");

  const method = async (): Promise<void> => {
    setStatusText(HTTPResponseTypes.LOADING);
    setStatusType("default");

    try {
      const data = await axios.post(path);
      setStatusText(data.statusText);
      setResponse(data.data);
      setStatusType("success");
    } catch (e: any) {
      const { statusText } = e.response;
      setStatusText(statusText);
      setStatusType("error");
    }
  };
  return { method, response, statusText, statusType };
}
