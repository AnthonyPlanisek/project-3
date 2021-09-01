import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const value = '.5'

const Progress = () => {
    return (
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
        </div>
    )
}

export default Progress