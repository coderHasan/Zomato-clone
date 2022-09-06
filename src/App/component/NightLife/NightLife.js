import Filters from "../DiningOut/Filter/Filter"
import ExportDining from "../ExportDiningDection"
import { BiSliderAlt } from 'react-icons/bi';
import { TbSortDescending2 } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import CollectionNight from "./CollectionNight/CollectionNight";
const delivaryFilters = [

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
 
  {
    id: 7,
    title: 'Cuisines',
    icon: <IoIosArrowDown /> ,
  },
 
  {
    id: 8,
    title: 'Cafes',
  },
 
  {
    id: 9,
    title: 'Open Now',
  },
 

]


function NightLife() {
  return (

    <div className="container mx-auto ">
       
        <CollectionNight />
        <div>
            <Filters filterList={delivaryFilters}/>
        </div>
        <ExportDining />
    </div>

  )
}

export default NightLife