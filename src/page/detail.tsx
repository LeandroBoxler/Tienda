import { ButtonAmount } from "../components/buttonAmount";
import { useState } from "react";

export const Detail = () => {
  const price: number = 17000;

  const [valorContador, setValorContador] = useState<number>(1);
  const recibirValorContador = (nuevoValor: number) => {
    setValorContador(nuevoValor); // Actualiza el valor del contador en el componente padre
  };

  return (
    <main className="flex justify-between flex-wrap p-4 text-2xl">
      <div className="w-1/2 p-6">
        <img
          className="w-full"
          src="./img/340341-3359c763f08b338b2b15680466868435-1024-1024.webp"
          alt=""
        />
      </div>
      <section className="w-1/2 space-y-10">
        <h1 className="text-4xl font-bold">EL NOMBRE DEL PRODUCTO</h1>

        <p>6 unidades por stock</p>
        <p>precio {price * valorContador}</p>
        <p>descuento</p>
        <ButtonAmount enviarValorAlPadre={recibirValorContador}></ButtonAmount>
        <div className="text-">
          <p>sabores</p>

          <a href="">sin azucar</a>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg ">
          ENVIAR PRODUCTO
        </button>
      </section>
    </main>
  );
};
