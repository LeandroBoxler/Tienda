import { Input } from "../components/input";

export const Register = () => {
  return (
    
      /* <form action="">
        <div>
          <label htmlFor="">Nombre de usuario</label>
          <Input type="text" />
        </div>
        <div>
          <label htmlFor="">Correo</label>
          <Input type="email" />
        </div>
        <div>
          <label htmlFor="">Nombre</label>
          <Input type="text" />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <Input type="text" />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <Input type="password" />
        </div>
        <div>
          <label htmlFor="">Confirmar contraseña</label>
          <Input type="password" />
          <button type="submit">Enviar</button>
        </div>
      </form> */

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Nombre de usuario
              </label>
              <div className="mt-2">
                <Input type='text'/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <Input type='email'/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <Input type='text'/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <Input type='text'/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                
              </div>
            
              
              <div className="mt-2">
              <Input type='password'/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                 Confirme Password
                </label>
                
              </div>
            
              
              <div className="mt-2">
              <Input type='password'/>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Logear crack
              </button>
            </div>
          </form>

          
        </div>
      </div>
    
  );
};
