import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { Card } from "..";
import { AppLogo } from "../../../svg";
import { useAuth } from "../../../context";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../../hooks";

interface FormValues {
  email: string;
  password: string;
}

const LoginInput = () => {
  const { handleSubmit, register, formState } = useForm<FormValues>();
  const { errors } = formState;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSubmitForm = async (data: FormValues) => {
    const { email, password } = data;
    if (email && password && Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "/api/dashboardv2/auth/login",
          JSON.stringify(data)
        );
        const { accessToken, refreshToken } = response.data;
        setAuth({ accessToken, refreshToken, email, password });
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
      <Card
        sx={{
          margin: "1rem",
          height: "94vh",
          display: "flex",
          minHeight: "700px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6rem",
            width: "100%",
            margin: "auto 0",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "0rem" }}>
            Welcome Back!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              sx={{ width: "80%", alignSelf: "center" }}
              label="Email"
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
              sx={{ width: "80%", alignSelf: "center" }}
              label="Password"
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
            <Box sx={{ display: "flex", width: "80%", alignSelf: "center" }}>
              <Checkbox />
              <Typography variant="body1" sx={{ alignSelf: "center" }}>
                Remember me
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              size="large"
              disabled={false}
              sx={{ width: "50%", alignSelf: "center" }}
            >
              Login
            </Button>
            <Link href="/auth/signup" underline="hover">
              Don't have an account? Signup
            </Link>
            <Link href="" underline="hover">
              Forgot your password?
            </Link>
          </Box>
        </Box>
      </Card>
    </form>
  );
};

const Login = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  useEffect(() => updateCurrentSection("Authentication"), []);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url(../../../public/images/login-image.png)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={0} sm={4} md={8} lg={10}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "100vh",
            }}
          >
            <AppLogo />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={2}>
          <LoginInput />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
