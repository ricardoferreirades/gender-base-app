import { useEffect, useState } from "react";
import { GenderForm } from "./components/GenderForm";
import { IFormControls } from "./components/GenderForm/gender-form";
import { Message } from "./components/Message";
import { useHttpPost } from "./services/api/useHttpPost";
import "./style.css";

function App() {
  const { method, statusText, statusType } = useHttpPost("/api/data");
  const [resetForm, setResetForm] = useState<boolean>(false);
  const handleSubmit = async (e: IFormControls) => {
    await method();
  };

  useEffect(() => {
    setResetForm(statusType === "success");
  }, [statusType]);

  return (
    <div className="App">
      <GenderForm onSubmit={handleSubmit} reset={resetForm} />

      {statusText && <Message message={statusText} type={statusType} />}
    </div>
  );
}

export default App;
