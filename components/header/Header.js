import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"


function Header() {
    return (
        <div className="flex items-center">
            <Button
              color="gray"
              buttonType="outline"
              rounded={true}
              iconOnly={true}
              ripple="dark"
              className="hidden md:inline-flex h-20 w-20 border-0"
            
            >
                <Icon
                    size="3xl"
                    name="menu"
                />
            </Button>


        </div>
    )
}

export default Header
