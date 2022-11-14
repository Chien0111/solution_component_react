import { Modal } from "@mantine/core";
import { Graph } from "iconsax-react";
import React from "react";

const PopupAdd = ({ children, opened, onClose, size, title }: any) => {
  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={() => onClose()}
        radius={20}
        size={size}
        withCloseButton={false}
      >
        <div className="w-full flex items-center mt-4 ml-4">
          <div>
            <h6 className="uppercase bg-[#017EFA] w-min rounded-full p-2 mb-1 text-xs font-semibold">
              <Graph size={20} color="white" />
            </h6>{" "}
          </div>
          <div>
            {" "}
            <p className="font-bold text-xl ml-4 mb-2">Thêm {title}</p>
          </div>
        </div>
        {children}
      </Modal>
    </>
  );
};

export default PopupAdd;
