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
      <div>content</div>
      <div>author</div>
    </main>
  );
}

export default App;
