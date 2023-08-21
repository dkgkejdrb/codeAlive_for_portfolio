import React, { useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AttachmentHandler } from 'quill-upload';
import EditorSlice from '../EditorSlice';
import { useDispatch } from 'react-redux';

// react-quill docs
// https://www.npmjs.com/package/react-quill

const instruction = 
'* 겪고 있는 문제 상황을 최대한 자세하게 작성해주세요.\n' +
'* 문제 해결을 위해 어떤 시도를 해보았는지 구체적으로 함께 알려주세요.\n' +

'전체 화면 캡처\n' +
'보고 계신 화면 전체를 캡처해 주시면, 튜터님들이 빠르게 상황을 이해할 수 있어요.\n' +

'작성한 코드 및 에러 메세지\n' +
'오류 발생 시, 작성한 코드 전체와 에러 메시지를 첨부해 주세요.\n' +
'Tip 1) </> 아이콘을 눌러 코드박스를 만들어 보세요.\n' +
'Tip 2) Ctrl+A(맥의 경우 Command+A) 단축키로 코드를 한 번에 선택할 수 있어요!'

const Editor = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    // const CustomToolbar = () => (
    //     <div id="toolbar">
    //         <select
    //         className='ql-size'>
    //             <option value="10px">10px</option>
    //             <option value="20px">20px</option>
    //             <option value="100px">100px</option>
    //             <option value="200px">200px</option>
    //         </select>
    //         <select
    //         className='ql-color'>
    //             <option value="yellow"></option>
    //             <option value="orange"></option>
    //             <option value="red"></option>
    //             <option value="blue"></option>
    //             <option value="green"></option>
    //             <option value="black"></option>
    //             <option value="grey"></option>
    //         </select>
    //         <button className="ql-bold"></button>
    //         <button className="ql-italic" value="italic"></button>
    //         <select className="ql-align">
    //             <option value="center"></option>
    //             <option value="right"></option>
    //             <option value="justify"></option>
    //         </select>
    //         <button className="ql-image"></button>
    //         <button className="ql-code-block"></button>
    //         {/* <button className="ql-download"></button> */}
    //     </div>
    // );

    // 커스텀 toolbar
    // const modules = {
    //     toolbar: {
    //         container: "#toolbar",
    //     },
    //     ImageResize: {
    //         parchment: Quill.import('parchment')
    //     },
    // }

    useEffect(()=>{
        dispatch(EditorSlice.actions.setValue(value));
    }, [value]);

    // 제공 toolbar 수정사용
    const modules = {
        toolbar: [
            // [{'size': ['small', false, 'large', 'huge']}],
            [{'header' : [1, 2, 3, 4]}], 
            [{'color' : ['yellow', 'red', 'orange', 'blue', 'black']}],
            ['bold'],
            ['italic'],
            [{'align' : ['justify', 'center', 'right']}],
            ['image'],
            ['code-block'],
        ],
        ImageResize: {
            parchment: Quill.import('parchment')
        },
    }


    // 제공 toolbar 수정사용
    return(
        <div>
            <ReactQuill 
                placeholder={instruction}
                theme="snow" 
                modules={modules}
                value={value} 
                // onChange={setValue} 
                onChange={setValue} 
                style={{width: '944.24px', height: '235.46px'}} />
        </div>
    );
}

export default Editor;