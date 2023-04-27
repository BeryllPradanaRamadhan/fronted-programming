import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import Navbar from "../components/Navbar/navbar";
import AddFormCovid from "../components/AddFormCovid/addformcovid";
import Card from "../components/Card/card";
import data from "../utils/constants/provinces";
import Provinsi from "../components/Provinsi/provinsi";
import { useState } from "react";


function Main() {
  const [dt_provinsi, setDataProvinsi] = useState(data);
  return (
    <main>
      <Hero />
      <Card />
      <Provinsi dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
      <AddFormCovid dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;