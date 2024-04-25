export type KanbanOrderProps = {
    id: number
    title: string
    status: string
    description: string
    date: string
}

export type Columns = 'new' | 'process' | 'checking' | 'sending' | 'arrived';
