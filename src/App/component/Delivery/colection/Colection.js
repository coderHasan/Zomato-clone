import DeliveryImage from "../DeliveryImage"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4
  }
};

const deliveryItem = [
   {
      id: 1,
      title: 'Pizza',
      cover: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
   },
   {
      id: 2,
      title: 'Burger',
      cover: 'https://media.istockphoto.com/photos/homemade-cheese-smash-burger-picture-id1400656321?s=2048x2048',
   },
   {
      id: 3,
      title: 'Rolls',
      cover: 'https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png',
   },
   {
      id: 4,
      title: 'Cake',
      cover: '	https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png',
   },
   {
      id: 4,
      title: 'Biryani',
      cover: '	https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png',
   },
   {
      id: 5,
      title: 'Chaat',
      cover: '	https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png',
   },
   {
      id: 6,
      title: 'Momos',
      cover: '	https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png ',
   },
   {
      id: 7,
      title: 'Paneer',
      cover: '	https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png ',
   },

]

function Colection() {



  return (

    <section>
        <div >
            <div className="">
                <h1 className="text-3xl font-medium text-[#1c1c1c] mb-[32px]">Eat what makes you happy</h1>
            </div>

                <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                
                >
                    {deliveryItem.map((item)=>{
                        return <div>
                                    <DeliveryImage item={item} key={item.id}/>
                            </div>
                    })}
                </Carousel>

        </div>
    </section>

  )

}

export default Colection