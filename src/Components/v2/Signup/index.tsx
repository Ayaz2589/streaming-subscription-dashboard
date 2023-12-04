import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Card } from "..";
import { AppLogo } from "../../../svg";
import { useAuth } from "../../../context";
import { useAxios } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import useMediaQuery from "@mui/material/useMediaQuery";

interface FormValues {
  email: string;
  password: string;
  passwordMatch: string;
}

const SignupInput = () => {
  const { handleSubmit, register, formState } = useForm<FormValues>();
  const { errors } = formState;
  const { setAuth } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (data: FormValues) => {
    const { email, password, passwordMatch } = data;
    if (
      email &&
      password &&
      password === passwordMatch &&
      Object.keys(errors).length === 0
    ) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "/api/dashboardv2/auth/signup",
          JSON.stringify(data)
        );
        const { accessToken, refreshToken } = response.data;
        setAuth({ accessToken, refreshToken, email, password });
        setIsLoading(false);
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
            Sign up
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
            <TextField
              sx={{ width: "80%", alignSelf: "center" }}
              label="Password Again"
              variant="outlined"
              type="password"
              {...register("passwordMatch", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8 charcters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <LoadingButton
              loading={isLoading}
              variant="contained"
              type="submit"
              size="large"
              disabled={false}
              sx={{ width: "50%", alignSelf: "center" }}
            >
              Signup
            </LoadingButton>
            <Link href="/auth/login" underline="hover">
              Already have an account? Login
            </Link>
          </Box>
        </Box>
      </Card>
    </form>
  );

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
      <Box sx={{ height: "94vh" }}>
        <Card sx={{ margin: "1rem", height: "inherit", display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6rem",
              width: "100%",
              marginTop: "5rem",
            }}
          >
            <Typography variant="h3" sx={{ marginBottom: "0rem" }}>
              Sign up
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
                <TextField
                  sx={{ width: "80%", alignSelf: "center" }}
                  label="Password Again"
                  variant="outlined"
                  type="password"
                  {...register("passwordMatch", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be atleast 8 charcters",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Box>
              <LoadingButton
                loading={isLoading}
                variant="contained"
                type="submit"
                size="large"
                disabled={false}
                sx={{ width: "50%", alignSelf: "center" }}
              >
                Signup
              </LoadingButton>
              <Link href="/auth/login" underline="hover">
                Already have an account? Login
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </form>
  );
};

const Signup = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  const matches = useMediaQuery("(min-width:950px)");
  useEffect(() => updateCurrentSection("Authentication"), []);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url(../../../public/images/login-image.png)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={0} md={8} lg={10}>
          {matches ? <AppLogo /> : null}
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <SignupInput />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
