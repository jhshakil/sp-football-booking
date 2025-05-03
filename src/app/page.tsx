import EventComment from "@/components/event/EventComment";
import EventInfo from "@/components/event/EventInfo";
import EventPlayer from "@/components/event/EventPlayer";
import EventTitle from "@/components/event/EventTitle";
import JoinEvent from "@/components/event/JoinEvent";
import Hero from "@/components/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="px-3 xl:px-10 flex flex-col gap-5 md:gap-10 first:mt-5 md:first:mt-10 pb-8">
      <Hero />
      <div className="flex justify-between md:gap-15">
        <div className="min-w-[900px]">
          <EventTitle />
          <div className="mt-[56px]">
            <Tabs defaultValue="info" className="gap-0">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Info</TabsTrigger>
                <TabsTrigger value="player">Player</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <EventInfo />
              </TabsContent>
              <TabsContent value="player">
                <EventPlayer />
              </TabsContent>
              <TabsContent value="comments">
                <EventComment />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="w-full">
          <JoinEvent />
        </div>
      </div>
    </main>
  );
}
