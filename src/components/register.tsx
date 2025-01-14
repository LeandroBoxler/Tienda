import { Input } from './input'

export const Register = () => {
  return (
    <section>
        <form action="">
            <div>
            <label htmlFor="">Nombre de usuario</label>
            <Input type='text'/>
            </div>
            <div>
            <label htmlFor="">Correo</label>
            <Input type='email'/>
            </div>
            <div>
            <label htmlFor="">Nombre</label>
            <Input type='text'/>
            </div>
            <div>
            <label htmlFor="">Apellido</label>
            <Input type='text'/>
            </div>
            <div>
            <label htmlFor="">Contraseña</label>
            <Input  type='password'/>
            </div>
            <div>
            <label htmlFor="">Confirmar contraseña</label>
            <Input type='password'/>
            <button type='submit'>Enviar</button>
            </div>
        </form>
    </section>
  )
}
