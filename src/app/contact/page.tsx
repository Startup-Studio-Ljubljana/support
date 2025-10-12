"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LandingCard } from "@/components/LandingCard";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify(values),
    });

    toast.success("Thank you for your interest", {
      description: "We will get back to you soon.",
      position: "top-right",
      duration: 5000,
    });

    form.reset();
  }

  return (
    <main className="min-h-[100dvh] flex flex-col relative">
      <Navbar />

      <div className="lg:h-24"></div>

      <div className="container max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-32 pb-12 md:px-12">
        <div className="flex flex-col gap-4 pt-6 md:pt-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-8 max-md:text-center">
            Let’s discuss
            <br />
            your needs
          </h1>
          <p className="hidden md:block text-gray-600 text-lg leading-relaxed">
            Schedule a 1:1 consultation with a BauScribe expert to explore how
            our AI-driven platform can help your business scale multilingual
            content—no commitments required.
          </p>
        </div>
        <LandingCard className="md:pt-8 md:px-6 md:pb-8 max-md:mx-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 items-center w-full"
            >
              <h3 className="hidden md:block text-3xl font-semibold text-gray-900 mb-4">
                Contact us
              </h3>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          placeholder="Your first name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full"
                          placeholder="Your last name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Business email*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="example@company.com"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-fit mb-6">
                Request demo
              </Button>
              <p className="text-gray-600 text-xs leading-relaxed md:pb-2">
                By clicking "Request demo" you acknowledge that you have read
                and understood, and agree to BauScribe Terms of Service and
                Privacy Policy and Consent Notice.
              </p>
            </form>
          </Form>
        </LandingCard>
      </div>

      <div className="flex-1"></div>
      <Footer />
    </main>
  );
}
