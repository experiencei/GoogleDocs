import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { Editor } from "react-draft-wysiwyg"

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(module => module.Editor), {
    ssr: false,
  });

function TextEditor() {
    return (
        <div>
            <Editor />
        </div>
    )
}

export default TextEditor;
