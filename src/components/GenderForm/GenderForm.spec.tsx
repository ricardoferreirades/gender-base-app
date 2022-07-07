import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GenderForm } from "./index";

describe("GenderForm", () => {
  let nameControl: HTMLInputElement;
  let genderControl: HTMLSelectElement;
  let handleSubmit: any = jest.fn();

  const hasErrorMessage = (message: string) => {
    const errorMessage = screen.getByText(message) as HTMLInputElement;
    expect(errorMessage).toBeInTheDocument();
  };

  const hasNoErrorMessage = (message: string) => {
    const errorMessage = screen.queryByText(message) as HTMLInputElement;
    expect(errorMessage).not.toBeInTheDocument();
  };

  const hasGenderLabel = (text: string) => {
    const control = screen.getByText(text);
    expect(control).toBeInTheDocument();
  };

  const hasGenderControl = (testId: string) => {
    const control = screen.queryByTestId(testId);
    expect(control).toBeInTheDocument();
  };

  describe("When the component renders", () => {
    it("renders a form", () => {
      render(<GenderForm onSubmit={handleSubmit} />);
      const genderForm = screen.getByTestId("gender-form");
      expect(genderForm).toBeInTheDocument();
    });

    it("renders a label element with the text 'name'", () => {
      render(<GenderForm onSubmit={handleSubmit} />);
      const nameLabel = screen.getByLabelText("Name");
      expect(nameLabel).toBeInTheDocument();
    });

    it("renders the input element for the name", () => {
      render(<GenderForm onSubmit={handleSubmit} />);
      nameControl = screen.getByTestId("name");
      expect(nameControl).toBeInTheDocument();
    });

    it("renders a label element with the text 'gender'", () => {
      render(<GenderForm onSubmit={handleSubmit} />);
      const gendersLabel = screen.getByLabelText("Gender");
      expect(gendersLabel).toBeInTheDocument();
    });

    it("renders the select element for the name containing the options: male, female, non-binary", () => {
      render(<GenderForm onSubmit={handleSubmit} />);
      genderControl = screen.getByTestId("gender");
      expect(genderControl).toBeInTheDocument();
    });
  });

  describe("When the name input changes", () => {
    describe("When the input is invalid", () => {
      it("shows the message 'too short' in case the value is less or equal to 1 character", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        nameControl = screen.getByTestId("name");

        fireEvent.change(nameControl, {
          target: { value: "R" },
        });

        await waitFor(() => hasErrorMessage("Too short"));
      });

      it("shows the message 'too long' in case the value is greater than 20 characters", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        nameControl = screen.getByTestId("name");

        fireEvent.change(nameControl, {
          target: {
            value: "This is a long text with atleast twenty characters",
          },
        });

        await waitFor(() => hasErrorMessage("Too long"));
      });
    });

    describe("when the input is valid", () => {
      it("Does not show the 'Too long' error message", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        nameControl = screen.getByTestId("name");

        fireEvent.change(nameControl, {
          target: {
            value: "Sam Smith",
          },
        });

        await waitFor(() => hasNoErrorMessage("Too long"));
      });

      it("Does not show the 'Too short' error message", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        nameControl = screen.getByTestId("name");

        fireEvent.change(nameControl, {
          target: {
            value: "Sam Smith",
          },
        });

        await waitFor(() => hasNoErrorMessage("Too short"));
      });
    });
  });

  describe("When the gender changes", () => {
    describe("when the gender is male", () => {
      it("renders a label with the text 'favorite singer'", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        genderControl = screen.getByTestId("gender");

        fireEvent.change(genderControl, {
          target: {
            value: "male",
          },
        });

        await waitFor(() => hasGenderLabel("Favorite Singer"));
      });

      it("renders the favorite singer input", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        genderControl = screen.getByTestId("gender");

        fireEvent.change(genderControl, {
          target: {
            value: "male",
          },
        });

        await waitFor(() => hasGenderControl("favorite-singer"));
      });
    });

    describe("when the gender is female", () => {
      it("renders a label with the text 'favorite book'", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        genderControl = screen.getByTestId("gender");

        fireEvent.change(genderControl, {
          target: {
            value: "female",
          },
        });

        await waitFor(() => hasGenderLabel("Favorite Book"));
      });

      it("renders the favorite book input", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        genderControl = screen.getByTestId("gender");

        fireEvent.change(genderControl, {
          target: {
            value: "female",
          },
        });

        await waitFor(() => hasGenderControl("favorite-book"));
      });
    });

    describe("when the gender is non-binary", () => {
      it("renders a label with the text 'favorite sport'", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        genderControl = screen.getByTestId("gender");

        fireEvent.change(genderControl, {
          target: {
            value: "non-binary",
          },
        });

        await waitFor(() => hasGenderLabel("Favorite Sport"));
      });

      it("renders the favorite sport input", async () => {
        render(<GenderForm onSubmit={handleSubmit} />);
        genderControl = screen.getByTestId("gender");

        fireEvent.change(genderControl, {
          target: {
            value: "non-binary",
          },
        });

        await waitFor(() => hasGenderControl("favorite-sport"));
      });
    });
  });

  describe("When the form is submitted", () => {
    it("calls the handleSubmit method", () => {});

    describe("when the submission succeeds", () => {
      it("shows a success message", () => {});
    });

    describe("when the submission FAILS", () => {
      it("shows an error message", () => {});
    });
  });
});
