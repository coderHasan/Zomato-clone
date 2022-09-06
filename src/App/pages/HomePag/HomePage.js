import { useState } from "react"
import Delivery from "../../component/Delivery/Delivery";
import Dining from "../../component/DiningOut/DiningOut";
import Header from "../../component/Header/Header"
import NightLife from "../../component/NightLife/NightLife";
import TabOption from "../../component/TabOption/TabOption"


function HomePage() {

  const [activeTab, setActiveTab] = useState("Delivery");

  return (

   <div>
       <Header />
      <TabOption
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {getCurrentScreen(activeTab)}

     <div className="text-center my-5 text-lg">
        <h1>Build with By <a className="font  text-xl font-semibold" href="https://www.linkedin.com/in/sk-mehedi-hasan-642659217/">Mehedi Hasan</a></h1>
     </div> 
   </div>

  )
  
}

const getCurrentScreen = (tab)=>{

    switch (tab){
        case "Delivery" : return <Delivery />;
        case 'Dining Out' : return <Dining />;
        case 'Nightlife' : return <NightLife />;
        default : return <Delivery />
    }

}

export default HomePage