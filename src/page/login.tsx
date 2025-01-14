import { Input } from "../components/input";

export const Login = () => {
  return (
    <section>
      <form action="">
        <div>
          <label htmlFor="login">Nombre de usuario</label>
          <Input type="text" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <Input type="password" />
        </div>
      </form>
    </section>
  );
};
