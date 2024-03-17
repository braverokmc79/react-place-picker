import { useEffect} from "react";
import ProgressBar from "./ProgressBar";


const TIMER=10000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {


  useEffect(()=>{
    console.log("timer set");
    const timer=setTimeout(()=>{
      onConfirm();
    },TIMER);
    return ()=>{
      console.log("Cleaning up timer");
      clearTimeout(timer);
    }
  }, [onConfirm]);


  return (
    <div id="delete-confirmation">
      <h2>확인!</h2>
      <p>정말로 이 장소를 제거하시겠습니까?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          아니오
        </button>
        <button onClick={onConfirm} className="button">
          네
        </button>
      </div>
     
     <ProgressBar  timer={TIMER}  />

    </div>
  );
}
