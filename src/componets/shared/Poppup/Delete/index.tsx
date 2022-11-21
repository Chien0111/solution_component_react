import { Modal } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import Button from "../../Button";

interface TypeDeletePopup {
  title: string;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  DeleteData: () => void;
}

const DeletePopup = ({
  title,
  opened,
  setOpened,
  DeleteData,
}: TypeDeletePopup) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={true}
        radius={15}
        classNames={{
          close: "hidden",
        }}
        centered
      >
        <div
          className="flex justify-center"
          style={{ fontSize: 22, fontWeight: "600" }}
        >
          Xác nhận xóa {title}
        </div>
        <div
          className="mt-2 mb-2"
          style={{ textAlign: "center", fontSize: 18 }}
        >
          Bạn có chắc muốn xóa {title} này ?
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex justify-end mr-4">
            <Button
              variant="outline"
              color="#017EFA"
              className="m-4 flex justify-center items-center px-7 py-2 text-sm"
              onClick={() => setOpened(false)}
            >
              Hủy{" "}
            </Button>
          </div>
          <div className="flex justify-start">
            <Button
              color="#017EFA"
              className="m-4 flex justify-center items-center px-7 py-2 text-sm"
              onClick={() => DeleteData()}
            >
              {" "}
              Đồng ý{" "}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeletePopup;
