import { Application, Sprite, Graphics, Texture } from "pixi.js";
import { useEffect, useRef } from "react";
import comet from "../Assets/comet.png";
import holo from "../Assets/holo.png"

const VideoWrapAnimation = () => {
    const ref = useRef(null);

    const starAmount = 4;
    const starDuration = 50;

    useEffect (()=> {
        const app = new Application({
            backgroundAlpha: 0, resizeTo: window
        })

        const sprite = Sprite.from(comet)
        const graphics = new Graphics();

        // sprite.anchor.set(0.5);
        // sprite.scale.y = 0; // 0.5
        // sprite.scale.x = 0; // 0.5

        let randomXSpeed = null;
        let randomYSpeed = null;
        let timer = null;
        // 여러개의 혜성 렌더링
        const stars = [];
        for (let i = 0; i < starAmount; ++i) {
            const sprite = new Sprite(Texture.from(comet))
            sprite.anchor.set(0.5);
            sprite.scale.y = 0;
            sprite.scale.x = 0;
            sprite.x = app.screen.width * Math.random();
            sprite.y = app.screen.height * Math.random();
            randomXSpeed = (Math.random() * 5) + 10;
            randomYSpeed = (Math.random() * 5) + 10;
            app.stage.addChild(sprite);
            stars.push(sprite);
        }

        
        ref.current.appendChild(app.view);
        app.start();



        app.ticker.add((delta)=> {
        //     timer += delta;

        //     sprite.x += randomXSpeed * delta;
        //     sprite.y += randomYSpeed * delta;
        //     if(sprite.scale.x <= 0.09){
        //     sprite.scale.y += delta * 0.002;
        //     sprite.scale.x += delta * 0.002;
        // } 
        // if(timer >= 50) {
        //     timer = 0;
        //     sprite.x = app.screen.width * Math.random();
        //     sprite.y = app.screen.height * Math.random();;
        //     randomXSpeed = (Math.random() * 5) + 5;
        //     randomYSpeed = (Math.random() * 5) + 5;
        //     sprite.scale.y = 0;
        //     sprite.scale.x = 0;
        // }         
        //     app.stage.addChild(sprite, sprite);
        for (let i = 0; i < starAmount; ++i) {
            timer += delta;
            const sprite = stars[i];
            sprite.x += randomXSpeed * delta;
            sprite.y += randomYSpeed * delta;
            if(sprite.scale.x <= 0.09){
            sprite.scale.y += delta * 0.002;
            sprite.scale.x += delta * 0.002;
            } 
            if(timer >= starDuration) {
            timer = 0;
            sprite.x = app.screen.width * Math.random();
            sprite.y = app.screen.height * Math.random();;
            // randomXSpeed = (Math.random() * 5) + 5;
            // randomYSpeed = (Math.random() * 5) + 5;
            sprite.scale.y = 0;
            sprite.scale.x = 0;
            }
        }
        })

        return () => {
            // On unload completely destroy the application and all of it's children
            app.destroy(true, true);
          };
    }, []);

    return (
        <div ref={ref} />
    );
}



const VideoWrap = ({VideoWrapSrc=''}) => {
    return (
        <div className='videoWrap'
            style={{
                position: 'relative',
                overflow: "hidden",
            }}
        >

            {/* left는 영상 프레임 위로 올라와야 함 */}
            <div className="left" 
            style={{
                position: 'relative',
                zIndex: '10'
                }}>
                <video 
                style={{ 
                    position: 'relative',
                    zIndex: '0' 
                }}
                autoPlay muted loop playsInline>
                    <source src={VideoWrapSrc} type='video/mp4' />
                </video>
                <div className="holo" 
                    style={{ 
                    position: "absolute",
                    left: '36.3%',
                    top: '135%'
                }}>

                </div>
                <div
                    className="holoImage"
                        style={{
                            position: 'absolute',
                            left: '22%',
                            top: '107%',
                            backgroundImage: `url(${holo})`,
                            width: '318px',
                            bacgkroundColor: 'red',
                            height: '117px',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>

            </div>

            
            <div 
            style={{ position: "absolute", zIndex: '0' }}>
                <VideoWrapAnimation />
            </div>


            <div className="right">
                <div className='title'>
                    새로운 차원을 경험하세요.
                </div>
                <div className='text'>
                    영상으로 배우다 중간에 포기한 적이 많았나요?<br></br>
                    코딩이 어렵고 낯설게만 느껴진다면<br></br>
                    생생한 3D로 즐기는 새로운 차원의 여정을 시작해보세요.   
                </div>
            </div>
        </div>
    );
}

export default VideoWrap;