import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import db from "../../components/firebase/firebase"
import  { getSession ,signOut , useSession } from "next-auth/client"
import Login from "../../components/login/Login"


function Doc() {

  const [session] = useSession();
  if(!session) return <Login/>;

  const router = useRouter();
  const { id } = router.query;

  const [snapshot , loadingSnapshot] = useDocumentOnce(db.collection("userDocs").doc(session.user.email).collection("docs").doc(id));

//   redirect the user
 if(!loadingSnapshot && !snapshot?.data()?.fileName)  {
     router.replace("/")
 }


    return (
        <div>
            <header  className="flex justify-between items-center p-3 pb-1">
              <span  onClick={() => router.push('/')}  className="cursor-pointer">
                  <Icon name="description" size="5xl" color="blue"/>

              </span>
              <div className="flex-grow px-2">
              <h2>{snapshot?.data()?.fileName}</h2>
                <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                    <p className="option">File</p>
                    <p className="option">Edit</p>
                    <p className="option">View</p>
                    <p className="option">Insert</p>
                    <p className="option">Format</p>
                    <p className="option">Tools</p>
                </div>
              </div>
            </header>
        </div>
    )
}

export default Doc;
