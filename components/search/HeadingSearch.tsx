import { useMemo } from "preact/hooks"


export default function HeadingSearch(){

    const headingText = useMemo(() => {
        const url = window.location
        const urlSearchParams = new URLSearchParams(window.location?.search);

        let headingText
        console.log(window.location)
        if(window.location?.pathname === "/s"){
            headingText = urlSearchParams.get("q") ?? ""
        }else{
            const url = window.location?.href
            headingText = url?.slice(url.lastIndexOf("/") + 1)
            console.log("headingText")
        }
        
        return headingText;
    },[])

    return(
        <h1 class="w-[fit-content] m-auto">busca por: <strong>{headingText}</strong></h1>
    )
}