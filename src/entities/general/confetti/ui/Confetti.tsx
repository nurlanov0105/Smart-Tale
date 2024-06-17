import Confetti from 'react-confetti';
import {FC} from "react";
import {useWindowSize} from "@/shared/lib";

const ConfettiComponent:FC<{showConfetti: boolean}> = ({ showConfetti }) => {
    const { width, height } = useWindowSize();

    return (
        <>
            {showConfetti && <Confetti
                width={width}
                height={height}
                numberOfPieces={500}
                gravity={0.6}
                initialVelocityX={10}
                initialVelocityY={20}
                colors={['#bb0000', '#fc0']}
                wind={0.01}
            />}
        </>
    );
};

export default ConfettiComponent;