import Filter from "../Filter"
import { BiSliderAlt } from 'react-icons/bi';
import { TbSortDescending2 } from 'react-icons/tb';
import Colection from "./colection/Colection";
import TopBrand from "./TopBrand/TopBrand";
import ExportSection from "../ExportSection/ExportSection";

const delivaryFilter = [

    {
      id: 1,
      icon: <BiSliderAlt />,
      title: 'Filters',
    },
    {
      id: 2,
      title: 'Rating: 4.0+',
    },
    {
      id: 3,
      title: 'Safe and Hygienic',
    },
    {
      id: 4,
      title: 'Pure Veg',
    },
    {
      id: 5,
      icon: <TbSortDescending2 />,
      title: 'Delivery Time',
    },
    {
      id: 6,
      title: 'Great Offers',
    },
   

]

function Delivary() {

  return (

    <div className="container mx-auto">
      <div>
          <Filter filterLis={delivaryFilter}/>
      </div>
        <Colection />
        <TopBrand />
        <ExportSection />
    </div>

  )

}

export default Delivary