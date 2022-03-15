export type ColorType =
    "primary" | "white" | "black" | "transparent" | "primaryInput" | "primaryFont" | "text" |
    "error"


type Colors = {
    primary: string;
    white: string;
    black: string;
    transparent: string;
    primaryInput: string;
    primaryFont: string;
    error: string;
    text: string;
}

const colors: Colors = {
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
    primaryInput: "#CCDEF2",
    primary: '#0052A8',
    primaryFont: "#1A2A45",
    error: "#FF0000",
    text: "#000000"

}
export default colors