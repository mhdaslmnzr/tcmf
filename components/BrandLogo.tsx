import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

type Props = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
  wordmarkClassName?: string;
};

export function BrandLogo({
  className = "",
  size = 40,
  withWordmark = true,
  wordmarkClassName = "text-[var(--tcmf-ink)]",
}: Props) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={logo}
        alt="The Common Man Foundation"
        width={size}
        height={size}
        className="rounded-xl object-cover ring-1 ring-black/5"
        priority
      />
      {withWordmark ? (
        <span
          className={`font-semibold tracking-tight leading-tight ${wordmarkClassName}`}
        >
          TCMF
        </span>
      ) : null}
    </Link>
  );
}
