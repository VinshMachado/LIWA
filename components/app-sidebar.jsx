import React from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  HeartHandshake,
  BookCheck,
  Phone,
  HomeIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: (props) => <Home {...props} />,
  },
  {
    title: "Our Services",
    url: "/SecondPage",
    icon: (props) => <BookCheck {...props} />,
  },
  {
    title: "Why Choose Us",
    url: "/whyChoseUs",
    icon: (props) => <HeartHandshake {...props} />,
  },
  {
    title: "Contact Us",
    url: "/contactPage",
    icon: (props) => <Phone {...props} />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-cyan-100">
        <SidebarGroup>
          <SidebarGroupLabel>
            <b className="text-3xl drop-shadow-lg text-pink-500">Dashboard</b>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full h-12 bg-cyan-50">
                    <a href={item.url} className="flex items-center gap-2">
                      <div className=" w-8 h-8 mr-5">
                        {React.createElement(item.icon, {
                          className: "w-10 h-10 text-cyan-700",
                        })}
                      </div>
                      <span className="font-bold text-cyan-500">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
