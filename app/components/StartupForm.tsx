"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const isValidImageUrl = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) return false;

    const contentType = response.headers.get("content-type");
    return contentType?.startsWith("image/");
  } catch {
    return false;
  }
};

interface StartupFormValues {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  pitch: string;
}

const StartupForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isCheckingImage, setIsCheckingImage] = useState(false);

  const form = useForm<StartupFormValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      imageUrl: "",
      pitch: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // Image validation
  React.useEffect(() => {
    const validateImage = async () => {
      const imageUrl = form.watch("imageUrl");
      if (!imageUrl) return;

      setIsCheckingImage(true);
      const isValid = await isValidImageUrl(imageUrl);
      setIsCheckingImage(false);

      if (!isValid) {
        form.setError("imageUrl", {
          type: "manual",
          message: "Please provide a valid image URL",
        });
      }
    };

    const timer = setTimeout(validateImage, 500);
    return () => clearTimeout(timer);
  }, [form.watch("imageUrl")]);

  const onSubmit = async (data: StartupFormValues) => {
    try {
      // Add your form submission logic here
      console.log(data);


       // Validate image before submission
       if (data.imageUrl) {
        const isValid = await isValidImageUrl(data.imageUrl);
        if (!isValid) {
          toast({
            title: "Invalid Image",
            description: "Please provide a valid image URL",
            variant: "destructive",
          });
          return;
        }
      }

      //   toast({
      //     title: "Success!",
      //     description: "Your startup pitch has been submitted successfully.",
      //   });
      //   router.push("/startups"); // or wherever you want to redirect
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8 shadow-none border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Submit Your Startup
        </CardTitle>
        <CardDescription>
          Share your innovative idea with our community. Fill out the form below
          to submit your startup pitch.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your startup title"
                      className="startup-form_input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your startup"
                      className="startup-form_textarea"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Category</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Tech, Health, Education"
                      className="startup-form_input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Choose a category that best describes your startup
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the URL for your startup image"
                      className="startup-form_input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a URL for your startup's featured image
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pitch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Pitch</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your idea and what problem it solves. You can use plain text to explain your concept."
                      className="min-h-[300px] startup-form_textarea"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Write a compelling pitch that explains your startup's value
                    proposition
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="startup-form_btn text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Submit Your Pitch
                  <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default StartupForm;
