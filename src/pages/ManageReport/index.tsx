import React, { useEffect, useState } from "react";
import Table from "../../componets/element/Table";
import Breadcrumb from "../../componets/shared/Breadcrumbs/indext";
import Pagination from "../../componets/shared/Pagination";
import DataReport from "./data";

const ReprotContainer = () => {
  const [dataTable, setDataTable] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setDataTable(DataReport.data.slice(0, 10));
  }, []);

  const handlePaging = (page: number) => {
    const lenthDataTable = page * 10 + 10;
    const pageTable = page * 10;
    setDataTable(DataReport.data.slice(pageTable, lenthDataTable));
  };

  return (
    <>
      <div>
        <div className="mb-4">
          <Breadcrumb />
        </div>
        <Table
          loading={isLoading}
          dataSource={{
            columns: [{ title: "ID", size: 10 }, { title: "Name báo cáo" }],
            data: dataTable?.map((item: any) => {
              return {
                id: item.id,
                title: item.title,
              };
            }),
          }}
        />
        <div className="flex justify-end my-4">
          <Pagination handlePaging={handlePaging} total={10} />
        </div>
      </div>
    </>
  );
};

export default ReprotContainer;
