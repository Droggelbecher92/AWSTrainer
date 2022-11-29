import ResultSummary from "../Results/ResultSummary";
import {ValidatedAnswers} from "../../service/models";

interface UserProgressProps{
    answers : ValidatedAnswers[]
    isExam : boolean
    text : string
}

export default function UserProgress({answers,isExam,text}:UserProgressProps){

    console.log(answers)

    return(
        <div className={'userProgress'}>
            <ResultSummary percentRight={70} text={"AWS"} conclusion={false}/>
        </div>
    )
}