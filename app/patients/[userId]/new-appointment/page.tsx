"use client";
import React, { useState } from "react";
import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { SearchParamProps } from "@/types";
import { getPatient } from "@/lib/actions/patient.actions";

const NewAppointmentPage = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id}
            setOpen={setOpen}
          />

          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default NewAppointmentPage;
