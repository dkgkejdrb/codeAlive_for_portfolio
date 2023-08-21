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

const Course = () => {
    return (
        <div className='Course' id='/#course'>
            <div className='Wrap'>
                <H1 H1Title='커리큘럼' H1PWidth='100%'/>
                <br></br>
                <P PText='입문자부터 전문가까지 모두를 위한 스캐폴딩 커리큘럼' PWidth='100%'/>
                <CourseBox
                BoxTitles={['Power Base', 'Core Algorithm', 'Super AI']}
                BoxTexts={[
                    'Python의 기본문법 순차, 선택, 반복 구조 객체 지향 프로그래밍 패러다임',
                    '스택(stack), 큐(queue)등 자료 구조 정렬(sort), 탐색(search)등 알고리즘',
                    '머신러닝 에이전트를 이용한 딥 러닝(deep learning) 개념과 동작원리'
                ]}
                />
            </div>
        </div>
    );
}

const CourseBox = ({BoxTitles=[], BoxTexts=[]}) => {
    const listItems = BoxTitles.map((value, index) =>
        <div className={index} key={index.toString()}>
            <H1 H1Title={BoxTitles[index]} H1PWidth='80%'/>
            <div>
                <H2 H2Title='24 Lessons x 100min'/>
                <br></br>
                <br></br>
                <p>{BoxTexts[index]}</p>            
            </div>
        </div>
    );
    return (
        <div className='BoxWrap'>
            {listItems}
         </div>
    );
}

export default Course;