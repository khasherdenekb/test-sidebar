import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center w-full bg-white container-wrapper">
      <div className="container py-4 max-w-[1800px] mx-auto px-4">
        <SidebarProvider>
          <AppSidebar>
            <main className="flex-1">{children}</main>
          </AppSidebar>
        </SidebarProvider>
      </div>
    </div>
  );
}
