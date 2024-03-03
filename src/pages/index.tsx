import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Company from "@/components/company";
import NotAvailable from "@/components/NotAvailable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn("mx-auto max-w-6xl px-4 py-10", inter.className)}>
      <h1 className="text-3xl font-semibold">Settings</h1>
      <Tabs defaultValue="company" className="mt-8">
        <TabsList className="flex w-full overflow-x-auto md:w-max">
          <TabsTrigger value="profile">Your Profile</TabsTrigger>
          <TabsTrigger value="company">Company Info</TabsTrigger>
          <TabsTrigger value="seats">Manage Seats</TabsTrigger>
          <TabsTrigger value="contact">Do not Contact</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <NotAvailable />
        </TabsContent>
        <TabsContent value="company" className="w-full sm:p-4">
          <Company />
        </TabsContent>
        <TabsContent value="seats">
          <NotAvailable />
        </TabsContent>
        <TabsContent value="contact">
          <NotAvailable />
        </TabsContent>
        <TabsContent value="integrations">
          <NotAvailable />
        </TabsContent>
      </Tabs>
    </main>
  );
}
