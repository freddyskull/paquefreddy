import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"

export function ChadCnFormInput({
  control,
  name,
  label,
  type = "text",
  placeholder,
  disabled,
  description,
  required,
  pattern,
  min,
  max,
  step,
  defaultValue,
  onChange,
  ClassName = '',
  className,
}) {
  const dynamicLabel = className || label;
  
  return (
    <div className={ClassName}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="line-clamp-1">{dynamicLabel}</FormLabel>
            <FormControl>
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
                required={required}
                pattern={pattern}
                min={min}
                max={max}
                step={step}
                {...field}
                onChange={(e) => {
                  const value = e.target.value;
                  const parsedValue = type === 'number' ? parseFloat(value) : value;
                  field.onChange(parsedValue);
                  onChange?.(parsedValue);
                }}
              />
            </FormControl>
            {description && (
              <FormDescription>{description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
