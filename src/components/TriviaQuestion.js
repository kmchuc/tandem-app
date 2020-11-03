import React, {useState} from 'react';
import TriviaFinish from './TriviaFinish';
import TriviaPlay from "./TriviaPlay";
import '../App.css'

const TriviaQuestion = () => {
  const [finish, setFinish] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <div className="main">
      {!finish &&
    <TriviaPlay setFinish={setFinish} score={score} setScore={setScore}/>
      }
      {finish &&
    <TriviaFinish score={score}/>
      }
    </div>
  )
}

export default TriviaQuestion;