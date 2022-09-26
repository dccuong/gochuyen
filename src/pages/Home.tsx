import React from "react";
import Slide from "../component/slide/Slide";

type Props = {};
const Home = (props: Props) => {
  const arr = [1, 2, 4, 5, 6, , 7, 8, 9, , 7, 5, 5, 6, 65, 4, 5, 5];
  return (
    <div className="pt-7">
      <div className="bg-slate-400">
        <Slide />
      </div>
      <div className="min-h-screen flex">
        <main className="flex-1 min-w-0 overflow-auto bg-slate-500 px-4 ">
          <div>Truyện mới cập nhật</div>
          <div className="grid grid-cols-4 gap-4 ">
            {arr.map((index, item) => (
              <div className=" border border-spacing-3" key={index}>
                <div className="relative ">
                  <div className="">
                    <img src="" alt="" />
                  </div>

                  <div className=" flex"> </div>
                </div>
                <div className="">
                  <p> cập nhật 1</p>
                  <p> cập nhật 1</p>
                  <p> cập nhật 1</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <nav className="md:w-[20%] flex-none ...">
          <div className="grid grid-cols-2 gap-4 ">
            {arr.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
