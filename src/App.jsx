function App() {
  return (
    <div className="bg-black border border-black">
      <div className="grid grid-cols-2 grid-rows-2 gap-10 m-10 p-5 rounded-2xl bg-[#1a1a1b]">
        <div className="row-span-2 border bg-[#525252] rounded-2xl "></div>
        <div className="">
          <div></div>
          <div>
            <div role="tablist" className="tabs tabs-boxed">
              <a role="tab1" className="tab">
                About Me
              </a>
              <a role="tab2" className="tab ">
                Experience
              </a>
              <a role="tab3" className="tab">
                Recommended
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="border">
          <p>There</p>
        </div>
      </div>
    </div>
  );
}

export default App;
