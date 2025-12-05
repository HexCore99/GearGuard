import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import EquipmentList from "./components/EquipmentList";
import Temp from "./components/Temp";
import MyRentals from "./pages/MyRentals";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="my-rentals" element={<MyRentals />} />
          <Route path="equipment" element={<EquipmentList />} />
          <Route path="signIn" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
