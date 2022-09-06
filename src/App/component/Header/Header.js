import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Header() {

  return (

    <div className='container mx-auto'>
      
        <div className='flex items-center py-4 justify-between'>

            <div className="w-full sm:w-[140px] h-[27px] mr-[10px]">
            <img  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
            </div>

            <div className='flex items-center w-[60%] h-[54px] shadow1 rounded-lg border px-4           justify-between mr-[7px] sm:mr-10'>

                <div className='flex items-center'>
                  <div className='flex flex-1 mr-2 items-center'>
                    
                    <div className='mr-[8px]'>
                        <HiOutlineLocationMarker
                          size={25}
                          color={"#ff7e8b"}
                        />
                    </div>

                      <div className='text-gray-400'>
                        Bangladesh
                      </div>
                  
                  <div className='ml-3'>
                    <IoMdArrowDropdown/>
                  </div>

                  </div>

                  <div className='h-[20px] border-[0.5px] border-gray-400'></div>
                  <div className='flex-2 flex'>

                      <div className='mx-[12px] text-gray-400'><BiSearchAlt size={25} /></div>
                       <input className='outline-none w-[50%] text-[14px]' type="text"  placeholder='Search for restaurant, cuisine or a dish'/>
                     

                  </div>

                </div>

               
            </div>

            <div className=' flex justify-between items-center sm:w-[15%] w-full'>
                <div className='w-[40px] h-[40px]'>
                    <img className='h-full rounded-full' src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                </div>

                <span className='font-semibold text-[20px]'>Hasan</span>
                <MdKeyboardArrowDown size={25}/>
            </div>

        </div>

    </div>

  )

}

export default Header