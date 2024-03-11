/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormHelperText, Input, Textarea } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../utils/dataTypes";

export default function TextInput({
  name,
  placeholder,
  isRequired,
  control,
  type,
  variant,
  errors,
}: InputFieldProps) {
  return (
    <>
      <FormControl isRequired={isRequired} mb={4}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                {type === "textarea" ? (
                  <Textarea
                    variant={variant}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    color={"black"}
                    isInvalid={Boolean(errors?.name)}
                    focusBorderColor="orange.500"
                    errorBorderColor="red.500"
                  />
                ) : (
                  <Input
                    type={type}
                    variant={variant}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    color={"black"}
                    isInvalid={Boolean(errors?.name)}
                    focusBorderColor="orange.500"
                    errorBorderColor="red.500"
                  />
                )}
              </>
            );
          }}
        />
        <FormHelperText textColor={"red.500"}>
          {(errors as any)?.[name]?.message}
        </FormHelperText>
      </FormControl>
    </>
  );
}
