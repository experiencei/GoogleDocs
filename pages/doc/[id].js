import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

import { getSession , signOut , useSession } from "next-auth/client";




function Doc() {
    return (
        <div>
            <Login/>
        </div>
    )
}

export default Doc;
