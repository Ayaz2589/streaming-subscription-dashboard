import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useAxios, usePersistantLogin } from "../../hooks";
import { AuthCard, AnimatedAuthPageContainer } from "..";
import { AppLogo } from "../../svg";
import { Auth, useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

interface FormValues {
  email: string;
  password: string;
  passwordMatch: string;
}

const SignupInput = () => {
  const { handleSubmit, register, formState, setError } = useForm<FormValues>();
  const { errors } = formState;
  const axios = useAxios();
  const { setPersistantLogin } = usePersistantLogin();
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

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
        const auth: Auth = { accessToken, email, password, refreshToken };
        setPersistantLogin(auth);
        setAuth(auth);
        navigate("/dashboard");
      } catch (error: unknown) {
        //@ts-expect-error AxiosError
        if (error?.response?.data?.error === "User already exists") {
          setError("email", {
            type: "manual",
            message: "User already exists",
          });
        }
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (password !== passwordMatch) {
      setError("passwordMatch", {
        type: "manual",
        message: "Passwords do not match",
      });
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
      <AuthCard
        sx={{
          padding: "0rem",
          height: "100vh",
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
          <Typography
            variant="h3"
            sx={{ marginBottom: "0rem", color: theme.palette.neutral.main }}
          >
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
              error={!!errors.passwordMatch}
              helperText={errors.passwordMatch?.message}
            />
            <Typography
              variant="body2"
              sx={{ alignSelf: "center", color: theme.palette.neutral.main }}
            >
              * Fake Email Address will work *
            </Typography>
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
              Sign up
            </LoadingButton>
            <Link href="/auth/login" underline="hover">
              Already have an account? Login
            </Link>
          </Box>
        </Box>
      </AuthCard>
    </form>
  );
};

const Signup = ({
  updateCurrentSection,
}: {
  updateCurrentSection: (value: string) => void;
}) => {
  const matches = useMediaQuery("(min-width:950px)");
  const useUltraWideImage = useMediaQuery("(min-width:2000px)");

  const theme = useTheme();
  const isDesktop = useMediaQuery(
    `(min-width:${theme.breakpoints.values.sm}px)`
  );

  useEffect(() => updateCurrentSection("Authentication"), []);
  return (
    <AnimatedAuthPageContainer
      sx={{
        width: "100%",
        backgroundImage: useUltraWideImage
          ? "url(/images/login-image-ultra-wide.png)"
          : "url(/images/login-image.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {isDesktop ? (
        <Grid container spacing={2}>
          <Grid item xs={0} md={8} lg={10}>
            {matches ? <AppLogo /> : null}
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <SignupInput />
          </Grid>
        </Grid>
      ) : (
        <SignupInput />
      )}
    </AnimatedAuthPageContainer>
  );
};

export default Signup;
