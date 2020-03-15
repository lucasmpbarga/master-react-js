export interface IPerson {
    name: string
    age: number
    children?: string
    change?: () => void
}
