import { useForm } from "react-hook-form";

import { Notyf } from "notyf";
import { Link } from "react-router-dom";

const notyf = new Notyf({
    position: {
        x: "left",
        y: "top",
    },
    duration: 9000,
});

export default function SignIn(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const SignUpSubmit = (data) => {
        console.log(data);
        reset({ login: "", pwd: "" });
        notyf.success("successfully login");
    };
    return (
        <div>
            <h3>
                Already don't have an account, <Link to="/signUp">SignUp!</Link>
            </h3>
            <form onSubmit={handleSubmit(SignUpSubmit)}>
                <label htmlFor="login">Login</label>
                <input
                    {...register("login", {
                        required: true,
                        minLength: 3,
                        maxLength: 15,
                    })}
                    type="text"
                />
                {errors.login && (
                    <span className="form__error">{errors.login.type}</span>
                )}
                <label htmlFor="password">Password</label>
                <input
                    {...register("pwd", {
                        required: true,
                        minLength: 5,
                        maxLength: 15,
                    })}
                    type="password"
                />
                {errors.pwd && (
                    <span className="form__error">{errors.pwd.type}</span>
                )}
                <button>Sign Up</button>
            </form>
        </div>
    );
}
