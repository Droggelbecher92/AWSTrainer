import {useAuth} from "../auth/AuthProvider";
import NavBar from "../components/Common/NavBar";
import {getAnswersFromExam, getAnswersFromTrain} from "../service/apiService";
import {useEffect, useState} from "react";
import {ValidatedAnswers} from "../service/models";
import UserProgress from "../components/User/UserProgress";

export default function UserPage(){

    const [exams , setExams] = useState<ValidatedAnswers[]>()
    const [questions , setQuestions] = useState<ValidatedAnswers[]>()

    const auth = useAuth()
    useEffect(()=>{
        getAnswersFromExam(auth.username,auth.token)
            .then(data => setExams(data))
        getAnswersFromTrain(auth.username,auth.token)
            .then(data => setQuestions(data))
    },[auth.token, auth.username])



    return(
        <div className={'userPage'}>
            <NavBar location={"user"}/>
            <h2>{`Hey ${auth.username}`}</h2>
            {exams && <UserProgress answers={exams} isExam={true} text={'AWS'}/>}
            {questions && <UserProgress answers={questions} isExam={false} text={'AWS'}/>}
            <button onClick={()=> auth.logout()}>
                Logout
            </button>
            <button>
                Delete Account
            </button>
        </div>
    )
}