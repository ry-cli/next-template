export interface IDemoData {
    id: number
    name: string
}

export async function getDemoData() {
    // const res = await <DemoData>fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const res = {
        ok: true,
        json: () => {
            return [
                { id: 1, name: 'zs' },
                { id: 2, name: 'ls' }
            ]
        }
    }

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return <IDemoData[]>res.json()
}
