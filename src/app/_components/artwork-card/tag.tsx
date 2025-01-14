interface TagArtWorkCardProps {
  tag: string
}

export default function TagArtWorkCard(props: TagArtWorkCardProps) {
  return (
    <span className="inline-block rounded-full border border-heavyMetal px-3 py-1 text-xs font-medium text-heavyMetal">
      {props.tag}
    </span>
  )
}
