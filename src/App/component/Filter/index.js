import FilterItem from "./FilterItem/FilterItem"


function Filter({filterLis}) {

  return (

    <div className="py-[24px] flex flex-wrap">{filterLis?.map((f) => {

        return <FilterItem filter={f} key={f.id} />

    })}</div>

  )

}

export default Filter