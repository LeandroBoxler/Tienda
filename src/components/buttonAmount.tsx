import { useState } from "react"

interface ContadorProps {
    enviarValorAlPadre: (valor: number) => void;
  }


export const ButtonAmount: React.FC<ContadorProps> = ({ enviarValorAlPadre })  => {
    const [accountant, setAccountant] = useState<number>(1)
    const decrement = ()=>{
        if (accountant >1 ) {
            const nuevoValor = accountant - 1;
            setAccountant(accountant - 1)
            enviarValorAlPadre(nuevoValor);
                    
        }
    }
    const increment = ()=>{
        setAccountant(accountant + 1)
        const nuevoValor = accountant + 1;   
        enviarValorAlPadre(nuevoValor);
    }

  return (
    <div className="flex gap-2 grid-cols-3">
        <button onClick={decrement} className="flex items-center justify-center px-4 py-1 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-200">-</button>
        <small>{accountant}</small>
        <button onClick={increment} className="flex items-center justify-center px-4 py-1 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-200">+</button>

    </div>
  )
}
