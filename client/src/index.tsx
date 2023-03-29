import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { ApiProvider } from "./api"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </StrictMode>
)
