import { useState } from "react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { NAVIGATION_OPTIONS } from "./constants";

const NavMain = () => {
  const { open } = useSidebar();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <SidebarGroup className="p-0">
      <SidebarMenu className="flex flex-col gap-4">
        {NAVIGATION_OPTIONS.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              className={cn(
                "flex items-center gap-8.5 px-4 py-7 text-2xl font-medium hover:bg-[#3a486d] hover:font-semibold hover:text-white",
                {
                  "bg-[#3a486d] font-semibold text-white":
                    activeItem === item.title,
                },
                {
                  "mx-auto min-h-16 min-w-16 items-center justify-center rounded-full":
                    !open,
                }
              )}
              onClick={() => setActiveItem(item.title)}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-6 w-6 object-contain"
              />
              {open && <span>{item.title}</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
