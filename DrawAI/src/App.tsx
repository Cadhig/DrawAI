
import Canvas from './components/Canvas'
import Header from './components/Header'
import AiGuess from './components/AiGuess';
import AiStats from './components/AiStats';

export default function App() {

    return (
        <div className='flex justify-center items-center h-svh gap-6'>
            <Header />
            <AiGuess/>
            <Canvas />
            <AiStats/>
        </div>
    );
}