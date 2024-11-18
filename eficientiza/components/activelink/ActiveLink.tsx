import Link from "next/link";

interface ActiveLinkProps {
    linkTitle: string;
    linkUrl: string;
}

function ActiveLink({ linkTitle, linkUrl }: ActiveLinkProps) {
  return (
    <li className={`text-nowrap px-8`}>
        <Link href={linkUrl}>{linkTitle}</Link>
    </li>
  )
}

export default ActiveLink