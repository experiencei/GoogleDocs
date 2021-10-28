import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/dist/client/router";


function DocumentRow({ id , fileName, date}) {
    const router = useRouter();


    return (
        <div onClick={() => router.push(`/docs/${id}`)} className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
              <Icon
              name="article"  size="3xl" color="blue"/>
              <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
              <p className="pr-5 text-sm ">{date?.toDate().toLocaleDateString()}</p>

              <Button
              color="gray"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="border-0"
            
            >
                <Icon
                    size="3xl"
                    name="more_vert"
                />
            </Button>
        </div>
    )
}

export default DocumentRow
