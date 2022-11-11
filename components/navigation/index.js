import NavContainer from './NavContainer';
import SiteHeader from "./SiteHeader";
import SubNavContainer from './SubNavContainer';
import UserInfoContainer from './UserInfoContainer';

export default function Navigation() {
    return (
        <>
            <header>
                <div className="headerContent">
                    <SiteHeader/>
                    <NavContainer/>
                    <UserInfoContainer/>
                </div>
                <SubNavContainer/>
            </header>
        </>
    )
}