import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import dynamic from 'next/dynamic';
import { useState } from "react";
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import db from "../firebase/firebase";
import { useRouter } from "next/dist/client/router";

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(module => module.Editor), {
    ssr: false,
  });

function TextEditor() {
   const [editorState , setEditorState] = useState(EditorState.createEmpty());
   const router = useRouter();
   const { id } = router.query;

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);


        db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
    };


    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor 
               editorState={editorState}
               onEditorStateChange={onEditorStateChange}
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
            />
        </div>
    )
}

export default TextEditor;
