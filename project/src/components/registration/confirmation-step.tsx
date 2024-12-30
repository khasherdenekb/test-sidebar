import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import type { FormData } from "@/lib/types";

interface Props {
  data: FormData | null;
  onConfirm: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export function ConfirmationStep({
  data,
  onConfirm,
  onCancel,
  isSubmitting,
}: Props) {
  if (!data) return null;

  return (
    <>
      <DialogHeader>
        <DialogTitle>Confirm Your Details</DialogTitle>
        <DialogDescription>
          Please review your information before submitting
        </DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-2 py-4 text-sm">
        <div className="font-medium">Name:</div>
        <div>{data.name}</div>
        <div className="font-medium">Email:</div>
        <div>{data.email}</div>
        <div className="font-medium">Age:</div>
        <div>{data.age}</div>
        <div className="font-medium">Bio:</div>
        <div className="col-span-2 mt-1">{data.bio}</div>
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button onClick={onConfirm} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Confirm & Submit"
          )}
        </Button>
      </DialogFooter>
    </>
  );
}