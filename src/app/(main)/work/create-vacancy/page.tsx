"use client";

import React from "react";
import { NextPage } from "next";
import { CreateVacancy } from "@/widgets/user/createVacancy";
import { useAddVacancy } from "@/entities/user/vacancyItem";

const CreateVacancyPage: NextPage = () => {
   const { mutate: addVacancy, isPending: isLoading, isError } = useAddVacancy();
   return <CreateVacancy addVacancy={addVacancy} isLoading={isLoading} isError={isError} />;
};

export default CreateVacancyPage;
