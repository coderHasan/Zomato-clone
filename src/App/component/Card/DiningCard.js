

import { AiTwotoneStar } from 'react-icons/ai';
import { dining } from "../../../data/Dining";

function DiningCard() {

  return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {dining?.map((e) => {
            return <div>
                
               <div className="border1 p-3 rounded-lg">

                    <div className="relative ">
                        <div className="h-[248px] ">
                            <img className="rounded-xl h-full" src={e.image} alt="" />
                        </div>

                        <div>
                            <span className="absolute bottom-10 text-sm text-white rounded-r-sm bg-[#fc3c62] px-2 left-0">{e.pro}</span>
                        </div>

                        <div className="absolute bottom-3 left-0 flex w-full justify-between items-center">
                            <span className="bg-[#256fef] rounded-r-sm text-white text-sm px-2">20% OFF</span>
                            <span className="mr-3 text-[13px] py-[2px] px-[5px] rounded-md bg-[#f2f1f1] text-black">{e.time}</span>
                        </div>

                    </div>

                    <div className="flex justify-between items-center my-3">
                        <span className="text-lg font-semibold">{e.name}</span>
                        <span className="flex items-center bg-[#24963f] text-[#fff] py-[2px] text-sm rounded-md px-2">{e.rated} <AiTwotoneStar size={15} color={'#fff'}/></span>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                        <span>North Indian,Chinese,Fast Fo... </span>
                        <span>{e.price}</span>
                    </div>
                    <div className="h-[1px] bg-gray-300 mb-4"></div>
                    <div className="flex text-[12px] text-gray-500 w-[230px] items-center">

                        <div className="w-5 mr-2">
                            <img src={e.subImage} alt="" />
                        </div>
                        <span>8675+ orders placed from here recently</span>

                    </div>

                </div>

            </div>
        })}

    </div>

  )

}

export default DiningCard