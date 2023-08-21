import {Link} from 'react-scroll';

const HeaderBtn = ({idList=[], headerLinkNameList=[]}) => {
    const className = 'HeaderBtn';
    const listItems = idList.map((value, index) => 
        <Link className={className} key={index.toString()} to={idList[index]} spy={true} smooth={true} style={{cursor : 'pointer'}}>
        <span>{headerLinkNameList[index]}</span>
    </Link>
    );
    return (
        <div className='Container'>
            {listItems}
        </div>
    )
}

const Header = () => {
return (
    <header>
        <Link className='Logo' to='/#home' spy={true} smooth={true} style={{cursor:'pointer'}}></Link>
            <HeaderBtn
            idList={['/#intro', '/#features', '/#course', '/#project', '/#review', '/#partner']}
            headerLinkNameList={['Introduction', 'Features', 'Course', 'Project', 'Review', 'Partner']}
            />
    </header>
)
}

export default Header;