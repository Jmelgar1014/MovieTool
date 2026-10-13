import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FilterTabs({ tabSelection, setTabSelection }) {
  return (
    <Tabs className="" value={tabSelection} onValueChange={setTabSelection}>
      <TabsList className="h-16">
        <TabsTrigger className="" value="All">
          All
        </TabsTrigger>
        <TabsTrigger value="Watched">Watched</TabsTrigger>
        <TabsTrigger value="To Watch">To Watch</TabsTrigger>
        <TabsTrigger value="Favorites">Favorites</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
