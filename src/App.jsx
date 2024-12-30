import mobile_blog_image from "../src/assets/images/mobile_blog_image.png";
import desktop_blog_image from "../src/assets/images/desktop_blog_image.png";
import user_image from "../src/assets/images/image-avatar.webp";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      className="bg-white w-[327px] h-[501px] shadow-cardShadow rounded-2xl  flex flex-col 
    desktop:border-solid 
    desktop:border-black 
    desktop:border-[1px] desktop:w-[384px] 
    desktop:h-[522px]"
    >
      <div className="mt-6 mb-6 mx-auto">
        {width >= 1440 ? (
          <img
            alt="blog image"
            className="w-full h-[200px]"
            src={desktop_blog_image}
          />
        ) : (
          <img
            alt="blog image"
            className="w-full h-[200px]"
            src={mobile_blog_image}
          />
        )}
      </div>
      <section
        aria-label="main content of the card"
        className="w-[279px] h-[173px] mx-auto desktop:w-[336px]"
      >
        <div
          aria-label="Learning"
          className="w-[73px] h-[26px] bg-myYellow rounded-md flex justify-center items-center desktop:w-[82px] desktop:h-[29px]"
        >
          <h3 className="font-Figtree font-extrabold text-center text-[12px] desktop:text-[14px]">
            Learning
          </h3>
        </div>
        <p className="font-Figtree font-medium text-[12px] mt-[12px] text-myGrey desktop:text-[14px]">
          Published 21 Dec 2023
        </p>
        <h1 className="font-Figtree font-extrabold mt-[12px] text-[20px] desktop:text-[1.5rem] hover:cursor-pointer hover:text-myYellow">
          HTML & CSS foundations
        </h1>
        <p className="font-Figtree font-medium text-myGreyParagraph text-sm mt-[12px] desktop:text-[1rem]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </section>
      <footer className="flex place-content-between items-center w-[129px] h-[32px] ml-6 mt-6 ">
        <img src={user_image} alt="user image" className="w-8 h-8" />
        <p className="text-myGrey font-Figtree font-extrabold text-[14px]">
          <span className="drop-shadow-myDropShadow hover:cursor-pointer">
            Greg Hooper
          </span>
        </p>
      </footer>
    </main>
  );
}

export default App;
