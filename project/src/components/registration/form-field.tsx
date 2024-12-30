import {
  FormControl,
  FormField as UIFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Control } from "react-hook-form";
import type { FormData } from "@/lib/types";

interface Props {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}

export function FormField({
  control,
  name,
  label,
  placeholder,
  type,
  textarea,
}: Props) {
  return (
    <UIFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea
                placeholder={placeholder}
                className="resize-none"
                {...field}
              />
            ) : (
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                onChange={(e) =>
                  field.onChange(
                    type === "number"
                      ? parseInt(e.target.value)
                      : e.target.value
                  )
                }
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}