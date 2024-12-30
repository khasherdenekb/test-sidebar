import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RegistrationForm } from "./registration/registration-form";
import { ConfirmationStep } from "./registration/confirmation-step";
import { SuccessStep } from "./registration/success-step";
import type { FormData } from "@/lib/types";

export function RegistrationDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setStep("confirm");
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setStep("success");
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state after animation
    setTimeout(() => {
      setStep("form");
      setFormData(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Register Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === "form" && <RegistrationForm onSubmit={handleFormSubmit} />}
        {step === "confirm" && (
          <ConfirmationStep
            data={formData}
            onConfirm={handleConfirm}
            onCancel={() => setStep("form")}
            isSubmitting={isSubmitting}
          />
        )}
        {step === "success" && <SuccessStep onClose={handleClose} />}
      </DialogContent>
    </Dialog>
  );
}