import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface Props {
  onClose: () => void;
}

export function SuccessStep({ onClose }: Props) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-green-500" />
          Registration Complete
        </DialogTitle>
        <DialogDescription>
          Your account has been successfully created
        </DialogDescription>
      </DialogHeader>
      <div className="py-6 text-center text-muted-foreground">
        Thank you for registering! You can now log in to your account.
      </div>
      <DialogFooter>
        <Button onClick={onClose} className="w-full">
          Close
        </Button>
      </DialogFooter>
    </>
  );
}