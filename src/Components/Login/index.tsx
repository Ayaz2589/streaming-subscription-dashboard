import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import { AuthCard, AnimatedAuthPageContainer, Snackbar } from "..";
import { AppLogo } from "../../svg";
import { useNavigate } from "react-router-dom";
import { useBackendService } from "../../hooks";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useError } from "../../context";

interface FormValues {
  email: string;
  password: string;
}

export const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.5 },
  },
  initial: {
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const LoginInput = () => {
  const { handleSubmit, register, formState, setError } = useForm<FormValues>();
  const { errors } = formState;
  const navigate = useNavigate();
  const { authLogin } = useBackendService();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const handleSubmitForm = async (data: FormValues) => {
    const { email, password } = data;
    if (email && password && Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        await authLogin(email, password);
        navigate("/dashboard");
      } catch (error: unknown) {
        //@ts-expect-error AxiosError
        if (error?.response?.data?.error === "User doesn't exists") {
          setError("email", {
            type: "manual",
            message: "User doesn't exists",
          });
        }
      } finally {
        setIsLoading(false);
      }
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
              <Typography
                variant="body1"
                sx={{ alignSelf: "center", color: theme.palette.neutral.main }}
              >
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
            <LoadingButton
              component={motion.button}
              variants={buttonVariants}
              animate="initial"
              whileHover="hover"
              loading={isLoading}
              variant="contained"
              type="submit"
              size="large"
              disabled={false}
              sx={{ width: "50%", alignSelf: "center" }}
            >
              Login
            </LoadingButton>
            <Link href="/auth/signup" underline="hover">
              Don't have an account? Signup
            </Link>
            <Link href="" underline="hover">
              Forgot your password?
            </Link>
          </Box>
        </Box>
      </AuthCard>
    </form>
  );
};

const Login = () => {
  const matches = useMediaQuery("(min-width:950px)");
  const useUltraWideImage = useMediaQuery("(min-width:2000px)");

  const theme = useTheme();
  const isDesktop = useMediaQuery(
    `(min-width:${theme.breakpoints.values.sm}px)`
  );

  const { error, removeError } = useError();

  console.log(error);

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
      <div>
        <Snackbar type={error.type} handleClose={removeError} />
        {isDesktop ? (
          <Grid container spacing={2}>
            <Grid item xs={0} md={8} lg={10}>
              {matches ? <AppLogo /> : null}
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <LoginInput />
            </Grid>
          </Grid>
        ) : (
          <LoginInput />
        )}
      </div>
    </AnimatedAuthPageContainer>
  );
};

export default Login;
