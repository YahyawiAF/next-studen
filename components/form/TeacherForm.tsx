import React, { useEffect, useState, useRef } from "react";
import PagerForm from "../PagerForm";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import Notiflix from "notiflix";
import moment from "moment";
import supabase from "../../supabase";

interface TeacherFormProps {
  setPage: (page: string) => void;
  row?: any; // Consider creating a proper Teacher interface
}

// Define a more specific interface for the teacher data
interface TeacherData {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  national_id: string;
  nationality: string;
  experience: number;
  monthly_salary: number;
  hire_date: string;
  role: string;
  subject_id: string;
  created_at?: string;
}

function TeacherForm({ setPage, row }: TeacherFormProps) {
  const [form, setForm] = useState<TeacherData>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    national_id: "",
    nationality: "",
    experience: 0,
    monthly_salary: 0,
    hire_date: "",
    role: "teacher",
    subject_id: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<any[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const isEditMode = Boolean(row?.id);

  // Fetch teacher data when in edit mode
  useEffect(() => {
    const fetchTeacherData = async () => {
      if (!isEditMode) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("teacher")
          .select("*")
          .eq("id", row.id)
          .single();

        if (error) throw error;

        if (data) {
          // Format dates for input fields
          const formattedData = {
            ...data,
            hire_date: data.hire_date
              ? moment(data.hire_date).format("YYYY-MM-DD")
              : "",
          };
          setForm(formattedData);
        }
      } catch (error) {
        console.error("Error fetching teacher data:", error);
        Notiflix.Notify.failure("Failed to load teacher data!");
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherData();
  }, [row, isEditMode]);

  // Fetch subjects for dropdown
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { data, error } = await supabase.from("subjects").select("*");

        if (error) throw error;

        if (data) {
          setSubjects(data);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Handle numeric fields
    if (name === "experience" || name === "monthly_salary") {
      processedValue = value === "" ? 0 : Number(value);
    }

    setForm((prevForm) => ({ ...prevForm, [name]: processedValue }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!form.first_name || !form.last_name || !form.email) {
      Notiflix.Notify.failure("First name, last name, and email are required!");
      return;
    }

    setLoading(true);
    try {
      if (isEditMode) {
        // Update existing record
        const { error } = await supabase
          .from("teacher")
          .update(form)
          .eq("id", row.id);

        if (error) throw error;
        Notiflix.Notify.success("Teacher record updated successfully!");
      } else {
        // Create new record
        console.log("form", form);
        const { error } = await supabase.from("teacher").insert([form]);

        if (error) throw error;
        Notiflix.Notify.success("New teacher added successfully!");
      }

      // Return to list view after success
      setTimeout(() => setPage("list"), 200);
    } catch (error) {
      console.error("Form submission error:", error);
      Notiflix.Notify.failure("Operation failed. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    setPage("list");
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      national_id: "",
      nationality: "",
      experience: 0,
      monthly_salary: 0,
      hire_date: "",
      role: "teacher",
      subject_id: "",
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const onDelete = async () => {
    if (!isEditMode) return;

    // Confirm before deleting
    if (!confirm("Are you sure you want to delete this teacher record?")) {
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("teacher")
        .delete()
        .eq("id", row.id);

      if (error) throw error;
      Notiflix.Notify.success("Teacher record deleted successfully!");
      setTimeout(() => setPage("list"), 200);
    } catch (error) {
      console.error("Delete error:", error);
      Notiflix.Notify.failure("Failed to delete teacher record!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { data, error } = await supabase.from("subject").select("*");

        if (error) throw error;

        if (data) {
          setSubjects(data);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
      <div className="w-full flex flex-col md:flex-row items-center justify-between bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
        <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#EF6F6C] font-arial">
          {isEditMode ? "EDIT TEACHER" : "ADD NEW TEACHER"}
        </span>
        <PagerForm setPage={setPage} onSubmit={onSubmit} onCancel={onCancel} />
      </div>
      <div className="w-full">
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <form onSubmit={onSubmit} ref={formRef}>
            <div className="p-4 border rounded bg-yellow-50/20 w-full flex flex-col md:flex-row md:space-x-6">
              <div className="space-y-3 flex-1">
                <Input
                  value={form.first_name || ""}
                  name="first_name"
                  onChange={onChange}
                  label="First Name *"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <Input
                  value={form.last_name || ""}
                  name="last_name"
                  onChange={onChange}
                  label="Last Name *"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <Input
                  value={form.email || ""}
                  name="email"
                  onChange={onChange}
                  label="Email Address *"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <Input
                  value={form.phone_number || ""}
                  name="phone_number"
                  onChange={onChange}
                  label="Phone Number"
                  type="tel"
                  placeholder="Phone Number"
                />
                <Input
                  value={form.national_id || ""}
                  name="national_id"
                  onChange={onChange}
                  label="National ID"
                  type="text"
                  placeholder="National ID"
                />
                <Input
                  value={form.nationality || ""}
                  name="nationality"
                  onChange={onChange}
                  label="Nationality"
                  type="text"
                  placeholder="Nationality"
                />
                <div className="md:flex hidden">
                  <Button
                    label="SAVE"
                    type="submit"
                    position="right"
                    disabled={loading}
                  />
                  {isEditMode && (
                    <Button
                      label="DELETE"
                      type="button"
                      position="right"
                      className="bg-red-600 hover:bg-red-700 ml-2"
                      onClick={onDelete}
                      disabled={loading}
                    />
                  )}
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <Input
                  value={form.experience || 0}
                  name="experience"
                  onChange={onChange}
                  label="Years of Experience"
                  type="number"
                  placeholder="Years of Experience"
                  min="0"
                />
                <Input
                  value={form.monthly_salary || 0}
                  name="monthly_salary"
                  onChange={onChange}
                  label="Monthly Salary"
                  type="number"
                  placeholder="Monthly Salary"
                  min="0"
                  step="1"
                />
                <Input
                  value={form.hire_date || ""}
                  name="hire_date"
                  onChange={onChange}
                  label="Hire Date"
                  type="date"
                  placeholder="Hire Date"
                />
                <Select
                  value={form.role || "teacher"}
                  name="role"
                  onChange={onChange}
                  label="Role"
                >
                  <option value="teacher">Teacher</option>
                  <option value="head_teacher">Head Teacher</option>
                  <option value="assistant">Teaching Assistant</option>
                </Select>
                <Select
                  value={form.subject_id || ""}
                  name="subject_id"
                  onChange={onChange}
                  label="Subject"
                >
                  <option value="" disabled>
                    -- Select Subject --
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  ))}
                </Select>
                <div className="md:hidden flex mt-4">
                  <Button
                    label="SAVE"
                    type="submit"
                    position="right"
                    disabled={loading}
                  />
                  {isEditMode && (
                    <Button
                      label="DELETE"
                      type="button"
                      position="right"
                      className="bg-red-600 hover:bg-red-700 ml-2"
                      onClick={onDelete}
                      disabled={loading}
                    />
                  )}
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default TeacherForm;
