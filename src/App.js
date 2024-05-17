import Header from "./components/header/Header";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import  TourDetails from "./components/TourDetails/TourDetails"




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App