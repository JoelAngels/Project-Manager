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
import useFetch from "@/hooks/useFetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createProject } from "../../../../actions/project";

const CreateProjectPage = () => {
  //user is admin or not
  const { isLoaded: isOrgLoaded, membership } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    //check if organization, user is loaded or not
    if (isOrgLoaded && isUserLoaded && membership) {
      setIsAdmin(membership.role === "org:admin");
    }
  }, [isOrgLoaded, isUserLoaded, membership]);

  const {
    data: project,
    loading,
    error,
    fn: createProjectFn,
  } = useFetch(createProject);

  useEffect(() => {
    if (project) {
      toast.success("Project created successfully");
      router.push(`/project/${project.id}`);
    }
  }, [loading]);

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

  const onSubmit = async (data) => {
    createProjectFn(data);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl gradient-title text-center font-bold mb-8">
        Create Project Page
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

        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Creating..." : "Create Project"}
        </Button>
        {error && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
      </form>
    </div>
  );
};

export default CreateProjectPage;
