import Blog from "@/components/blog";
import EventComment from "@/components/event/EventComment";
import EventInfo from "@/components/event/EventInfo";
import EventPlayer from "@/components/event/EventPlayer";
import EventTitle from "@/components/event/EventTitle";
import JoinEvent from "@/components/event/JoinEvent";
import Hero from "@/components/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="first:mt-5 md:first:mt-10">
      <div className="container mx-auto px-3 xl:px-10">
        <Hero />
      </div>
      <div className="container mx-auto mt-5 md:mt-10 flex flex-col xl:flex-row justify-between xl:gap-15 px-3 pb-10 xl:pb-0 xl:px-10 ">
        <div className="flex-1">
          <EventTitle />
          <div className="mt-10 md:mt-[56px]">
            <Tabs defaultValue="info" className="gap-0">
              <TabsList className="grid w-full grid-cols-3 h-[50px] md:h-[81px]">
                <TabsTrigger value="info">Info</TabsTrigger>
                <TabsTrigger value="player">Player</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <EventInfo />
              </TabsContent>
              <TabsContent value="player" className="pb-16">
                <EventPlayer />
              </TabsContent>
              <TabsContent value="comments" className="pb-16">
                <EventComment />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="w-full md:min-w-[400px] max-w-[400px]">
          <JoinEvent />
        </div>
      </div>
      <div className="bg-white ">
        <Blog />
      </div>
    </main>
  );
}
