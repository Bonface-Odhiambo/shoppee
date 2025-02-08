import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { updateSeller } from "../../../Redux Toolkit/Seller/sellerSlice";

export interface UpdateDetailsFormProps {
  onClose: () => void;
}
const BusinessDetailsForm = ({ onClose }: UpdateDetailsFormProps) => {
  const dispatch = useAppDispatch();
  const { sellers } = useAppSelector((store) => store);
  const formik = useFormik({
    initialValues: {
      businessName: "",
      krapin: "",
      accountStatus: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business Name is required"),
      krapin: Yup.string().required("KRAPIN is required"),
      accountStatus: Yup.string().required("Account Status is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        updateSeller({
          ...values,
          businessDetails: { businessName: values.businessName },
        })
      );
      onClose();
    },
  });

  useEffect(() => {
    if (sellers.profile) {
      formik.setValues({
        businessName: sellers.profile?.businessDetails?.businessName,
        krapin: sellers.profile?.krapin,
        accountStatus: sellers.profile?.accountStatus ?? "",
      });
    }
  }, [sellers.profile]);

  return (
    <>
      <h1 className="text-xl pb-5 text-center font-bold text-gray-600">
        Business Details
      </h1>
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="businessName"
          name="businessName"
          label="Business Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          error={
            formik.touched.businessName && Boolean(formik.errors.businessName)
          }
          helperText={formik.touched.businessName && formik.errors.businessName}
        />
        <TextField
          fullWidth
          id="krapin"
          name="krapin"
          label="KRAPIN"
          value={formik.values.krapin}
          onChange={formik.handleChange}
          error={formik.touched.krapin && Boolean(formik.errors.krapin)}
          helperText={formik.touched.krapin && formik.errors.krapin}
        />
        <TextField
          fullWidth
          id="accountStatus"
          name="accountStatus"
          label="Account Status"
          value={formik.values.accountStatus}
          onChange={formik.handleChange}
          error={
            formik.touched.accountStatus && Boolean(formik.errors.accountStatus)
          }
          helperText={
            formik.touched.accountStatus && formik.errors.accountStatus
          }
        />
        <Button
          sx={{ py: ".9rem" }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default BusinessDetailsForm;
