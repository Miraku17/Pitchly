import { auth } from "@/auth";
import { redirect } from "next/navigation";
import StartupForm from "@/app/components/StartupForm";

const Page = async () => {


  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;