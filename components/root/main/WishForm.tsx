"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { LoaderCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { createWish } from "@/app/actions/wish.action";
import {
  CreateWishDTO,
  CreateWishSchema,
} from "@/server/validators/wish.validator";

export default function WishForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CreateWishSchema>>({
    resolver: zodResolver(CreateWishSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const onSubmit = (values: CreateWishDTO) => {
    startTransition(async () => {
      try {
        await createWish({
          name: values.name,
          message: values.message,
        });

        toast.success("Berhasil Mengirimkan Ucapan!");
      } catch (e) {
        toast.error("Terjadi Kesalahan");
      }
    });
  };

  console.log(form.getValues());

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="relative z-50 mt-2 w-full lg:mt-6"
    >
      <FieldGroup>
        <div className="space-y-4">
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <Field className="relative w-64 overflow-hidden rounded-sm bg-[#fff3c2]">
                <InputGroup className="h-10">
                  <InputGroupInput
                    {...field}
                    className="ml-2 text-red-950"
                    aria-invalid={fieldState.invalid}
                    placeholder="Nama pengirim"
                    autoComplete="off"
                  />
                  <InputGroupAddon>
                    <User />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <Field className="relative w-64 overflow-hidden rounded-sm bg-[#fff3c2]">
                <InputGroup className="">
                  <InputGroupTextarea
                    {...field}
                    className="ml-2 text-red-950"
                    aria-invalid={fieldState.invalid}
                    placeholder="Tuliskan pesan anda..."
                    autoComplete="off"
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText>0/280</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Button
          disabled={isPending || !form.formState.isValid}
          className="mx-auto flex h-9 w-40 cursor-pointer items-center gap-3 bg-[#52242e] text-yellow-50"
        >
          {isPending ? (
            <>
              Memuat
              <LoaderCircle className="size-6 animate-spin text-yellow-50" />
            </>
          ) : (
            "Kirimkan"
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
