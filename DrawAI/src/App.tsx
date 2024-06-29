
import Canvas from './components/Canvas'
import Header from './components/Header'

export default function App() {

    return (
        <div className='flex justify-center items-center h-svh flex-col'>
            <Header />
            <Canvas />
        </div>
    );
}