const Quwstian = ({ item, setResult, setCurItem, result, curItem }) => {
  return (
    <div className="mx-20 border-2 my-3 rounded-3xl p-10 flex gap-4">
      <h1>{item.no}</h1>
      <h1>{item.ques}:</h1>
      {item.option ? (
        item.option.map((option, index) => (
          <>
            <label htmlFor="item" name={item}>
              {option}
            </label>
            <input
              key={index}
              name={item.ques}
              value={option}
              type="radio"
              onClick={(e) =>
                setResult({ ...result, [e.target.name]: e.target.value })
              }
            />

          </>
        ))
        
      ) : (
        <>
          <input
            name={item.ques}
            onChange={(e) => {
              setResult({ ...result, [e.target.name]: e.target.value });
            }}
            type = {item.type}
            className="border-2 rounded-lg"
            placeholder={item.ques}
            required
          />
        </>
      )}
          <button className="bg-red-400 px-5 p-1  rounded-md"  onClick={() => setCurItem(() => curItem + 1)}>Next </button>

    </div>
  );
};

export default Quwstian;
