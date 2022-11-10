// import { useDispatch } from "react-redux";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
// import { loginRequest } from "api";
import Logo from "../../assets/logo.png";

const SignIn = () => {
  // const dispatch = useDispatch();
  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (value.length > 1 ? null : "Vui lòng nhập email"),
      password: (value) => (value.length > 1 ? null : "Vui lòng nhập passWord"),
    },
  });
  const handleLogin = (formValues: any) => {
    // dispatch(loginRequest(formValues));
  };
  return (
    <>
      <div className="h-full w-full flex bg-[#F8F9FF]">
        <div className="w-4/5 bg-ct-primary">
          <div className="h-full flex justify-center flex-col">
            <img className="mx-auto w-100" src={Logo} alt="" />
          </div>
        </div>
        <div className="flex  w-full h-full justify-center items-center">
          <form
            className="bg-white w-fit h-fit p-20"
            onSubmit={loginForm.onSubmit((values: any) => handleLogin(values))}
          >
            <p className="text-2xl uppercase font-bold mb-4">Đăng Nhập</p>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black"
                htmlFor="grid-password"
              >
                Tài khoản
              </label>
              <TextInput
                className="w-[400px]"
                type="email"
                placeholder="your@hocmai.com"
                {...loginForm.getInputProps("email")}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black"
                htmlFor="grid-password"
              >
                Mật khẩu
              </label>
              <TextInput
                type="password"
                placeholder="Mật khẩu"
                {...loginForm.getInputProps("password")}
              />
            </div>
            <div className="text-center mt-6">
              <Button
                className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-10 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-fit ease-linear transition-all duration-150"
                type="submit"
              >
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
