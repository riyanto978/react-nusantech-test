import React from "react";

export interface checkInterface {
    /**
     * checkbox value state
     */
    value: boolean

    /**
     * function onChange
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


