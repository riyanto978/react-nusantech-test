import React, { ChangeEvent } from "react";


export interface textfieldInterface {


    /**
     * textfield value
     */
    value: string,

    /**
     * check jika formatnya money jika iya format sesuai money , misal 1.000
     */
    isCurrency?: boolean,

    /**
     * change event handler
     */
    onChange: (e: ChangeEvent<HTMLInputElement> | string) => void
}