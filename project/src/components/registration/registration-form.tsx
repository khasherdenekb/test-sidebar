import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "@/lib/schemas";
import { FormField } from "./form-field";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import type { FormData } from "@/lib/types";

interface Props {
  onSubmit: (data: FormData) => void;
}

export function RegistrationForm({ onSubmit }: Props) {
  const form = useForm<FormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      bio: "",
    },
  });

  return (
    <>
      <DialogHeader>
        <DialogTitle>User Registration</DialogTitle>
        <DialogDescription>
          Fill in your information to create an account
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            label="Name"
            placeholder="John Doe"
          />
          <FormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="john@example.com"
          />
          <FormField
            control={form.control}
            name="age"
            label="Age"
            type="number"
          />
          <FormField
            control={form.control}
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself"
            textarea
          />
          <Button type="submit" className="w-full">Continue</Button>
        </form>
      </Form>
    </>
  );
}