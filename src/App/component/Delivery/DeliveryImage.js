

function DeliveryImage({item}) {

    return (

        <div>

            <div className="h-[190px] w-[260px] bg-slate-50 rounded-lg">
                 <img className="h-full rounded-lg object-cover" src={item.cover} alt="" />
            </div>

            <div className="text-lg overflow-hidden text-ellipsis mt-2">
                {item.title}
            </div>

        </div>


  )

}

export default DeliveryImage