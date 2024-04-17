import {Dispatch, SetStateAction} from "react";

export type ImageProps = {
    image: File
    images: File[]
    setImages: Dispatch<SetStateAction<File[]>>
    idx: number
}