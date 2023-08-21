const VideoWrap = ({VideoWrapSrc=''}) => {
    return (
        <div className='VideoWrap' id='/#home'>
            <video autoPlay muted loop playsInline>
                <source src={VideoWrapSrc} type='video/mp4' />
            </video>
        </div>
    );
}

export default VideoWrap;