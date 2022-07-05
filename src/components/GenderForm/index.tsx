import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormGroup } from "../FormGroup";
import { GenderTypes, IFormControls } from "./gender-form";
import { Button, Label, Select, Form } from "./styles";

const FormValidationScheme = Yup.object().shape({
  name: Yup.string().min(2, "Too short").max(30, "Too long"),
  genders: Yup.string(),
  "favorite-book": Yup.string().default("").when("genders", {
    is: "male",
    then: Yup.string(),
  }),
});

export function GenderForm() {
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
    onSubmit: (e: IFormControls) => {
      // call the api
    },
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

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup
        label="Name"
        name="name"
        value={formik.values.name}
        handleChange={formik.handleChange}
        error={formik.errors.name}
      />

      <div>
        <Label htmlFor="gender">Genders</Label>
        <Select
          name="gender"
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
          handleChange={formik.handleChange}
        />
      )}
      <Button type="submit">Send</Button>
    </Form>
  );
}
