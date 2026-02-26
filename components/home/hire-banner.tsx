import Image from "next/image"

export function HireBanner() {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm">
      <h4 className="text-base font-bold text-foreground">
        Hire faster with SyncUp!
      </h4>
      <p className="mb-3 text-xs text-muted-foreground">
        Network without limits and hire like a pro!
      </p>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/images/hire-banner.jpg"
          alt="Hire faster with SyncUp"
          width={300}
          height={160}
          className="h-[140px] w-full object-cover"
        />
        <div className="absolute right-2 top-2 rounded-full bg-[#ff6b35] px-2.5 py-1 text-[10px] font-bold text-white">
          30% OFF
        </div>
      </div>
    </div>
  )
}
