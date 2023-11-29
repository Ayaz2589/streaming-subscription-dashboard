import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import axios from "../../../api/axios";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, register, formState } = useForm<FormValues>();
  const { errors } = formState;

  const handleSubmitForm = async (data: FormValues) => {
    const { email, password } = data;
    if (email && password && Object.keys(errors).length === 0) {
      console.log("Login", JSON.stringify(data));
      try {
        const response = await axios.post(
          "/api/dashboardv2/auth/login",
          JSON.stringify(data)
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
      <Stack>
        <Typography variant="h1">Authentication</Typography>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          {...register("email", {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            required: "Email is required",
            minLength: 4,
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be atleast 8 charcters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button variant="contained" type="submit" disabled={false}>
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default Login;
