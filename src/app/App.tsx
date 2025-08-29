import { QueryProvider } from "./providers/query-provider"
import { Router } from "./providers/router"

function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  )
}

export default App
