import { PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Add, Edit2, ShieldSecurity, Trash, User } from "iconsax-react";
import { useEffect, useState } from "react";
import Table from "../../../element/Table";
import Breadcrumb from "../../../shared/Breadcrumbs/indext";
import Button from "../../../shared/Button";
import Pagination from "../../../shared/Pagination";
import PopupAdd from "../../../shared/Poppup/Add";
import DataAccount from "./data";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeletePopup from "../../../shared/Poppup/Delete";

const AccountTemplate = () => {
  const addForm = useForm({
    initialValues: {
      email: "",
      idRole: "",
    },

    validate: {
      email: (value) => (value !== "" ? null : "Bạn chưa nhập tên tài khoản "),
      idRole: (value) => (value !== "" ? null : "Bạn chưa nhập tên vai trò"),
    },
  });

  const [openAdd, setOpenAddModal] = useState<boolean>(false);
  const [openEdit, setOpenEditModal] = useState<boolean>(false);
  const [deleteModal, setDeletedModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listAccount, setListAccount] = useState<any[]>([]);
  const [idAccount, setIdAccount] = useState<string>();
  const [pagination, setPagination] = useState<any>({
    active: 1,
    total: 1,
    pageSize: 10,
  });

  const handleCreateAccount = (values: any) => {
    if (!openEdit) {
      listAccount.push({ ...values, _id: uuid() });
      toast("Thêm tài khoản thành công");
    } else {
      const index = listAccount.findIndex((item: any) => item._id == idAccount);
      listAccount[index] = values;
      toast("Cập nhật tài khoản thành công");
    }
    setOpenAddModal(false);
  };

  const DeleteData = () => {
    const res = listAccount.filter((item: any) => item._id != idAccount);
    setListAccount(res);
    toast("Xoá tài khoản thành công");
    setDeletedModal(false);
  };

  const getDataEdit = (value: string) => {
    setOpenEditModal(true);
    const res = listAccount.find((item: any) => (item.email = value));
    addForm.setFieldValue("email", res.email);
    addForm.setFieldValue("idRole", res.idRole);
    setOpenAddModal(true);
  };

  useEffect(() => {
    setListAccount(DataAccount.data.slice(0, 5));
  }, []);

  const handlePaging = () => {};

  return (
    <>
      {" "}
      <ToastContainer />;
      <div className="flex">
        <Breadcrumb />
        <Button
          className="m-4 flex justify-center items-center px-4 py-1 text-sm "
          onClick={() => {
            setOpenAddModal(true);
            setOpenEditModal(false);
            setIdAccount("");
            addForm.setFieldValue("email", "");
            addForm.setFieldValue("idRole", "");
          }}
        >
          <Add size="32" color="#FFF" variant="Outline" />
          <p className="text-white">Thêm mới</p>
        </Button>
      </div>
      <div>
        <Table
          loading={isLoading}
          dataSource={{
            columns: [
              { title: "Hành động", size: 10 },
              { title: "Mã nhân viên" },
              { title: "Vai trò" },
            ],
            data: listAccount.map((item: any) => {
              return {
                edit: (
                  <div className="flex">
                    <div
                      onClick={() => {
                        getDataEdit(item.email);
                        setIdAccount(item._id);
                      }}
                      className="text-ct-secondary"
                    >
                      <Edit2 size="20" color="currentColor" variant="Bold" />
                    </div>
                    <div
                      style={{ marginLeft: "10px" }}
                      className="mr-2 text-ct-red-300"
                    >
                      <Trash
                        size="20"
                        color="currentColor"
                        variant="Bold"
                        onClick={() => {
                          setDeletedModal(true);
                          setIdAccount(item._id);
                        }}
                      />
                    </div>
                  </div>
                ),
                email: item.email,
                role: (
                  <button className="bg-[#017EFA] p-2 rounded-lg text-white font-medium">
                    {item.idRole}
                  </button>
                ),
              };
            }),
          }}
        />
        <div className="flex justify-end mt-4">
          <Pagination
            handlePaging={handlePaging}
            total={
              pagination.total / pagination.pageSize > 0
                ? Math.ceil(pagination.total / pagination.pageSize)
                : 1
            }
          />
        </div>
      </div>
      <PopupAdd
        opened={openAdd}
        onClose={() => {
          setOpenAddModal(false);
          addForm.setFieldValue("email", "");
          addForm.setFieldValue("idRole", "");
        }}
        size={700}
        title={"tài khoản"}
      >
        <form
          onSubmit={addForm.onSubmit((values) => handleCreateAccount(values))}
        >
          <div className="flex w-full flex-wrap px-12">
            <div className="w-1/2">
              <TextInput
                {...addForm.getInputProps("email")}
                className="mt-4 mx-2"
                type="text"
                placeholder="Email"
                radius={10}
                size="md"
                icon={<User size="20" color="currentColor" variant="Bold" />}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                {...addForm.getInputProps("idRole")}
                className="mt-4 mx-2"
                placeholder="Vai trò"
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
      <DeletePopup
        title="tài khoản"
        opened={deleteModal}
        setOpened={setDeletedModal}
        DeleteData={DeleteData}
      />
    </>
  );
};

export default AccountTemplate;
