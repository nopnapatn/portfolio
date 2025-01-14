import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container(props: ContainerProps) {
  return (
    <div className="px-[10px]">
      <div
        className={cn("mx-auto flex w-full max-w-[1420px]", props.className)}
      >
        {props.children}
      </div>
    </div>
  )
}
