
import { MouseEvent } from 'react'

export interface ButtonInterface {
    /**
     * untuk mengisi child dari button dengan element
     */
    children: React.ReactNode,


    /**
     * onClick event handler
     */
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}