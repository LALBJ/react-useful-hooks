import { useState } from 'react'; 
import useInterval from '../hooks/useInterval'; 
import usePreviousValue from '../hooks/usePreviousValue'

const TestComponent = () => {
    const [seconds, setSeconds] = useState(0)
    const prevSeconds = usePreviousValue(seconds)

    useInterval(() => { setSeconds(1 + seconds)}, 1000)

    return (
        <div>
            <p>{seconds}s</p>
            <p>The previous value of the state 'seconds' was: {prevSeconds}</p>      
        </div>
    )
}

export default TestComponent