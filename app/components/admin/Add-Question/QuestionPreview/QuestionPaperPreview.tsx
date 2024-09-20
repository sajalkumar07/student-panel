import Horizantal from "./Horizantal";

// Function for QuestionPaperPreview
const QuestionPaperPreview = () => {
  return (
    <div className="question-paper-preview p-4">
      <div className="py-2 flex space-x-4">
        <h1 className="text-2xl ">Question Paper Preview</h1>
        <div>
          <button className="bg-black text-white text-sm rounded-full h-10 w-32 flex justify-center items-center">
            4 Questions
          </button>
        </div>
        <button className="bg-black text-white text-sm rounded-full h-10 w-28 flex justify-center items-center">
          80 min
        </button>
      </div>
      <Horizantal></Horizantal>
      <div className="py-2">Section 1: HTML & CSS</div>
      <Horizantal />
      <div>
        <div className="py-2 flex space-x-2">
          <div>Question 1</div>
          <div className="text-sm">
            <button className="bg-black text-white text-sm rounded-full h-8 w-20 flex justify-center items-center">
              HTML
            </button>
          </div>
          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              Medium
            </button>
          </div>

          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              20 mins
            </button>
          </div>
        </div>
        <div>Create a simple HTML form with the following fields:</div>
        <div className="py-2 ml-4">
          <ul>
            <li>●Name (text input)</li>
            <li>●Email (email input)</li>
            <li>●Password (password input)</li>
            <li>●Submit button</li>
          </ul>
        </div>
      </div>
      <Horizantal />
      <div className="py-2">
        <div className="flex space-x-2">
          <div>Question 2</div>
          <div className="text-sm">
            <button className="bg-black text-white text-sm rounded-full h-8 w-20 flex justify-center items-center">
              CSS
            </button>
          </div>
          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              Medium
            </button>
          </div>
          <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
            20mins
          </button>
        </div>
        <div className="py-2">
          Style the form from task1 usingCSS. Esure the form is visually
          appealing and responsive
        </div>
        <Horizantal />
      </div>
      <div>Section 2:JavaScript</div>
      <div>
        <div className="py-2 flex space-x-2">
          <div>Question 3</div>
          <div className="text-sm">
            <button className="bg-black text-white text-sm rounded-full h-8 w-20 flex justify-center items-center">
              JavaScript
            </button>
          </div>
          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              Medium
            </button>
          </div>

          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              20 mins
            </button>
          </div>
        </div>
        <div className="py-2">
          Develop a function that asynchronously fetches data from JSON API and
          Dsiplay it on the webpages. The API endpoint can be of your choice,and
          the displayed data shold be relevent and meaningful.
        </div>
      </div>
      <Horizantal />
      <div>
        <div className="py-2 flex space-x-2">
          <div>Question 4</div>
          <div className="text-sm">
            <button className="bg-black text-white text-sm rounded-full h-8 w-20 flex justify-center items-center">
              JavaScript
            </button>
          </div>
          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              Medium
            </button>
          </div>
          <div>
            <button className="bg-black text-white text-sm rounded-full h-8 w-28 flex justify-center items-center">
              20mins
            </button>
          </div>
        </div>
        <div>
          Implement a feature that allows user to filter and sort a list of
          items(e.g. list of Product). Provide option for filtring and sorting,
          and dynamically uptdate the displayed list based on user section.
        </div>
      </div>
    </div>
  );
};
export default QuestionPaperPreview;
