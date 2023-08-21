import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// react-quill docs
// https://www.npmjs.com/package/react-quill

// image resize를 위한 모듈
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

// Quill 인스턴스
let reactQuillRef = null;

const CustomHeart = () => <span>♡</span>;

const insertHeart = () => {
    // Quill 인스턴스
    const quillRef = reactQuillRef.getEditor();
    const cursorPosition = quillRef.getSelection().index;
    quillRef.insertText(cursorPosition, "♡");
}


// quill 폰트
const fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['10px', '20px', '100px', '200px'];
// Quill.register(fontSizeStyle, true);


const CustomToolbar = () => (
    <div id="toolbar2">
        <select
        className='ql-size'>
            <option value="10px">10px</option>
            <option value="20px">20px</option>
            <option value="100px">100px</option>
            <option value="200px">200px</option>
        </select>
        <select
        className='ql-color'>
            <option value="yellow">1</option>
            <option value="orange">2</option>
            <option value="red">3</option>
            <option value="blue">4</option>
            <option value="green">5</option>
            <option value="black">6</option>
            <option value="grey">7</option>
        </select>
        <button className="ql-bold">1</button>
        <button className="ql-italic" value="italic">1</button>
        {/* <select className="ql-align">
            <option value="center">1</option>
            <option value="right">2</option>
            <option value="justify">3</option>
        </select> */}
        <button className="ql-image">1</button>
        <button className="ql-code-block">1</button>
        {/* <button className="ql-insertHeart">
            <CustomHeart />
        </button> */}
        {/* <button className="ql-download"></button> */}
    </div>
);

const eventHandler = (e) => {
    console.log(e);
}

const Editor2 = () => {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: {   
            container: "#toolbar2",
        },
        ImageResize: {
            parchment: Quill.import('parchment')
        },
    }

    return (
        <div>
            <CustomToolbar />
            <ReactQuill 
                // theme="snow" 
                modules={modules}
                value={value} 
                // onChange={setValue} 
                onChange={setValue} 
                style={{width: '944.24px', height: '235.46px'}} />
        </div>
    );
}

export default Editor2;