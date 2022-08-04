
import { AuthProvider } from "./context/AuthContext";
import Pages from "./pages/Pages";

function App() {
  return (
    <AuthProvider>
      <div className="App">
       
          <Pages />

      </div>
    </AuthProvider>
  );
}

export default App;
