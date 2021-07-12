import {useState} from "react";
import Router from 'next/router';
import { apiLogin } from "../api/auth";
import Button from "../components/Button";
import Input from "../components/form/Input";
import useAuthCondition from "../hooks/useAuthCondition";
import updateForm from "../utilities/updateForm";
import doValidations from "../utilities/validate";

const INITIAL_FORM = {
  user: '',
  password: ''
};

const Login = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const { user, password } = form;
    const validations = [
      { name: 'user', value: user, validations: { required: true, length: 10 } },
      { name: 'password', value: password, validations: { required: true } },
    ];
    const validateResult = doValidations(validations);
    if (!validateResult.valid) {
      setErrors(validateResult.errors);
    }
    return validateResult.valid;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const {user, password} = form;
    try {
      await apiLogin(user, password);
      Router.push('/');
    } catch (err) {
      if (err.status === 400) {
        setErrors(err.data)
      } else {
        setErrors({ nonFieldErrors: 'Usuario o contraseña incorrectos' })
      }
    }
  };

  const handleChange = (name, value) => {
    setForm(updateForm(name, value, form));
    setErrors({});
  };

  return (
    <div className="d-flex flex-center vh-100 vw-100 login">
      <div className="w-75 w-md-50 w-lg-25">
        <h1 className="text-center">Iniciar sesión</h1>
        <form className="card" onSubmit={submit}>
          <Input
            name="user"
            placeholder="Ej: usuario123"
            label="Usuario"
            value={form.user}
            onChange={handleChange}
            error={errors.user}
            maxLength={10}
          />
          <Input
            type="password"
            name="password"
            placeholder="**********"
            label="Contraseña"
            value={form.password}
            error={errors.password}
            onChange={handleChange}
          />
          {errors.nonFieldErrors && <small className="invalid-feedback mb-3">{errors.nonFieldErrors}</small>}
          <Button
            type="submit"
            style="primary"
            block
          >
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps = useAuthCondition(false, '/');
export default Login;
