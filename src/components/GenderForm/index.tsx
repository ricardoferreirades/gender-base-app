import { fork } from "child_process";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Label } from "../Label";
import { Select } from "../Select";
import { GenderTypes, IFormControls } from "./gender-form";
import { Form } from "./styles";

const FormValidationScheme = Yup.object().shape({
  name: Yup.string().min(2, "Too short").max(30, "Too long"),
  genders: Yup.string(),
  "favorite-book": Yup.string().default("").when("genders", {
    is: "male",
    then: Yup.string(),
  }),
});

export interface IGenderForm {
  onSubmit: (formControls: IFormControls) => void;
}

export function GenderForm({ onSubmit }: IGenderForm) {
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "male",
      "favorite-singer": "",
      "favorite-book": "",
      "favorite-sport": "",
    },
    validationSchema: FormValidationScheme,
    validateOnChange: true,
    onSubmit,
  });

  const genderFields: { [key: string]: string } = {
    male: "favorite-singer",
    female: "favorite-book",
    "non-binary": "favorite-sport",
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const gender: GenderTypes = e.target.value as GenderTypes;

    const resetObject = Object.keys(genderFields).reduce((acc, current) => {
      return gender !== current ? { ...acc, [genderFields[current]]: "" } : acc;
    }, {});

    formik.setValues({ ...formik.values, ...resetObject, gender });
  };

  const isFormValid = () =>
    !!formik.values.name &&
    !formik.errors.name &&
    (!!formik.values["favorite-singer"] ||
      !!formik.values["favorite-book"] ||
      !!formik.values["favorite-sport"]);

  return (
    <Form onSubmit={formik.handleSubmit} data-testid="gender-form">
      <FormGroup
        label="Name"
        name="name"
        id="name"
        data-testid="name"
        value={formik.values.name}
        handleChange={formik.handleChange}
        error={formik.errors.name}
      />

      <div>
        <Label htmlFor="gender">Gender</Label>
        <Select
          name="gender"
          id="gender"
          data-testid="gender"
          value={formik.values.gender}
          onChange={handleSelectChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
        </Select>
      </div>

      {formik.values.gender === "male" && (
        <FormGroup
          id="favorite-singer"
          label="Favorite Singer"
          type="text"
          name="favorite-singer"
          value={formik.values["favorite-singer"]}
          data-testid="favorite-singer"
          handleChange={formik.handleChange}
        />
      )}
      {formik.values.gender === "female" && (
        <FormGroup
          id="favorite-book"
          label="Favorite Book"
          type="text"
          name="favorite-book"
          value={formik.values["favorite-book"]}
          data-testid="favorite-book"
          handleChange={formik.handleChange}
        />
      )}
      {formik.values.gender === "non-binary" && (
        <FormGroup
          id="favorite-sport"
          label="Favorite Sport"
          type="text"
          name="favorite-book"
          value={formik.values["favorite-book"]}
          data-testid="favorite-sport"
          handleChange={formik.handleChange}
        />
      )}

      {isFormValid() ? (
        <Button type="submit" disabled={false}>
          Send
        </Button>
      ) : (
        <Button type="submit" disabled={true}>
          Send
        </Button>
      )}
    </Form>
  );
}
