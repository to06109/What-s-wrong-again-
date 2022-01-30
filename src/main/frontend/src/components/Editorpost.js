import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import '../css/Editor.css'

// import 'codemirror/lib/codemirror.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

// code-syntax-highlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

// color-syntax
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'

//Viewer
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

function EditorPost() {
    //에디터를 가리킴
    const editorRef = useRef()
    // const viewerRef = useRef()

    const btnClickListener = () => {
        const editorInstance = editorRef.current.getInstance()
        const getContent_md = editorInstance.getMarkdown()
        console.log('-- 마크다운 --')
        // console.log(getContent_md)

        //Editor 버전 2.x는 getHtml(), 3.x는 getHTML()
        const getContent_html = editorInstance.getHTML()
        console.log('-- HTML --')
        // console.log(getContent_html)

        localStorage.setItem('paragraph', getContent_html)
    }

    const View = () => {
        const test = document.querySelector('#viewer')

        // const viewerInstance = viewerRef.current.getInstance()
        const view = localStorage.getItem('paragraph')
        test.innerHTML = view

        // viewerInstance.setMarkdown(view)
        // paintGreeting(view);

        console.log(view)
    }

    return (
        <div>
            <h1 className="title">에러 작성</h1>
            <div className="full-container flex">
                <div className="flex-container flex">
                    <div className="box2">에러명</div>
                    <input
                        className="post_error_name"
                        type="search"
                        aria-label="HomeSearch"
                    />
                </div>
                <div className="flex-container flex">
                    <div className="box2">카테고리</div>
                    <input
                        className="post_error_name"
                        type="search"
                        aria-label="HomeSearch"
                    />
                </div>
                <div>
                    <Editor
                        previewStyle="vertical"
                        height="40vh"
                        initialEditType="markdown"
                        initialValue="내용을 입력하세요."
                        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                        ref={editorRef}
                    />
                </div>

                <button onClick={btnClickListener} type="submit" className="submitBtn">
                    Post
                </button>
                <button onClick={View} className="cancelBtn">
                    Cancel
                </button>

                <div>
                    <h1> TOAST UI Viewer 만들기 </h1>
                    <div id="viewer"></div>
                </div>
            </div>
        </div>
    )
}

export default EditorPost