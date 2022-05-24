import { FullQuestionType } from "app/types";
import { useEffect, useState } from "react";
import "./QuestionItem.scss";

type QuestionItemProps = {
    data: FullQuestionType
    isChosen: string
    setIsChosen: (title: string) => void
}
type OptionsItemProps = {
    data: string
    isAnswer: boolean
    isChosen: string
    setIsChosen: () => void
}


export const OptionsItem = ({data, isAnswer, isChosen, setIsChosen}: OptionsItemProps) => {
    let [hidden, setHidden] = useState(isAnswer ? `question-item-body-item green` : `question-item-body-item red`)
    

    const clickHandler = () => {
        if(!isChosen){
            setHidden(hidden + ' active')
            setIsChosen()
        }   
    }

    useEffect(() => {
        if(isChosen === data) {
            setHidden(hidden + ' active')
        } else {
            setHidden(isAnswer ? `question-item-body-item green` : `question-item-body-item red`)
        }
    }, [isChosen, data, hidden, isAnswer])

    return (
        <div className={hidden} onClick={clickHandler}>{data}</div>
    )
}

const QuestionItem = ({data, isChosen, setIsChosen }: QuestionItemProps) => {
    return (
        <div className="question-item">
            <div className="question-item-header">
                {data.photo && <img src={data.photo} className="question-item-header-photo" alt="person" />}
                <p className="title">{data.question}</p>
            </div>
            <div className="question-item-body">
                {data.options.map((e, idx) => (
                    <OptionsItem key={e+idx} data={e} isAnswer={data.answer === e} isChosen={isChosen} setIsChosen={() => setIsChosen(e)}/>
                ))}
            </div>
        </div>
    )
}

export default QuestionItem