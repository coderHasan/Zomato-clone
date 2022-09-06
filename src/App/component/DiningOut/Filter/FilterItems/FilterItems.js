

function FilterItems({filters}) {
  return (
    <div>
        
        <div className=" p-[8px] flex mr-2  bg-white border rounded-lg text-gray-400 text-sm items-center">
            {filters.icon && filters.icon }
            <div className="ml-1">{filters.title}</div>
        </div> 

    </div>
  )
}

export default FilterItems