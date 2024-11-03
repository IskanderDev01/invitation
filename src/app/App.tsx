import { Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <div className="min-h-screen bg-cover">
            <Suspense fallback="">
                <>{<AppRouter />}</>
            </Suspense>
            <Analytics />
        </div>
    );
}

export default App;
