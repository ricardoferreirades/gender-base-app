import { useEffect, useState } from "react";
import { GenderForm } from "./components/GenderForm";
import { IFormControls } from "./components/GenderForm/gender-form";
import { Message } from "./components/Message";
import { useHttpGet, useHttpPost } from "./services/api/useHttpPost";
import { GlobalStyle } from "./styles/global";

function App() {
  const { method, statusText, statusType } = useHttpPost("/api/data");
  const { method: getMethod, response } = useHttpGet("/api/data");
  const [resetForm, setResetForm] = useState<boolean>(false);
  const handleSubmit = async (e: IFormControls) => {
    await method<IFormControls>(e);
  };

  useEffect(() => {
    setResetForm(statusType === "success");
    getMethod();
  }, [statusType]);

  return (
    <div className="App">
      <GlobalStyle />
      <div className="form-area">
        <GenderForm onSubmit={handleSubmit} reset={resetForm} />
        {statusText && <Message message={statusText} type={statusType} />}
      </div>

      <br />

      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Gender</td>
            <td>Favorite Singer</td>
            <td>Favorite Book</td>
            <td>Favorite Sport</td>
          </tr>
        </thead>

        <tbody>
          {response?.data?.map((item: IFormControls) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item["favorite-singer"]}</td>
              <td>{item["favorite-book"]}</td>
              <td>{item["favorite-sport"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
