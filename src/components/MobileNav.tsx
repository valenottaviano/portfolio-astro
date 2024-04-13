import { Icon } from "@iconify/react"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { ModeToggle } from "./ModeToggle"


export const MobileNav = (props: any) => {

  return <Sheet>
    <SheetTrigger>
      <Button variant="outline" className="w-10 h-10 p-0">
        <Icon icon="mdi:menu" className="text-xl" />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <div className="h-full flex flex-col items-center justify-center gap-5">
        {props.routes.map((route: any) => {
          return <a key={route.path} href={route.path}>{route.name}</a>
        })}
        {/* <ModeToggle /> */}
      </div>
    </SheetContent>
  </Sheet>
}

