export interface IPerson {
    id: number
    name: string
    age: number
    change?: (event: React.FormEvent<HTMLInputElement>) => void
    click?: () => void
}
