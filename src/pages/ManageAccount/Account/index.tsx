import React, { useState } from "react";
import Breadcrumb from "../../../componets/shared/Breadcrumbs/indext";
import Button from "../../../componets/shared/Button";
import { Add, Edit2, ShieldSecurity, Trash, User } from "iconsax-react";
import PopupAdd from "../../../componets/shared/Poppup/Add";
import { PasswordInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const ManageAccount = () => {
  const [openAdd, setOpenAddModal] = useState(false);

  const addForm = useForm({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      username: (value) =>
        value !== "" ? null : "Bạn chưa nhập tên tài khoản ",
      password: (value) => (value !== "" ? null : "Bạn chưa nhập tên password"),
      confirmPassword: (value: string, values: any) =>
        value.trim().length > 0 && value === values.password
          ? null
          : "Mật khẩu chưa khớp",
    },
  });

  const handleCreateAccount = (values: any) => {
    console.log(values);
  };

  return (
    <>
      {" "}
      <div className="flex">
        <Breadcrumb />
        <Button
          className="m-4 flex justify-center items-center px-4 py-1 text-sm"
          onClick={() => {
            setOpenAddModal(true);
          }}
        >
          <Add size="32" color="#FFF" variant="Outline" />
          <p className="text-white">Thêm mới</p>
        </Button>
      </div>
      <PopupAdd
        opened={openAdd}
        onClose={() => setOpenAddModal(false)}
        size={700}
        title={"tài khoản"}
      >
        <form
          onSubmit={addForm.onSubmit((values) => handleCreateAccount(values))}
        >
          <div className="flex w-full flex-wrap px-12">
            <div className="w-1/2">
              <TextInput
                {...addForm.getInputProps("username")}
                className="mt-4 mx-2"
                type="text"
                placeholder="Email"
                radius={10}
                size="md"
                icon={<User size="20" color="currentColor" variant="Bold" />}
              />
            </div>
            <div className="w-1/2">
              <PasswordInput
                {...addForm.getInputProps("password")}
                className="mt-4 mx-2"
                placeholder="Mật khẩu"
                radius={10}
                size="md"
                icon={
                  <ShieldSecurity
                    size="20"
                    color="currentColor"
                    variant="Bold"
                  />
                }
              />
            </div>
            <div className="w-full">
              <PasswordInput
                {...addForm.getInputProps("confirmPassword")}
                className="mt-4 mx-2"
                placeholder="Xác nhận mật khẩu"
                radius={10}
                size="md"
                icon={
                  <ShieldSecurity
                    size="20"
                    color="currentColor"
                    variant="Bold"
                  />
                }
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 mr-4">
            <Button type="submit">Tạo mới</Button>
            <Button
              className="m-4"
              variant="outline"
              onClick={() => setOpenAddModal(false)}
            >
              Hủy
            </Button>
          </div>
        </form>
      </PopupAdd>
    </>
  );
};

export default ManageAccount;
