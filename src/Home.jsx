import { useState } from "react"
import Quwstian from "./Quwstian"

const Home = () => {

    const [result, setResult] = useState({ })
    const [curItem, setCurItem] = useState(0)
    const questions = [
        {
          'no': 0,
          'ques': 'name'
        },
        {
          'no': 1,
          'ques': 'age'
        },{
          'no': 2,
          'ques': 'qualification'
        },{
          'no': 3,
          'ques': 'gender',
          'option': ['male', 'female', 'other']
        },{
          'no': 4,
          'ques': 'class'
        },
      ]
  return (
    <div >
<h1 className=" text-center text-3xl text-red-500 m-10">Bio Data  survey</h1>
{
    questions.map((ques, index) => (
        // <Quwstian setResult={setResult} result={result} item={ques} key={index}/>
     

        
            curItem === index ? (
        <Quwstian setResult={setResult} setCurItem={setCurItem} curItem={curItem}  result={result} item={ques} key={index}/>
            ) : ( '')
        
    ))
}

 {/* {result} */}
 {/* {result.map((item, index) => (
    <h1 key={index} > {item}</h1>
 ))} */}
 {console.log(result)}
    </div>
  )
}

export default Home