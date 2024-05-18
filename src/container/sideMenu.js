import React from 'react';
import Logo from '../css/img/ai-generated-7700027_1280.png';

export const SideMenu = () => {

    const [menuList, setMenuList] = React.useState([]);
    React.useEffect(() =>{
        setMenuList([
            {menu_nm : "Outer"},
            {menu_nm : "Top"},
            {menu_nm : "Pants"},
            {menu_nm : "Skirt"},
            {menu_nm : "etc"}
        ]);

    })
    return (
        <div className='side-bar'>
            {/* <div className='logo-img'>{Logo}</div> */}
            <div className='logo-area'>
                <img className='logo-img' src={Logo}></img>
                <div className='logo-txt'>
                    Sunji
                </div>
            </div>
            
            {
                menuList.map(function(item){
                    return (
                            <div className='menu menu-txt-area'>
                                <span>{item.menu_nm}</span>
                            </div>
                    )
                })
            }

        </div>
    )
}