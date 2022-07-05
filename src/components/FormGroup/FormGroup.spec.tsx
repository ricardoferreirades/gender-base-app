import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FormGroup } from ".";
import { IFormGroup } from "./form-group";
import { FormGroupFactory } from "./form-group.factory";
import { ChangeEventHandler } from "react";

describe("FormGroup", () => {
  let props: IFormGroup;
  let handleChange: ChangeEventHandler<HTMLInputElement> = jest.fn();

  describe("when renders", () => {
    beforeEach(() => {
      props = FormGroupFactory.build({
        label: "Some Label",
        value: "Some value",
        id: "my-input",
        handleChange,
      });
    });

    it("defines the compoennt", () => {
      render(<FormGroup {...props} />);
      const _input = screen.getByDisplayValue("Some value");
      expect(_input).toBeInTheDocument();
    });

    it("shows the label: Some Label", () => {
      render(<FormGroup {...props} />);
      const _label = screen.getByLabelText("Some Label");
      expect(_label).toBeInTheDocument();
    });
  });

  describe("When has errors", () => {
    beforeEach(() => {
      props = FormGroupFactory.build({ error: "Too short" });
    });
    it("shows the error 'too short' if the input has only 1 character", () => {
      render(<FormGroup {...props} />);
      const error_message = screen.getByText("Too short");
      expect(error_message).toBeInTheDocument();
    });
  });

  describe("When there are no errors", () => {
    beforeEach(() => {
      props = FormGroupFactory.build({ error: "" });
    });
    it("does NOT show the error", () => {
      render(<FormGroup {...props} />);
      const error_message = screen.queryByTestId("error-message");
      expect(error_message).not.toBeInTheDocument();
    });
  });

  describe("when some value is typed", () => {
    beforeEach(() => {
      handleChange = jest.fn();
      props = FormGroupFactory.build({ handleChange, placeholder: "input" });
    });
    it("calls the handleChange method", () => {
      render(<FormGroup {...props} />);
      fireEvent.change(screen.getByPlaceholderText("input"), {
        target: { value: "23" },
      });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
