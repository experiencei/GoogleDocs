import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import db from "../../components/firebase/firebase"
import { getSession , signOut , useSession } from "next-auth/client";
import Login from "../../components/login/Login"


function Doc() {
  const [ session] = useSession();

  if(!session) return <Login/>
 
  

    return (
        <div>
            <Login/>
        </div>
    )
}

export default Doc;
