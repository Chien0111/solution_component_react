import { Input, Popover } from "@mantine/core";
import { Add, Edit2, Eye, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../shared/Breadcrumbs/indext";
import { dataQuestion } from "./data";
import Table from "../../element/Table";
import MathJaxRender from "../../shared/MathJaxRender";
import { useDebouncedState } from "@mantine/hooks";

const QuestionTemplate = () => {
  const navigate = useNavigate();
  const [listQuestion, setListQuestion] = useState<any>(dataQuestion.data);
  const [openedDropDown, setOpenedDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valueFilter, setValueFilter] = useDebouncedState("", 500);

  const filter = (val: string) => {
    const filtered = listQuestion.filter((item: any) => {
      if (item.idQuestion.toString().includes(val.toString())) {
        return true;
      } else {
        return false;
      }
    });
    if (filtered.length == 0) {
      setListQuestion(dataQuestion.data);
    } else {
      setListQuestion(filtered);
    }
  };

  useEffect(() => {
    if (valueFilter.length > 0) {
      filter(valueFilter);
    }
  }, [valueFilter]);

  return (
    <>
      <div className="flex ">
        <Breadcrumb />
        <Input
          radius={8}
          placeholder="Tìm kiếm ID..."
          defaultValue={valueFilter}
          className="mt-4 py-1 w-48"
          onChange={(e: any) => {
            if (e.target.value.length < 1) {
              setValueFilter(" ");
            } else {
              setValueFilter(e.target.value);
            }
          }}
        />
        <Popover
          opened={openedDropDown}
          onClose={() => setOpenedDropDown(false)}
          radius={12}
          width={200}
          position="bottom"
          withArrow
          shadow="md"
        >
          <Popover.Target>
            <div
              className="bg-ct-secondary  text-white font-bold rounded-[8px] ml-2 m-4 flex justify-center items-center px-4 py-1 text-sm"
              onClick={() => setOpenedDropDown((o) => !o)}
            >
              <div className="pl-[2px]">
                <Add size="32" color="currentColor" />
              </div>
              <p className="tracking-wider">THÊM MỚI</p>
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <div>
              <div
                onClick={() => {
                  navigate("/manage-question/question/create");
                }}
              >
                <p className="hover:bg-ct-secondary hover:text-white p-1 ">
                  Nhập thủ công
                </p>
              </div>
              <Link
                to=""
                onClick={() => {
                  // đặt mặc định option là 1 đáp án
                  // setOpenedPopupExcel(true);
                }}
              >
                <p className="hover:bg-ct-secondary hover:text-white p-1 ">
                  Nhập từ file Excel
                </p>
              </Link>
              <Link
                to=""
                // onClick={() => setOpenedWord(true)}
              >
                <p className="hover:bg-ct-secondary hover:text-white p-1 ">
                  Nhập từ file Word
                </p>
              </Link>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>
      <div className="overflow-x-auto w-full mt-4">
        <Table
          dataSource={{
            columns: [
              {
                title: "Hành động",
              },
              {
                title: "Mã câu hỏi",
                size: 100,
              },
              {
                title: "Tên câu hỏi",
                size: 220,
              },
              {
                title: "Tags",
                size: 100,
              },
              {
                title: "Nội dung",
                size: 300,
              },
              {
                title: "Lớp",
                size: 100,
              },
              {
                title: "Môn học",
              },
              {
                title: "Độ khó",
              },
              {
                title: "Kiểu câu hỏi",
              },
              {
                title: "Loại câu hỏi",
              },
              {
                title: "Cấp độ nhận biết",
              },
              {
                title: "Người tạo",
              },
            ],
            data: listQuestion?.map((key: any) => {
              return {
                action: (
                  <div className="flex">
                    <Trash
                      size="20"
                      className="mr-2 text-ct-red-300"
                      color="currentColor"
                      variant="Bold"
                      onClick={() => {
                        // setIdDeleteQuestion(key.idQuestion);
                        // setDeleted(true);
                      }}
                    />
                    <Edit2
                      size="20"
                      color="currentColor"
                      variant="Bold"
                      className="mx-2 text-ct-secondary"
                      onClick={() => {
                        // handleEditQuestion(key.idQuestion);
                      }}
                    />
                    <Eye
                      size="20"
                      color="currentColor"
                      className="ml-2 text-ct-green-300"
                      //   onClick={() => handlePreviewQuestion(key.idQuestion)}
                    />
                  </div>
                ),
                id: key.idQuestion,
                name: key.name,
                tags:
                  key?.listTag?.slice(0, 2).length > 1
                    ? key.listTag?.slice(0, 2).map((key1: any) => {
                        return key1.name + "";
                      }) + "..."
                    : key?.listTag?.slice(0, 2).map((key1: any) => {
                        return key1.name + "";
                      }),
                grade: (
                  <MathJaxRender
                    className="whitespace-pre-wrap line-clamp-3"
                    math={`${key.text}`}
                  />
                ),
                // <MathJaxRender
                //     className='whitespace-pre-wrap line-clamp-3'
                //     math={`${key.text}`}
                //   />,
                class:
                  key.listClass.slice(0, 2).length > 1
                    ? key.listClass.slice(0, 2).map((key1: any) => {
                        return key1.name + "";
                      }) + "..."
                    : key.listClass.slice(0, 2).map((key1: any) => {
                        return key1.name + "";
                      }),
                subject:
                  key.listSubject.slice(0, 2).length > 1
                    ? key.listSubject.slice(0, 2).map((key1: any) => {
                        return key1.name + "";
                      }) + "..."
                    : key.listSubject.slice(0, 2).map((key1: any) => {
                        return key1.name + "";
                      }),
                level: "",
                choice: "",
                type: "",
                awarenessLevel: "",
                createdBy: key.createdBy,
              };
            }),
          }}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default QuestionTemplate;
