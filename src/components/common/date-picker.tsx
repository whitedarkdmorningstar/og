"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import React, { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"

const numericDateSchema = z.object({
  day: z.coerce.number(),
  month: z.coerce.number(),
  year: z.coerce.number(),
})

const dateSchema = z.object({
  day: z.string().refine(
    (val) => {
      const num = parseInt(val, 10)
      return !isNaN(num) && num >= 1 && num <= 31
    },
    { message: "Day must be a number between 1 and 31" }
  ),

  month: z.string().refine(
    (val) => {
      const num = parseInt(val, 10)
      return !isNaN(num) && num >= 1 && num <= 12
    },
    { message: "Month must be a number between 1 and 12" }
  ),

  year: z
    .string()
    .min(4, { message: "Year must be at least 4 digits" })
    .refine(
      (val) => {
        const num = parseInt(val, 10)
        return !isNaN(num) && num >= 1900 && num <= 2100
      },
      { message: "Year must be between 1900 and 2100" }
    ),
})

type DateFormValues = z.infer<typeof dateSchema>

interface DateInputFormProps {
  // 2. Define your custom onValueChange callback signature
  onValueChange?: (day: number, month: number, year: number) => void
}

export default function DateInputForm({ onValueChange }: DateInputFormProps) {
  const {
    register,
    setFocus,
    trigger,
    watch,
    formState: { errors },
  } = useForm<DateFormValues>({
    resolver: zodResolver(dateSchema),
    mode: "onChange",
    defaultValues: { day: "", month: "", year: "" },
  })

  const fields: Array<keyof DateFormValues> = ["day", "month", "year"]

  // 3. Watch form values in real-time
  const watchedValues = watch()

  // 4. Auto-trigger callback when everything passes Zod parsing
  useEffect(() => {
    const result = dateSchema.safeParse(watchedValues)

    if (result.success) {
      const result2 = numericDateSchema.safeParse(result.data)

      // We changed string to number
      if (result2.success) {
        const { day, month, year } = result2.data

        onValueChange?.(day, month, year)
      }
    }
  }, [watchedValues, onValueChange])

  // Focus Forward Logic
  const handleInputChange = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      currentField: keyof DateFormValues,
      index: number
    ) => {
      const value = e.target.value
      const nextField = fields[index + 1]

      if (!nextField) return

      const isValidField = await trigger(currentField)

      if (isValidField && value.length >= 2) {
        setTimeout(() => setFocus(nextField), 0)
      }
    },
    [trigger, setFocus]
  )

  // Focus Backward Logic
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const value = e.currentTarget.value
      const prevField = fields[index - 1]

      if (e.key === "Backspace" && value.length === 0 && prevField) {
        e.preventDefault()
        setTimeout(() => setFocus(prevField), 0)
      }
    },
    [setFocus]
  )

  return (
    <FieldGroup>
      <Field orientation={"horizontal"}>
        <InputField
          type="text"
          maxLength={2}
          autoFocus
          inputMode={"numeric"}
          pattern={"\d*"}
          placeholder="DD"
          {...register("day")}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          onChange={(e) => {
            register("day").onChange(e)
            handleInputChange(e, "day", 0)
          }}
          error={Boolean(errors.day?.message)}
        />

        <InputField
          type="text"
          maxLength={2}
          placeholder="MM"
          inputMode={"numeric"}
          pattern={"\d*"}
          {...register("month")}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          onChange={(e) => {
            register("month").onChange(e)
            handleInputChange(e, "month", 1)
          }}
          error={Boolean(errors.month?.message)}
        />

        <InputField
          type="text"
          maxLength={4}
          inputMode={"numeric"}
          pattern={"\d*"}
          placeholder="YYYY"
          {...register("year")}
          onKeyDown={(e) => handleKeyDown(e, 2)}
          onChange={(e) => {
            register("year").onChange(e)
            handleInputChange(e, "year", 2)
          }}
          error={Boolean(errors.year?.message)}
        />
      </Field>

      <FieldError>
        {errors.day?.message || errors.month?.message || errors.year?.message}
      </FieldError>
    </FieldGroup>
  )
}

interface InputFieldProps extends React.ComponentProps<typeof Input> {
  label?: string
  error?: boolean
}

export function InputField(props: InputFieldProps) {
  const { label, error, ...inputProps } = props

  return (
    <Field data-invalid={error}>
      <FieldLabel
        className={
          "capitalize flex items-center gap-4 flex-row justify-between"
        }
        htmlFor={inputProps.id || label || inputProps.name}
      >
        {label || inputProps.name}
      </FieldLabel>

      <Input
        name={label}
        id={label || inputProps.name}
        autoComplete="off"
        {...inputProps}
        aria-invalid={error}
      />
    </Field>
  )
}
