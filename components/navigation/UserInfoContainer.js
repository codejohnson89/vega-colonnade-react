import Link from "next/link";

export default function UserInfoContainer () {
    return (
        <>
            <div className="userInfoContainer">
                <ul className="list-inline additonal-nav">
                    <li>
                        <span className="username">micah.johnson@e-hps.com</span>
                        <Link href="#">Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}