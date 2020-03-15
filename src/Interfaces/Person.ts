import { ChangeEvent } from 'react'

export interface Person {
    name: string
    age: number
    children?: string
    change?: () => void
}
