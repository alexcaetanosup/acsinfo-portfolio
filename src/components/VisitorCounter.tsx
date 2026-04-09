import { useEffect, useState } from 'react';

export function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const hasCounted = sessionStorage.getItem('visitor_counted');

        fetch('/api/counter', { method: hasCounted ? 'GET' : 'POST' })
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                if (!hasCounted) sessionStorage.setItem('visitor_counted', 'true');
            })
            .catch(() => setCount(999));
    }, []);

    if (!count) return null;

    return (
        <div className="fixed bottom-20 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full z-40">
            👁️ {count.toLocaleString('pt-BR')}
        </div>
    );
}