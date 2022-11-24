import {useAuth} from "../auth/AuthProvider";
import NavBar from "../components/Common/NavBar";
import ResultSummary from "../components/Results/ResultSummary";
import {getAnswersFromExam, getAnswersFromTrain} from "../service/apiService";
import {useEffect} from "react";

export default function UserPage(){

    const auth = useAuth()
    useEffect(()=>{
        getAnswersFromExam(auth.username,auth.token)
            .then(data => console.log(data))

        getAnswersFromTrain(auth.username,auth.token)
            .then(data => console.log(data))
    },[auth.token, auth.username])



    return(
        <div className={'userPage'}>
            <NavBar location={"user"}/>
            <h2>{`Hey ${auth.username}`}</h2>
            <ResultSummary percentRight={70} text={"AWS"} conclusion={false}/>
            <ResultSummary percentRight={80} text={"GCP"} conclusion={true}/>
            <button onClick={()=> auth.logout()}>
                Logout
            </button>
            <button>
                Delete Account
            </button>
        </div>
    )
}