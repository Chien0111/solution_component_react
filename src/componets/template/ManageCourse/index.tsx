import { GooglePlay, MouseCircle } from "iconsax-react";
import { useState } from "react";
import Collapse from "../../element/Collapse";
import Breadcrumb from "../../shared/Breadcrumbs/indext";
import { detailCourse } from "./data";

const CourseTemplate = () => {
  const [listCourse, setListCoure] = useState<any>(detailCourse);

  return (
    <>
      <div className="mb-8">
        {" "}
        <Breadcrumb />
      </div>
      <div className="border-[1px]">
        {Object.keys(listCourse.courseTree).map((key: any) => {
          const courseKey = listCourse.courseTree[key] as any;
          return (
            <>
              <Collapse
                opened={true}
                title={courseKey.name}
                arrow={true}
                style="pl-4 font-bold text-sky-700 bg-slate-50"
              >
                {courseKey.listSection.map((item: any) => {
                  return (
                    <>
                      <Collapse
                        opened={true}
                        title={item.threads}
                        styleTitle={`font-semibold`}
                        icon={
                          <GooglePlay
                            size="32"
                            color="#FF8A65"
                            variant="Bold"
                            className="mr-3"
                          />
                        }
                        style={`ml-5 `}
                      >
                        {item.listLesson.map((item2: any) => {
                          console.log(item2);

                          return (
                            <>
                              <Collapse
                                title={item2.title}
                                style={"ml-20 border-b-[1px]"}
                                icon={
                                  <MouseCircle
                                    size="32"
                                    color="#2ccce4"
                                    variant="Bold"
                                    className="mr-4"
                                  />
                                }
                              >
                                <></>
                              </Collapse>
                            </>
                          );
                        })}
                      </Collapse>
                    </>
                  );
                })}
              </Collapse>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CourseTemplate;
