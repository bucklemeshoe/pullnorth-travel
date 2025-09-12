"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface MultiSelectOption {
  label: string
  value: string
}

interface MultiSelectProps {
  options: MultiSelectOption[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select items...",
  className,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item))
  }

  const handleSelect = (currentValue: string) => {
    if (selected.includes(currentValue)) {
      onChange(selected.filter((item) => item !== currentValue))
    } else {
      onChange([...selected, currentValue])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-800 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#255156] focus:border-[#255156] transition-all duration-300 h-auto min-h-[60px]",
            className
          )}
          disabled={disabled}
        >
          <div className="flex flex-wrap gap-1">
            {selected.length > 0 ? (
              selected.map((item) => {
                const option = options.find((opt) => opt.value === item)
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-[#255156] text-white text-xs rounded-md"
                  >
                    {option?.label}
                    <span
                      className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer hover:bg-white/20 p-1"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleUnselect(item)
                        }
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      onClick={() => handleUnselect(item)}
                      role="button"
                      tabIndex={0}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                  </span>
                )
              })
            ) : (
              <span className="text-gray-500 placeholder-gray-500">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput 
            placeholder="Search..." 
            className="text-[#3e3e3e] placeholder:text-gray-500 [&>div>svg]:text-gray-500"
          />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                  className="text-[#3e3e3e]"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
