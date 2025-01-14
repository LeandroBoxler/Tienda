
interface typeCards {
  name:string,
  detail:string
  
}

export const Card = ({
  name,
  detail,
  

}:typeCards
) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
{detail}    
</p>
  </div>

    </div>
  )
}
