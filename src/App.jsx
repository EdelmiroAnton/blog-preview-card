import blog_image from "../src/assets/images/blog_img.svg"

function App() {
  return (
    <main className="w-[327px] h-[501px] border-solid border-2 border-black flex flex-col">
      <div>
        <img src={blog_image} alt="blog image" />
      </div>
      <div>content</div>
      <div>author</div>
    </main>
  );
}

export default App;
