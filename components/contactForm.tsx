"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/lib/use-toast";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  contact: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(300, { message: "Message must not be longer than 300 characters." }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully.",
        });
        form.reset(); // Reset the form after successful submission
      } else {
        toast({
          title: "Error",
          description: "There was an error sending your message.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message.",
      });
    }
  }

  return (
    <Form {...form}>
      <div className="flex flex-col justify-center items-center gap-6 mb-12 container">
        <h2 className="text-4xl font-bold text-center">Let&apos;s Play!</h2>
        <h3 className="text-2xl font-semibold text-center">
          FEEL FREE TO CONTACT ME FOR FUTURE WORK AND PARTNERSHIPS
        </h3>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container lg:w-2/3 space-y-6"
      >
        <div className="lg:flex lg:gap-6 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="lg:flex lg:gap-6 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-1/4 min-w-fit"
            aria-label="click to submit"
          >
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
