import { menuItems } from "../../content/navigation/menuItems";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function SubNavContainer () {
    const router = useRouter();
    let [filteredSubNavItems, setFilteredSubNavItems] = useState([])

/* Filtering the menuItems array and setting the filteredSubNavItems state to the filtered array. */
    useEffect(() => {
        filteredSubNavItems = menuItems.filter((item) => {
            if(item.link == router.route) {
                setFilteredSubNavItems(item.subLinks)
            }
        })
    })
    return (
        <>
            <div className="sub-navigation">
                <nav id="area-navigation" className="content-wrapper">  
                    <div id="sub-menu-container">
                        <ul id="sub-menu">
                            {filteredSubNavItems.map((item) => {
                                return <li key={item.name}>
                                    <Link href={item.link}>{item.name}</Link>
                                    {
                                        item.subLinksExist ? <ul id="sub-menu">
                                        {
                                            item.sublinks.map((nav) => {
                                                return <li key={nav.label}>
                                                   <Link href={nav.link}>{nav.label}</Link>
                                                </li>
                                            })
                                        }
                                    </ul> : <></>
                                    }
                                    
                                </li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}