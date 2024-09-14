import { themes } from "./themes";

export const selectTheme=(theme,styles)=>{
    switch(theme){
        case themes.light:
            return styles.light
        case themes.dark:
            return styles.dark
    }
}