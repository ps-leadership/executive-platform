import Image from "next/image";

type HeroVisualProps = {
  src: string;
  alt: string;
};

export default function HeroVisual({
  src,
  alt,
}: HeroVisualProps) {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#172033] shadow-[0_30px_80px_rgba(23,32,51,0.18)] md:min-h-[560px]">

      {/* Photography */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* subtle navy overlay */}
        <div className="absolute inset-0 bg-[#172033]/10" />
      </div>

      {/* Blue accent */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-[#2563eb]
          opacity-90
          mix-blend-multiply
        "
      />

      {/* Coral accent */}
      <div
        className="
          absolute
          -bottom-28
          -left-20
          h-80
          w-80
          rounded-full
          bg-[#f97360]
          opacity-90
          mix-blend-multiply
        "
      />

      {/* Gold accent */}
      <div
        className="
          absolute
          -bottom-20
          right-16
          h-48
          w-48
          rounded-full
          bg-[#f4b942]
          opacity-85
          mix-blend-multiply
        "
      />

      {/* Context card */}
      <div className="absolute bottom-6 right-6 w-[220px] rounded-2xl border border-white/20 bg-[#172033]/85 p-5 text-white shadow-xl backdrop-blur-md md:bottom-8 md:right-8 md:w-[250px]">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          Executive Perspective
        </p>

        <div className="mt-5 space-y-4">

          <div>
            <p className="text-2xl font-semibold">18+</p>
            <p className="text-xs text-white/60">
              Years of experience
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-lg font-semibold">Global</p>
            <p className="text-xs text-white/60">
              Customer leadership
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-lg font-semibold">Build</p>
            <p className="text-xs text-white/60">
              Teams & systems
            </p>
          </div>

        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute left-7 top-7 grid grid-cols-5 gap-2 opacity-70">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-white"
          />
        ))}
      </div>

      <div className="absolute bottom-7 right-7 grid grid-cols-5 gap-2 opacity-60">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#2563eb]"
          />
        ))}
      </div>

    </div>
  );
}