import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

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

function Editorpost() {
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

  // const ToView = (getContent_md) => {
  //   const editorInstance = editorRef.current.getInstance()
  //   editorInstance.setMarkdown(getContent_md)
  // }

  // const GetContent = () => {
  //   const editorInstance = editorRef.current.getInstance()
  //   const getContent_md = editorInstance.getMarkdown()
  //   editorInstance.setMarkdown(getContent_md)
  // }
  // const viewer = new Viewer({
  //   el: document.querySelector('#viewer'),
  //   height: '600px',
  //   initialValue: getContent_md,
  // })

  // console.log(viewer)

  return (
    <div>
      <h1> TOAST UI Editor 만들기 </h1>
      <div>
        <Editor
          previewStyle="vertical"
          height="70vh"
          initialEditType="markdown"
          initialValue="마크다운으로 내용을 입력하세요."
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
  )
}

export default Editorpost
