// import './App.css'
// npm install react-router-dom

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Time } from "./pages/Time";

function App() {
  
    return (
      <>  
        <Router>
          <Header />
          <Routes>
            {/* Página inicial só com Header e Footer*/}
              <Route path="/" element={<></>} />
              <Route path="/time" element={<Time/>}/>
           </Routes>
          <Footer />
       </Router>
    </>
  )
}

export default App
