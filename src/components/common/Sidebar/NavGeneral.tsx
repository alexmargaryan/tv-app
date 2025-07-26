import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { NAVIGATION_OPTIONS_GENERAL } from "./constants";

const NavGeneral = () => {
  return (
    <SidebarGroup className="p-0">
      <SidebarMenu className="flex flex-col">
        {NAVIGATION_OPTIONS_GENERAL.map((option) => (
          <SidebarMenuItem key={option}>
            <SidebarMenuButton className="text-lg font-semibold text-[#858688] hover:bg-transparent hover:text-white">
              <span>{option}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavGeneral;
