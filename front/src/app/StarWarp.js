import React, { useRef, useEffect, useState } from "react";
import { Application, Texture, Sprite } from "pixi.js";
import blue from "../Assets/blue.png"
import planet from "../Assets/planet.png"
import particle1 from "../Assets/particle1.png"
import particle2 from "../Assets/particle2.png"
import particle3 from "../Assets/particle3.png"

const StarWarp = () => {
  const ref = useRef(null);

  const [warpSpeed, setWarpSpeed] = useState(0.035)
  const changeWarpSpeed = () => {
    setWarpSpeed(0.035 + (window.scrollY*0.001));
  }
  useEffect(() => {
    // // 마우스커서 사용시 활성화해야 함
    // window.addEventListener('scroll', changeWarpSpeed, { capture: true });

    // 윈도우 크기에 맞게 픽시 앱 설정
    const app = new Application({ backgroundAlpha: 0,resizeTo: window })

    // // 윈도우 크기에 맞게 픽시 앱 설정
    // const app = new Application({ backgroundColor: '#0b0d45', width: '1920', height: '1080'})


    // ★★★★★★★★★★★ 배경 관련 ★★★★★★★★★★★
    // 이미지 경로
    // const backgroundImage = Sprite.from(planet);

    // 이미지 앵커, 포지션
    // backgroundImage.anchor.x = 0;
    // backgroundImage.anchor.y = 0;
    // backgroundImage.position.x = 0;
    // backgroundImage.position.y = 0;
    
    // 윈도우 크기에 맞게 이미지 크기 조절
    // app.renderer.on('resize', (width, height) => {
    //     backgroundImage.position.set(app.screen.width/2, app.screen.height/2); //same as your innerWidth
    //     backgroundImage.anchor.set(0.5);
    //     backgroundImage.scale.set(Math.min(app.screen.width / backgroundImage.texture.width, 0.9));
    // })



  
    // ★★★★★★★★★★★ 스타워프 관련 ★★★★★★★★★★★
    // 고정된 파티클 이미지
    const starTexture = Texture.from(particle3);
    // 랜덤으로 선택될 파티클 이미지 리스트
    const starTextureList = [particle1, particle2, particle3];

    const starAmount = 1000;
    let cameraZ = 0;
    const fov = 20;
    const baseSpeed = 0.035;
    let speed = 0;
    // let warpSpeed = 0.035; // init: 0
    const starStretch = 1;
    const starBaseSize = 0.01; // init: 0.01

    const randomizeStar = (star, initial) => {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

        // Calculate star positions with radial random coordinate so no star hits the camera.
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }

    // Create the stars
    const stars = [];
    for (let i = 0; i < starAmount; ++i) {
        // 랜덤 인덱스 생성
        let randomIndex = Math.floor(Math.random() * 3);
        const star = {
            // 고정된 파티클 이미지
            // sprite: new Sprite(starTexture),

            // 랜덤 인덱스로 파티클 이미지 선택
            sprite: new Sprite(Texture.from(starTextureList[randomIndex])),
            z: 0,
            x: 0,
            y: 0,
        };
        star.sprite.anchor.x = 0.5;
        star.sprite.anchor.y = 0.7;
        randomizeStar(star, true);
        app.stage.addChild(star.sprite);
        stars.push(star);
    }

    // Add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    // Listen for animate update
    app.ticker.add((delta) => {
        // Simple easing. This sould be chnage to proper easing function when used for real.
        speed += (warpSpeed - speed) / 20;
        cameraZ += delta * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; ++i) {
            const star = stars[i];
            if (star.z < cameraZ) randomizeStar(star);

            // Map star 3d position to 2d with really simple projection
            const z = star.z - cameraZ;
            star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
            star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

            // Calculate star scale & rotation.
            const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
            const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
            const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
            const distanceScale = Math.max(0, (2000 - z) / 2000);
            star.sprite.scale.x = distanceScale * starBaseSize;
            // Star is looking towards center so that y axis is towards center.
            // Scale the star depending on how fast we are moving, what the 
            // stretchfactor is and depending on how far away it is from the center.
            // star.sprite.scale.y = distanceScale * starBaseSize;
            star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;

            star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
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

export default StarWarp;