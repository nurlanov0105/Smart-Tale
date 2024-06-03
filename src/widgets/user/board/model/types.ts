export interface KanbanOrderProps{
    deadline: string
    description:string
    id: number
    slug:string
    status:string
    title:string
}
export type Columns = 'Arrived' | 'Checking' | 'Process' | 'Sending' | 'Waiting';
