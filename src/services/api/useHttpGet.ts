import { useState } from "react";
import { HTTPResponseTypes } from "../../@types/http-response.type";
import { MessageType } from "../../components/Message";
import { getAllFavorites } from "./gender-service";

/**
 * This is a hook to perform an HTTP GET request.
 * @param path the route to be accessed by the api
 * @returns the request status information and the response object
 */
export function useHttpGet(path: string): {
  method: () => Promise<void>;
  response?: any;
  statusText?: string;
  statusType?: MessageType;
} {
  const [statusText, setStatusText] = useState("");
  const [statusType, setStatusType] = useState<MessageType>();
  const [response, setResponse] = useState("");

  const method = async <T>(): Promise<void> => {
    setStatusText(HTTPResponseTypes.LOADING);
    setStatusType("default");

    try {
      const result = await getAllFavorites<T | any>(path);
      console.log("RESULT", result);
      setStatusText(result.statusText);
      setResponse(result.data);
      setStatusType("success");
    } catch (e: any) {
      const { statusText } = e.response;
      setStatusText(statusText);
      setStatusType("error");
    }
  };
  return { method, response, statusText, statusType };
}
