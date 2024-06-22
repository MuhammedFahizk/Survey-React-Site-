import { useState } from "react"
import Quwstian from "./Quwstian"

const Home = () => {

    const [result, setResult] = useState({ })
    const [curItem, setCurItem] = useState(0)
      const questions = [
        { no: 0, ques: "name", type: "text" },
        { no: 1, ques: "age", type: "number" },
        { no: 2, ques: "qualification", type: "text" },
        { no: 3, ques: "gender", type: "select", option: ["male", "female", "other"] },
        { no: 4, ques: "class", type: "text" },
      ];
      
  return (
    <div >
<h1 className=" text-center text-3xl text-red-500 m-10">Bio Data  survey</h1>

{curItem === questions.length  && (
        <div>
          <h2>Survey Results:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
          <button onClick={() =>setCurItem(0) } className="bg-green-400  mx-20 px-5 rounded-lg p-2 my-10">new</button>
        </div>
      )}
      {console.log(result)}
{
    questions.map((ques, index) => (
     

        
            curItem === index ? (
        <Quwstian setResult={setResult} setCurItem={setCurItem} curItem={curItem}  result={result} item={ques} key={index}/>
            ) : null
        
    ))
}

    </div>
  )
}

export default Home