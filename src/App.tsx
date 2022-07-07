import { GenderForm } from "./components/GenderForm";
import { IFormControls } from "./components/GenderForm/gender-form";
import { Message } from "./components/Message";
import { useHttpPost } from "./services/api/useHttpPost";

function App() {
  const { method, response, statusText, statusType } = useHttpPost("/api/data");

  const handleSubmit = async (e: IFormControls) => {
    await method();
    console.log("RESPONSE", response);
  };

  return (
    <div className="App">
      <GenderForm onSubmit={handleSubmit} />

      {statusText && <Message message={statusText} type={statusType} />}
    </div>
  );
}

export default App;
