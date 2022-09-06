import FilterItems from "./FilterItems/FilterItems"


function Filters({filterList}) {
  return (
    <div>
        <div className="py-[24px] flex flex-wrap">{filterList?.map((f) => {

        return <FilterItems filters={f} key={f.id} />

        })}</div>

    </div>
  )
}

export default Filters