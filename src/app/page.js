import Image from "next/image";
import Baner from "./_Component/Baner";
import ServiceComp from "./_Component/ServiceComp";
import TestimonialComp from "./_Component/TestimonialComp";
import ChooseComp from "./_Component/ChooseComp";
import Services from "./_Component/Services";

export default function Home() {
  return (
  <div >
       <Baner/>
     <Services/>
     <ServiceComp/>
     <TestimonialComp/>
     <ChooseComp/>
  </div>
  );
}
