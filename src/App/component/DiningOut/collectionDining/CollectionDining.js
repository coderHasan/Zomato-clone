import DiningImage from "./DiningImage/DiningImage"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowRight } from 'react-icons/md';
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

const collectionList = [
    {
        id: 1,
        place: '12 Places',
        title: 'Live Sports Screenings',
        cover: 'https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg',
    },
    {
        id: 2,
        place: '12 Places',
        title: 'Newly Opened',
        cover: 'https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg',
    },
    {
        id: 3,
        place: '12 Places',
        title: 'Veggie Friendly',
        cover: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        id: 4,
        place: '12 Places',
        title: 'Trending This Week',
       cover: '	https://b.zmtcdn.com/data/collections/83fed288b6d32c932b7d3a0034c4f947_1625650348.png',
    },
    {
       id: 5,
       place: '12 Places',
       title: 'Outdoor Seating',
       cover: '	https://b.zmtcdn.com/data/collections/b1d388518012c80696487c08ca08e325_1582201041.jpg',
    },
    {
       id: 6,
       place: '12 Places',
       title: 'Best Pizza Places In Town',
       cover: '	https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg',
    },
    {
       id: 7,
       place: '12 Places',
       title: 'Brilliant Biryanis',
       cover: '	https://b.zmtcdn.com/data/collections/6398cf5475ba51e532003912a8151436_1616403332.jpg ',
    },

  ]
   

function CollectionDining() {



  return (

    <>
    
        <div className="">

            <h1 className="text-3xl mt-5 mb-8">Collections</h1>

            <div className="flex justify-between items-center mb-3">
                <p className="text-gray-500">Explore curated lists of top restaurants, cafes, pubs, and bars in Dubai, based on trends</p>
                <span className="flex items-center text-red-500">All Collections in Bangladesh <p><MdArrowRight/></p> </span>
            </div>

            <div>

                <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                
                >
                    
                    {collectionList?.map((item) => {
                        return <div>
                            <DiningImage item={item} key={item.id}/>
                        </div>
                    })}

                </Carousel>

        </div>

        </div>

    </>

  )

}

export default CollectionDining