import Image from "next/image";
import Link from "next/link";
import logo from '../../public/HeartlandLogo.png';

export default function SiteHeader() {
    return (
        <>
            <div id="site-title" className="site-title">
                <Link href="/">
                    <Image src={logo} alt="Heartland Ach Gateway Administration"/>
                    <h4>ACH Gateway Administration</h4>
                 </Link>
            </div>
        </>
    )
}