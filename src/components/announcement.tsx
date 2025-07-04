import Link from "next/link"

export function Announcement() {
  return (
    <>
      <div className="border-b p-2 text-sm">
        <p className="flex items-center justify-center gap-2">
          <span className="hidden font-semibold text-bone sm:block">
            Now Brownade is available!{" "}
            <span className="font-light text-bone">
              Brownade is a digital experience that inspires transformation.
            </span>
          </span>
          <Link
            href="https://brownade.com"
            className="text-bone hover:underline"
          >
            Introducing Brownade →
          </Link>
        </p>
      </div>
    </>
  )
}
