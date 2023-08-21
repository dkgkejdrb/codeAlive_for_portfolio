const H1 = ({H1Title='', H1PWidth=647}) => {
    if(H1PWidth === null) { 
        return (<h1 style={{display: 'inline-block'}}>{H1Title}</h1>); 
    } else { 
        return (<h1 style={{width: H1PWidth}}>{H1Title}</h1>); }
}

const H2 = ({H2Title='', H2PWidth=262}) => {
    if(H2PWidth === null) {
        return (<h2 style={{display: 'inline-block'}}>{H2Title}</h2>); 
    } else {
        return (
            <h2 style={{width: H2PWidth}}>{H2Title}</h2>); }
}

const P = ({PText='', PWidth=550}) => {
    if (PText === null) {
        return (<p style={{display: 'inline-block'}}>{PText}</p>); 
    } else { return (
        <p style={{width: PWidth}}>{PText}</p>); }
}

const Project = () => {
    return (
        <div className='Project' id='/#project'>
            <div className='Wrap'>
            <H1 H1Title='CodeAlive의 무한한 창의력' H1PWidth='100%'/>
                <br></br>
                <P PText='모든 크리에이터를 위한 플레이그라운드' PWidth='100%'/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <GalleryWrap
                UrlList={[
                    'url(https://www.codealive.co.kr/images/main/img_project.jpg)',
                    'url(https://www.codealive.co.kr/images/main/img_project2.gif)',
                    'url(https://www.codealive.co.kr/images/main/img_project3.gif)',
                ]} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <GalleryWrap
                UrlList={[
                    'url(https://www.codealive.co.kr/images/main/img_project4.gif)',
                    'url(https://www.codealive.co.kr/images/main/img_project5.gif)',
                    'url(https://www.codealive.co.kr/images/main/img_project6.jpg)'
                ]}/>
            </div>
        </div>
    );
}

const GalleryWrap = ({UrlList=[]}) => {
    const listItems = UrlList.map((value, index) =>
        <div className={index} 
        key={index.toString()}
        style={{
            backgroundImage: UrlList[index],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        > </div>
    );
    return (
        <div className='GalleryWrap'>
            {listItems}
        </div>
    )
}

export default Project;