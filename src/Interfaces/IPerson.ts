export interface IPerson {
    name: string
    age: number
    change?: () => void
    click?: () => void
}
