import axios from "axios"
import React, { useEffect, useState } from 'react';
import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import EditorSlice from '../EditorSlice';
import { useDispatch } from 'react-redux';

// react-quill docs
// https://www.npmjs.com/package/react-quill

// react-quilljs docs, Modal 창에 ref로 파싱
// https://github.com/gtgalone/react-quilljs

// image resize를 위한 모듈
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

// // Quill 인스턴스
// let reactQuillRef = null;

// const CustomHeart = () => <span>♡</span>;

// const insertHeart = () => {
//     // Quill 인스턴스
//     const quillRef = reactQuillRef.getEditor();
//     const cursorPosition = quillRef.getSelection().index;
//     quillRef.insertText(cursorPosition, "♡");
// }


let SERVER_POST_URL = 'http://192.168.54.93:3560/api/v1/user/file/course/image/large';
const TOKEN = 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdXRvTG9naW4iLCJpc3MiOiJodHRwOi8vYXBpcy12bGMuY2R3aWRlLmNvbSIsImF1ZCI6Ind3dy45NDA3LmNvLmtyIiwibWVtYmVyX2lkIjoxNTI5MTE4LCJtZW1iZXJfbmFtZSI6IuqwlSDrj5nqsbQiLCJzdGRfaWQiOjE1MjkxMTgsIm1lbWJlcl9sb2dpbl90eXBlIjoiUyIsImlwIjoiMTkyLjE2OC41NC42MSIsImJyaW5mbyI6IiIsImlhdCI6MTY3MzMyNjEyMiwiZXhwIjoxNjc1OTE4MTIyfQ.NwhYDRzMcN0HoaAnclqnlLcoCrt8fs90TEGKWPT-Ymo"'

let SERVER_GET_URL = 'http://192.168.54.93:3560/api/v1/user/file/course/image/large';

const placeholder = 
'질문내용\n' + 
'* 문제 상황을 최대한 자세하게 작성해주세요.\n' +
'* 문제 해결을 위해 어떤 시도를 해보았는지 구체적으로 함께 알려주세요.\n\n' +

'캡쳐화면\n' +
'문제가 있는 화면 전체를 캡처해 주시면, 튜터님들이 빠르게 상황을 이해할 수 있어요.\n\n' +

'작성 코드 및 에러 메시지\n' +
'오류 발생 시, 작성한 코드 전체와 에러 메시지를 첨부해 주세요.\n' +
'Tip 1) </> 아이콘을 눌러 코드박스를 만들어 보세요.'

// react-quill
const fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px'];
Quill.register(fontSizeStyle, true);


const CustomToolbar = () => (
    <div id="toolbar">
        <select
        className='ql-size'>
            <option value="10px">10px</option>
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
        </select>
        <select
        className='ql-color'>
            <option value="yellow"></option>
            <option value="orange"></option>
            <option value="red"></option>
            <option value="blue"></option>
            <option value="green"></option>
            <option value="black"></option>
            <option value="grey"></option>
        </select>
        <button className="ql-bold">1</button>
        <button className="ql-italic"></button>
        <select className="ql-align">
            <option value="center">1</option>
            <option value="right">2</option>
            <option value="justify">3</option>
        </select>
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




// quill 폰트
// const fontSizeStyle = Quill.import('attributors/style/size');
// fontSizeStyle.whitelist = ['10px', '20px', '100px', '200px'];
// Quill.register(fontSizeStyle, true);

const Editor1 = () => {
    const dispatch = useDispatch();


    const { quill, quillRef } = useQuill({
        modules: {
            toolbar: '#toolbar',
            ImageResize: {
                parchment: Quill.import('parchment')
            },
        },
        placeholder,
        formats: ["size", "color",  "bold", "italic", "align", "image", "code-block"] // 중요
    });

    const insertToEditor = (url) => {


        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', url);
    };

    const saveToServer = (file) => {
        const body = new FormData();
        body.append('file', file);

        console.log(body);

        axios.post(SERVER_POST_URL, 

            body,
            
            {
                headers: {
                    Authorization: TOKEN
                },
            }
            )
            .then(function (response) {
                // console.log(response.data);
                const SERVER_GET_URL_TARGET = `${SERVER_GET_URL}/${response.data.subDirectory}/${response.data.rename}`
                // 여기서 imageFile.name 과 imageFile.path 에 각각 rename과 directory를 보냄
                dispatch(EditorSlice.actions.setImageFileName(response.data.rename));
                dispatch(EditorSlice.actions.setImageFilePath(SERVER_GET_URL_TARGET));
                // insertToEditor(SERVER_GET_URL_TARGET);
                axios.get(SERVER_GET_URL_TARGET, 
                    {
                        headers: {
                            Authorization: TOKEN
                        },
                        responseType: 'arraybuffer'
                    }
                    )
                    .then(function (response) {
                        // console.log(response)
                        // insertToEditor(response.data);
                        // Buffer.from(response.data, 'binary').toString('base64')
                        
                        let blob = new Blob(
                            [response.data],
                            { type: response.headers['content-type'] }
                        )
                        let image = URL.createObjectURL(blob)
                        insertToEditor(image);

                    }).catch(function (error) {
                       console.log(error)
                    })

            }).catch(function (error) {
               window.alert(
                `1. 사진 파일의 용량은 최대(25MB)까지만 업로드하실 수 있습니다.\n2. 업로드 가능한 파일의 형식은 'png, jpg'입니다.`
                );
            })
    };

    const selectLocalImage = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            saveToServer(file);
        }
    }

    useEffect(() => {
        if (quill) {
            quill.getModule('toolbar').addHandler('image', selectLocalImage);

            quill.on('text-change', (delta, oldDelta, source) => {
            dispatch(EditorSlice.actions.setText(quill.getText()));
            dispatch(EditorSlice.actions.setHtml(quillRef.current.firstChild.innerHTML));
            });
        }
    }, [quill]);

    return (
        <div style={{ width: '800px', marginTop: '13px' }}>
            <CustomToolbar />
            <div ref={quillRef}
                style={{width: '800px', minHeight: '383px'}}
            ></div>
        </div>
    );
}

export default Editor1;