const Album = () => {
  return (
    <div className=" h-full w-full">
      <div className="flex justify-between">
        <div>
          <button className="btn bg-black text-white rounded-2xl">
            Gallery
          </button>
        </div>
        <div className="flex gap-5">
          <button type="file" className="btn bg-[#242424] text-white rounded-2xl">+ Add Image</button>
            
          <div className="flex gap-2">
            <button className="btn rounded-full">{`<`}</button>
            <button className="btn rounded-full">{`>`}</button>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-16">
        <img src="/public/Rectangle 5160.png" alt="" className="hover:scale-105 duration-200 delay-75 transform" />
        <img src="/public/Rectangle 5160.png" alt="" className="hover:scale-105 duration-200 delay-75 transform" />
        <img src="/public/Rectangle 5160.png" alt="" className="hover:scale-105 duration-200 delay-75 transform" />
      </div>
    </div>
  );
};

export default Album;
