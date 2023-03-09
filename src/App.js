
import {Route, Routes} from 'react-router-dom'
// import { Header } from './Components/Layouts/Header/Header';
// import { Header } from "./components/Layouts/Header/Header";

import { Inicio } from './Components/Page/Inicio/Inicio';



function App() {

  return (
    <div>
      {/* <Header/> */}
      {/* <hr></hr> */}
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="*" element="Not Found"></Route>
      </Routes>
    </div>
  )
}

export default App;