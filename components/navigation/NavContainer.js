import Link from "next/link";
import { menuItems } from "../../content/navigation/menuItems";

export default function NavContainer () {
    return (
        <>
            <nav id="site-navigation">
                <ul id="menu">
                    {menuItems.map((navItem) => {
                        return <li id="area-home-nav" key={navItem.primaryLink}>
                            <Link href={navItem.link}>{navItem.primaryLink}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </>
    )
}