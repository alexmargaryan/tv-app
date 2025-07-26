import * as React from "react";

import UserAvatar from "@/assets/images/avatar.jpg";
import NavMain from "@/components/common/Sidebar/NavMain";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import NavGeneral from "./NavGeneral";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, setOpen } = useSidebar();
  const [hoverTimeout, setHoverTimeout] = React.useState<NodeJS.Timeout | null>(
    null
  );

  const onMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    setOpen(true);
  };

  const onMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 300);

    setHoverTimeout(timeout);
  };

  React.useLayoutEffect(() => {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="text-white group-data-[side=left]:border-r-0"
    >
      <SidebarHeader
        className={cn("bg-black p-6 opacity-80", {
          hidden: !open,
        })}
      >
        <div className="flex items-center gap-3">
          <Avatar className="size-16">
            <AvatarImage src={UserAvatar} className="object-cover" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <p className="text-xl font-medium">Daniel</p>
        </div>
      </SidebarHeader>
      <SidebarContent
        className={cn("bg-black p-6 pt-0 opacity-80", {
          "pt-24 opacity-100": !open,
        })}
      >
        <NavMain />
      </SidebarContent>
      {open && (
        <SidebarFooter className="bg-black p-6 opacity-80">
          <NavGeneral />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
