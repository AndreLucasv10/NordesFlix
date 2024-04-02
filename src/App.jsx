import { GlobalStorage } from './GlobalContext'
import MainRoutes from './router'

const App = () => {
  return (
    <GlobalStorage>
      <MainRoutes />
    </GlobalStorage>
  )
  
}

export default App