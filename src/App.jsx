import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./Components/userForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: { background: "blue", color: "white" }, 
        }}
        
      />

      <UserForm />
    </>
  );
}

export default App;
