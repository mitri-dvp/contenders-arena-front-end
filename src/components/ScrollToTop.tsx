import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "~/hooks/useScrollPosition";

const ScrollToTop = () => {
  const { isAtTopOfPage } = useScrollPosition(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  return (
    <Link
      href={"#"}
      className={`${
        isAtTopOfPage ? "-z-10 opacity-0" : "opacity-100"
      } fixed bottom-8 right-8 z-50 hidden aspect-square rounded-full bg-green-primary p-4 transition-opacity lg:block`}
    >
      <Image
        className="w-8"
        src={"/assets/svg/chevron-up.svg"}
        alt="chevron-up.svg"
        width={50}
        height={50}
        draggable={false}
        quality={100}
      />
    </Link>
  );
};

export default ScrollToTop;
