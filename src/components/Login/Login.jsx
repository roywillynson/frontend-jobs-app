import Image from 'next/image';
import useForm from 'helpers/hooks/useForm';
import React from 'components/Buttons/ButtonGoogle/ButtonGoogle';
import ButtonGoogle from 'components/Buttons/ButtonGoogle/ButtonGoogle';
import ButtonFacebook from 'components/Buttons/ButtonFacebook/ButtonFacebook';

const Login = () => {
  /**
   * @type {import('helpers/hooks/useForm').UseForm}
   */
  const { values, handleInputChange, resetValues } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper-center">
      <div className="box">
        <div className="columns is-gapless">
          <div className="column is-7-desktop is-full-touch">
            <form onSubmit={handleSubmit} className="form-login">
              <div className="field pb-4">
                <h1 className="title has-text-centered">Iniciar Sesion</h1>
              </div>

              <div className="field">
                <div className="control has-icons-left">
                  <input
                    type="text"
                    className="input"
                    placeholder="Email o Usuario"
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left">
                  <input
                    type="password"
                    className="input"
                    placeholder="Contraseña"
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-primary is-fullwidth has-text-weight-bold has-text-white">
                    Login
                  </button>
                </div>
              </div>

              <div className="separator">
                <span>or</span>
              </div>

              <div className="field">
                <div className="control">
                  <ButtonGoogle text="Login with Google" />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <ButtonFacebook text="Login with Facebook" />
                </div>
              </div>
            </form>
          </div>

          <div className="column is-5-desktop is-hidden-touch is-relative has-background-grey-light">
            <Image
              src="/images/search-jobs.jpg"
              alt="Persona en busca de trabajo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
