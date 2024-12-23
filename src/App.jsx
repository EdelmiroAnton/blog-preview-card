import blog_image from "../src/assets/images/blog_img.svg";

function App() {
  return (
    <main
      className="bg-white w-[327px] h-[501px] shadow-cardShadow rounded-2xl  flex flex-col 
    sm:border-solid sm:border-black sm:border-[1px]"
    >
      <div className="p-6">
        <img src={blog_image} alt="blog image" />
      </div>
      <section
        aria-label="main content of the card"
        className="w-[279px] h-[173px] mx-auto"
      >
        <div
          aria-label="Learning"
          className="w-[73px] h-[26px] bg-myYellow rounded-md flex justify-center items-center"
        >
          <h3 className="font-Figtree font-extrabold text-center text-[12px]">
            Learning
          </h3>
        </div>
        <p className="font-Figtree font-medium text-[12px] mt-[12px] text-myGrey">
          Published 21 Dec 2023
        </p>
        <h1 className="font-Figtree font-extrabold mt-[12px] text-[20px]">
          HTML & CSS foundations
        </h1>
        <p className="font-Figtree font-medium text-myGreyParagraph text-sm mt-[12px]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </section>
      <div>author</div>
    </main>
  );
}

export default App;
