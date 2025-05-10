import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"

export function ChadCnFormSelect({
  control,
  name,
  label,
  options,
  defaultValue,
  description,
  onChange,
  type = 'text',
})
{
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                const parsedValue = type === 'number' ? parseInt(value) : value;
                field.onChange(parsedValue)
                onChange?.(parsedValue)
              }}
              value={field.value}
              defaultValue={defaultValue}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione una opción" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
