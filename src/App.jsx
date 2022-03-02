import './App.css';
import HomeRouter from './router/HomeRouter';

function App() {
    return (
        <div className="font-popins m-auto h-full w-full min-w-0">
            <div className="m-0 flex min-h-screen min-w-0 flex-col justify-between">
                <HomeRouter />
            </div>
        </div>
    );
}

export default App;
