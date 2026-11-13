import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
];

// Image boxes are expressed as percentages of the 440×379 card from Figma.
const works = [
  {
    title: "Product design",
    src: "/home/work-product.png",
    imageClassName:
      "left-1/2 -translate-x-1/2 bottom-[-10.9%] h-[127.78%] w-[135.14%] object-cover",
  },
  {
    title: "Branding design",
    src: "/home/work-branding.png",
    imageClassName:
      "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[102.86%] object-cover",
  },
  {
    title: "Motion graphics",
    src: "/home/work-motion.png",
    imageClassName:
      "left-[-37.95%] top-[-4.75%] h-[104.75%] w-[147.5%] object-fill object-bottom",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background text-foreground">
      <header className="sticky top-0 z-10 flex w-full justify-center px-4 pb-2 pt-6">
        <nav className="flex items-center gap-10 rounded-full border border-line bg-surface px-8 py-6 sm:gap-[158px] sm:px-12">
          <Link
            href="/"
            className="font-logo text-[22px] font-bold leading-none tracking-[-0.06em] sm:w-[119px]"
          >
            Nov.
          </Link>
          <ul className="flex items-center gap-6 text-lg leading-none tracking-[-0.06em] sm:gap-[50px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="w-full max-w-[1440px]">
        <section
          id="about"
          className="flex min-h-[530px] flex-col justify-between px-5 pb-[46px] pt-24 sm:px-10"
        >
          <h1 className="text-center font-display text-[clamp(44px,6.25vw,90px)] font-bold leading-[1.045] tracking-[-0.06em]">
            HELLO
            <br />
            I’M JAYEON HEO.
          </h1>

          <div className="mt-16 flex flex-col gap-6 text-lg leading-7 tracking-[-0.04em] md:flex-row md:gap-0">
            <p className="md:w-[325px]">
              비효율을 제거해, 사용자에게
              <br />더 많은 시간을 돌려주고자 합니다.
            </p>
            <p>
              더 머물고, 가치를 느끼는
              <br />
              디자인을 지향합니다.
            </p>
            <address className="not-italic md:ml-auto">
              <a href="mailto:wiint.nov@gmail.com" className="block hover:opacity-60">
                wiint.nov@gmail.com
              </a>
              <a href="tel:01035216514" className="block hover:opacity-60">
                010 3521 6514
              </a>
            </address>
          </div>
        </section>

        <div className="px-5 sm:px-10">
          <Image
            src="/home/divider.svg"
            alt=""
            width={1360}
            height={1}
            className="block h-px w-full"
          />
        </div>

        <section id="work" className="px-5 pb-6 sm:px-10">
          <h2 className="py-6 font-display text-[22px] font-bold leading-7 tracking-[-0.04em]">
            Work.
          </h2>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {works.map((work) => (
              <li key={work.title}>
                <a
                  href="#work"
                  className="group relative block aspect-[440/379] overflow-hidden rounded-3xl bg-card"
                >
                  <Image
                    src={work.src}
                    alt=""
                    width={1320}
                    height={1137}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`absolute max-w-none transition-transform duration-500 group-hover:scale-[1.03] ${work.imageClassName}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-black/0 to-black/40 to-[88.6%]" />
                  <h3 className="absolute bottom-[30px] left-[30px] font-display text-[22px] font-semibold leading-7 tracking-[-0.04em]">
                    {work.title}
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
