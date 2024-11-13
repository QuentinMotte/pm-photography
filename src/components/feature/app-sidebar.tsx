import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  GalleryHorizontalEnd,
  Home,
  Images,
  MessageCircle,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Gallery",
    url: "/gallery",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Selection",
    url: "/selection",
    icon: Images,
  },
];

export function AppSidebar() {
  const { toggleSidebar, state: sidebarState } = useSidebar();

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuButton onClick={toggleSidebar} isActive>
              <ArrowLeft
                className={`transition-transform text-lg duration-200 ${
                  sidebarState === "collapsed" ? "rotate-180" : ""
                }`}
              />
              <span>Pm's Photo</span>
            </SidebarMenuButton>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          className={cn(
            "items-center gap-2",
            sidebarState === "collapsed"
              ? "flex flex-col"
              : "flex items-center gap-2"
          )}
        >
          <SidebarMenuButton variant={"outline"} asChild>
            <ModeToggle />
          </SidebarMenuButton>
          <SidebarMenuButton
            className="w-9 flex items-center justify-center"
            variant="outline"
          >
            <MessageCircle />
          </SidebarMenuButton>
          <SidebarMenuButton
            className="flex-1"
            variant={"outline"}
            onClick={toggleSidebar}
          >
            <User />
            <span>Login</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
