import Characterlist from './component/Characterlist'
import { ThemeProvider } from './context/ThemeContext'

function App() {


  return (
    <>     
    <ThemeProvider>
        <Characterlist/>
    </ThemeProvider>
    </>
  )
}

export default App
