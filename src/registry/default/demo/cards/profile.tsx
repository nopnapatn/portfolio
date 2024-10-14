import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export function CardsProfile() {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <Avatar className="size-36">
            <AvatarImage src="https://github.com/nopnapatn.png" />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <CardTitle>NOPNAPAT N.</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
