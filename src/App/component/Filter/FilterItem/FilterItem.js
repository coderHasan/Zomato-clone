

function FilterItem({filter}) {

  return (

    <div className=" p-[8px] flex mr-2  bg-white border rounded-lg text-gray-400 text-sm items-center">
        {filter.icon && filter.icon }
        <div className="ml-1">{filter.title}</div>
    </div> 

  )

}

export default FilterItem