"use client";
import OrgSwitcher from "@/components/OrgSwitcher";
import { useOrganization, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/app/lib/validators";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CreateProjectPage = () => {
  //user is admin or not
  const { isLoaded: isOrgLoaded, membership } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async () => {};

  useEffect(() => {
    //check if organization, user is loaded or not
    if (isOrgLoaded && isUserLoaded && membership) {
      setIsAdmin(membership.role === "org:admin");
    }
  }, [isOrgLoaded, isUserLoaded, membership]);

  //check if organization, user is not loaded
  if (!isOrgLoaded || !isUserLoaded) {
    return null;
  }
  //check if user is not an admin
  if (!isAdmin) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <span className="text-2xl gradient-title">
          Oops! Only Admins can create projects.
        </span>
        <OrgSwitcher />
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl gradient-title text-center font-bold mb-8">
        CreateProjectPage
      </h1>

      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Input
            id="name"
            className="bg-slate-950"
            placeholder="Project Name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {typeof errors.name.message === "string"
                ? errors.name.message
                : ""}
            </p>
          )}
        </div>
        <div>
          <Input
            id="key"
            className="bg-slate-950"
            placeholder="Project Key (Ex: RCYT)"
            {...register("key")}
          />
          {errors.key && (
            <p className="text-red-500 text-sm mt-1">
              {typeof errors.key.message === "string" ? errors.key.message : ""}
            </p>
          )}
        </div>
        <div>
          <Textarea
            id="description"
            className="bg-slate-950 h-28"
            placeholder="Project Description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {typeof errors.description.message === "string"
                ? errors.description.message
                : ""}
            </p>
          )}
        </div>

        <Button type="submit" size="lg">
          Create Project
        </Button>
      </form>
    </div>
  );
};

export default CreateProjectPage;
