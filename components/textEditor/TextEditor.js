import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import dynamic from 'next/dynamic';
// import { Editor } from "react-draft-wysiwyg"

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(module => module.Editor), {
    ssr: false,
  });

function TextEditor() {
    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor />
        </div>
    )
}

export default TextEditor;
