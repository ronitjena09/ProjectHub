import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

const CommentCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar
          variant="outline"
          className="rounded-full border-2 border-violet-400"
        >
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
          <div className="space-y-1">
            <p className="text-violet-400">Ronit Jena</p>
            <p>Total work pending:</p>
          </div>
      </div>
      <Button className="rounded-full" variant="ghost" size="icon">
        <TrashIcon className="text-violet-400" />
      </Button>
    </div>
  );
};

export default CommentCard;
