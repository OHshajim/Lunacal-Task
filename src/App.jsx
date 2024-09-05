import TabsPart from "./Components/Tabs";

function App() {
  return (
    <div className="bg-black border border-black ">
      <div className="max-w-[1700px] mx-auto h-[100vh] p-10 bg-[#252525] flex gap-10">
        <div className="row-span-2 border bg-[#525252] rounded-2xl w-1/2"></div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="bg-[#363C43] p-5 h-1/2 ">
            <TabsPart />
          </div>
          <div className="border h-1/2 ">
            <p>There</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
