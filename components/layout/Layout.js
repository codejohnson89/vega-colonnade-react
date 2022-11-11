import { VegaAppFooter } from "@heartlandone/vega-react";
import Navigation from "../navigation";

export default function Layout(props) {
    return (
        <>
            <Navigation/>
            <main>
                {props.children}
            </main>
        </>
    )
}