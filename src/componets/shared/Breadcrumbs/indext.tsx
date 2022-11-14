import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "@mantine/core";
import { Graph } from "iconsax-react";

import { breadcumbRoute } from "./route";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const [breadcrumb, setBreadcrumb] = useState<any[]>([]);

  useEffect(() => {
    for (const key in params) {
      if (key == "idCourse") {
        const obj = {
          title: params[key],
          href: `/report-test/${params.idCourse}`,
        };
        setBreadcrumb((pre: any) => [...pre, obj]);
      } else if (key == "id") {
        const obj = {
          title: params[key],
          href: `/report-test/${params.idCourse}/${params.id}`,
        };
        setBreadcrumb((pre: any) => [...pre, obj]);
      }
    }
    breadcumbRoute.map((item: any) => {
      if (item.href === location.pathname) {
        setBreadcrumb([item]);
      }
    });
  }, [location.pathname]);

  const items = breadcrumb.map((item: any, index: number) => (
    <Link to={item.href} key={index}>
      <p className="text-blueGray-700 text-xl font-semibold">{item.title}</p>
    </Link>
  ));

  return (
    <div className="relative w-full max-w-full flex flex-grow items-center flex-1">
      <h6 className="uppercase bg-ct-secondary w-min rounded-full p-2 mb-1 text-xs font-semibold">
        <Graph size={20} color="white" />
      </h6>{" "}
      <Breadcrumbs separator="/" className="pl-5">
        {items}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
