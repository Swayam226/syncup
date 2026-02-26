import { ProfileCard } from "@/components/home/profile-card"
import { AnalyticsWidget } from "@/components/home/analytics-widget"
import { SosmedStories } from "@/components/home/sosmed-stories"
import { CreatePost } from "@/components/home/create-post"
import { FeedPost } from "@/components/home/feed-post"
import { HireBanner } from "@/components/home/hire-banner"
import { Suggestions } from "@/components/home/suggestions"

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] gap-5 p-5">
      {/* Left Column */}
      <aside className="hidden w-[240px] shrink-0 flex-col gap-5 lg:flex">
        <ProfileCard />
        <AnalyticsWidget />
        <SosmedStories />
      </aside>

      {/* Center Feed */}
      <section className="flex min-w-0 flex-1 flex-col gap-5">
        <CreatePost />
        <FeedPost
          author="Pan Feng Shui"
          avatar="/images/avatar-pan.jpg"
          date="12 April at 09.28 PM"
          content="Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article"
          boldText="ABC Company"
          image="/images/post-meeting.jpg"
          likes={3}
          reactions={8}
          comments={25}
          shares={231}
          saved={24}
        />
        <FeedPost
          author="Clara Kim"
          avatar="/images/avatar-clara.jpg"
          date="12 April at 09.28 PM"
          content="A Great Way To Generate All The Motivation You Need To Get Fit."
          likes={3}
          reactions={8}
          comments={25}
          shares={231}
          saved={24}
        />
      </section>

      {/* Right Column */}
      <aside className="hidden w-[260px] shrink-0 flex-col gap-5 xl:flex">
        <HireBanner />
        <Suggestions />
      </aside>
    </div>
  )
}
