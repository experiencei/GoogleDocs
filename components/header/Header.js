import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"


function Header() {
    return (
        <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
              color="gray"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="h-20 w-20 border-0"
            
            >
                <Icon
                    size="3xl"
                    name="menu"
                />
            </Button>
            <Icon 
                name="description"
                size="5xl"
                color="blue"
            />
           <h1
           className="ml-2 text-gray-700 text-2xl"
           >Docs</h1>

            <div className="flex flex-grow">
                 <Icon 
                     name="search"
                     size="3xl"
                     color="darkgray"
                 />
                 <input
                      type="text"
                      placeholder="searh"
                 />
            </div>
        </div>
    )
}

export default Header
