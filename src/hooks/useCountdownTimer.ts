import { useCallback, useEffect, useRef, useState } from "react"

function useCountdownTimer(seconds: number){
    const [timeLeft,setTimeLeft] = useState(seconds)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const startCountdown = useCallback(() => {
        console.log('countdown started')
        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft-1)
        },1000)
    },[setTimeLeft])

    const resetCountdownTimer = useCallback(() =>{
        console.log("reset countdown")
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
        setTimeLeft(seconds)
    },[seconds])

    useEffect(() => {
        if(!timeLeft && intervalRef.current) {
            console.log("clear countdown")
            clearTimeout(intervalRef.current)
        }
    },[timeLeft,intervalRef])

    return {timeLeft,resetCountdownTimer,startCountdown}
}

export default useCountdownTimer