import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

function Login() {
  const [loggedUser, setLoggedUser] = useLocalStorage("user", null);
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "emre@wit.com.tr",
      password: "12345678",
    },
    mode: "onChange",
  });

  function submitFn(formData) {
    dispatch({ type: "SET_USER", payload: formData });
    setLoggedUser(formData);
    reset();
    toast.success("Welcome back...");
    history.push("/page");
  }

  return (
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h2>Sign In</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <form
          class="login-form"
          id="loginForm"
          novalidate
          onSubmit={handleSubmit(submitFn)}
        >
          <div class="form-group">
            <div class="input-wrapper">
              <input
                type="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Geçerli bir email adresi yazınız...",
                  },
                })}
                placeholder="E-mail"
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div class="form-group">
            <div class="input-wrapper password-wrapper">
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
              />
            </div>
          </div>

          <button type="submit" disabled={!isValid} class="login-btn">
            <span class="btn-text">Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
