import { themes } from "./themes";

export const selectTheme=(theme,styles)=>{
    console.log(theme)
    console.log(styles)
    switch(theme){
        case themes.light:
            return styles.light
        case themes.dark:
            return styles.dark
    }
}