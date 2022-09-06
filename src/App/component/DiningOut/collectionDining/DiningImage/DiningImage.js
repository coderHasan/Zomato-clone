import { MdArrowRight } from 'react-icons/md';

function DiningImage({item}) {

  return (

    <div>

    <div className="h-[350px] w-[260px] rounded-lg relative overflow-hidden">
         <img className="h-full rounded-lg object-cover" src={item.cover} alt="" />
         
    </div>

    <div className="absolute left-0 top-0 bg-gradient-to-b h-full w-[260px] from-transparent to-[#272626]">
        <div className="absolute left-0 bottom-3 text-white ml-3 ">
            <span className="block ">{item.title}</span>
            <span className='text-sm flex items-center'>{item.place} <p><MdArrowRight size={20}/></p></span>
        </div>
    </div>

</div>

  )

}

export default DiningImage