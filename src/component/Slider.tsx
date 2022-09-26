import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
const data = [
  {
    id: 1,
    image: "https://picsum.photos/200",
    title: "First Slide",
    random:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus?",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/picsum/200",
    title: "Second Slide",
    random: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    image: "https://picsum.photos/200?grayscale",
    title: "Third Slide ",
    random:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi deleniti quod illo?",
  },
];
function Slider1() {
  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id: number) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id: number) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  return (
    <div className="  bg-slate-200 md:h-[400px] sm:h-[200px]">
      {myData.map((item) => {
        const { id, image, title, random } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id ? "flex items-center relative   " : "hidden"
            }
          >
            <button
              className="text-[12px] border-2 border-black rounded-full"
              onClick={() => prevSliderHandler(id)}
            >
              <FiChevronLeft />
            </button>

            <img
              src={image}
              alt={title}
              className=" w-[100%]  md:h-[400px] xg:h-[200px]  "
            />
            {/* <h2 className="text-2xl font-bold my-6">{id}</h2>
              <h3 className="text-xl">{title}</h3>
              <p>{random}</p> */}

            <button
              className="text-[12px] border-2 border-black rounded-full"
              onClick={() => nextSliderHandler(id)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider1;
