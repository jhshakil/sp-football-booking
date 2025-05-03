import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "./BlogCard";

const AllBlogs = [
  {
    title: "Legends Rise on the Field",
    date: "Thu, Dec 5 . 12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    price: 320,
    available: 2,
    total: 8,
    booked: 6,
    category: "Advanced",
    tags: ["Football", "Below 25y"],
    images: ["/images/blog-img-1.png", "/images/blog-img-2.png"],
  },
  {
    title: "Chasing Glory: Football Showdown",
    date: "Thu, Dec 5 . 12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    price: 320,
    available: 2,
    total: 8,
    booked: 6,
    category: "Advanced",
    tags: ["Football", "Below 25y"],
    images: ["/images/blog-img-2.png", "/images/blog-img-1.png"],
  },
  {
    title: "United We Play, United Win",
    date: "Thu, Dec 5 . 12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    price: 320,
    available: 2,
    total: 8,
    booked: 6,
    category: "Advanced",
    tags: ["Football", "Below 25y"],
    images: ["/images/blog-img-1.png", "/images/blog-img-2.png"],
  },
  {
    title: "Chasing Glory: Football Showdown",
    date: "Thu, Dec 5 . 12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    price: 320,
    available: 2,
    total: 8,
    booked: 6,
    category: "Advanced",
    tags: ["Football", "Below 25y"],
    images: ["/images/blog-img-2.png", "/images/blog-img-1.png"],
  },
  {
    title: "United We Play, United Win",
    date: "Thu, Dec 5 . 12.30AM - 12.30PM",
    location: "Bashundhara Sports Complex",
    price: 320,
    available: 2,
    total: 8,
    booked: 6,
    category: "Advanced",
    tags: ["Football", "Below 25y"],
    images: ["/images/blog-img-1.png", "/images/blog-img-2.png"],
  },
];

const Blog = () => {
  return (
    <div className="p-3 xl:p-10">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <div className="flex justify-between gap-5">
          <h2 className="text-xl md:text-2xl font-bold">
            Other events you may like
          </h2>
          <div className="flex gap-4 items-center">
            <CarouselPrevious className="relative translate-0 left-0 top-0 bg-[#F4F5EF] border-0 size-8 md:size-12 [&>svg]:!size-4 md:[&>svg]:!size-6" />
            <CarouselNext className="relative translate-0 left-0 top-0 bg-[#F4F5EF] border-0 size-8 md:size-12 [&>svg]:!size-4 md:[&>svg]:!size-6" />
          </div>
        </div>
        <CarouselContent className="mt-3">
          {AllBlogs?.map((blog, i) => (
            <CarouselItem
              key={`blog-item-${blog.title}-${i}`}
              className="md:basis-1/2 xl:!basis-1/3 basis-full"
            >
              <BlogCard {...blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Blog;
