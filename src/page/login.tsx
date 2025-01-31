import { Input } from "../components/input";

export const Login = () => {
  return (
    // <section>
    //   <form action="">
    //     <div>
    //       <label htmlFor="login">Nombre de usuario</label>
    //       <Input type="text" />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Contraseña</label>
    //       <Input type="password" />
    //     </div>
    //   </form>
    // </section>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Inicia sesion turron
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <Input type='email'/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/RecoverPass" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidaste tu password?
                  </a>
                </div>
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
