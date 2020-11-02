import { array } from 'prop-types';
import React, {useEffect, useState} from 'react';
import TriviaFinish from './TriviaFinish';
import TriviaPlay from "./TriviaPlay";

const TriviaQuestion = () => {
  const [finish, setFinish] = useState(false)
  const [score, setScore] = useState(0)


  return (
    <div>
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