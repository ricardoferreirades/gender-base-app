import React, { HTMLProps } from "react";

export interface IFormGroup extends HTMLProps<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
