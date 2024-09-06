import { AiOutlineQuestionCircle } from "react-icons/ai";
import TabsPart from "./Components/Tabs";
import { RxTable } from "react-icons/rx";
import Album from "./Components/Album";

function App() {
  return (
    <div className="bg-black border border-black ">
      <div className="max-w-[1700px] mx-auto h-[100vh] p-10 bg-[#252525] flex gap-10">
        <div className="row-span-2 border bg-[#616161D1] rounded-2xl w-1/2"></div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="bg-[#363C43] p-5 h-1/2 rounded-2xl">
            <div className="flex">
              <div>
                <AiOutlineQuestionCircle className="text-[25px] mr-4" />
                <div className="flex flex-col h-full justify-center">
                  <RxTable className="text-[25px]" />
                </div>
              </div>
              <TabsPart />
            </div>
          </div>
          <div className="bg-[#363C43] p-5 h-1/2 rounded-2xl">
            <div className="flex">
              <div>
                <AiOutlineQuestionCircle className="text-[25px] mr-4" />
                <div className="flex flex-col h-full justify-center">
                  <RxTable className="text-[25px]" />
                </div>
              </div>
              <Album/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
