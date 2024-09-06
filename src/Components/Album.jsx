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
          <button className="btn bg-[#242424] text-white rounded-2xl">
            + Add Image
          </button>
          <div className="flex gap-2">
            <button className="btn rounded-full">+</button>
            <button className="btn rounded-full">/</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
