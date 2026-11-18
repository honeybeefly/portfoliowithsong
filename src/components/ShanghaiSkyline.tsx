import Image from "next/image";

interface ShanghaiSkylineProps {
  className?: string;
  variant?: "hero" | "subtle" | "footer";
}

export default function ShanghaiSkyline({
  className = "",
  variant = "hero",
}: ShanghaiSkylineProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        variant === "hero"
          ? "h-[62vh] min-h-[380px] max-h-[760px] sm:h-[68vh]"
          : "h-72"
      } ${className}`}
    >
      <Image
        src="/images/shanghai-city-night.jpg"
        alt="Colorful illuminated high-rise skyline at night"
        fill
        priority={variant === "hero"}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#211915]/45 to-transparent" />
    </div>
  );
}
