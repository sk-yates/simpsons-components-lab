const NavMenuItem = (props) => {

    return (
        <li className="trigger"><a href={props.href1}> {props.text1} </a>
            <ul className="submenu">
                <li><a href={props.href2}> {props.text2} </a></li>
                <li><a href={props.href3}> {props.text3} </a></li>
            </ul>
        </li>
    );
};

export default NavMenuItem;