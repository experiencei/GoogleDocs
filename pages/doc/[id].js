import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import db from "../../components/firebase/firebase"
import { getSession , signOut , useSession } from "next-auth/client";
import Login from "../../components/login/Login"


function Doc() {
  const [ session] = useSession();
  const router = useRouter();
  if(!session) return <Login/>
 


    return (
        <div>
            <header  className="flex justify-between items-center p-3 pb-1">
              <span  onClick={() => router.push('/')}  className="cursor-pointer">
                  <Icon name="description" size="5xl" color="blue"/>

              </span>
            </header>
        </div>
    )
}

export default Doc;
