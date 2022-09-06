
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowRight } from 'react-icons/md';
import NightImage from "../NightImage/NightImage";

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

const collectionDining = [
    {
        id: 1,
        place: '12 Places',
        title: 'Live Sports Screenings',
        cover: 'https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg',
    },
    {
        id: 2,
        place: '12 Places',
        title: 'Drink',
        cover: 'https://media.istockphoto.com/photos/two-men-clinking-glasses-of-whiskey-drink-alcohol-beverage-together-picture-id1215644606?s=2048x2048',
    },
    {
        id: 3,
        place: '12 Places',
        title: 'Veggie Friendly',
        cover: 'https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg',
    },
    {
        id: 4,
        place: '12 Places',
        title: 'Trending This Week',
       cover: '	https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg',
    },
    {
       id: 5,
       place: '12 Places',
       title: 'Outdoor Seating',
       cover: '	https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg',
    },
    {
       id: 6,
       place: '12 Places',
       title: 'Best Pizza Places In Town',
       cover: '	https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg',
    },
    {
       id: 7,
       place: '12 Places',
       title: 'Perty',
       cover: '	https://media.istockphoto.com/photos/nightclub-party-with-confetti-picture-id661151102?s=612x612 ',
    },

  ]
   
  function CollectionNight() {



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
                      
                      {collectionDining?.map((item) => {
                          return <div>
                              <NightImage item={item} key={item.id}/>
                          </div>
                      })}
  
                  </Carousel>
  
          </div>
  
          </div>
  
      </>
  
    )
  
  }
  
  export default CollectionNight