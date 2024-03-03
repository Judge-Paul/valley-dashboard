import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormInputLabel from "@/components/FormInputLabel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companySchema } from "@/lib/zod";
import { useToast } from "@/components/ui/use-toast";

export default function Company() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      website: "",
      linkedin: "",
      industry: "",
      employees: "one_to_ten",
      desc: "",
      goals: "",
      headquarters: "",
      funding_round: "",
      faqs: "",
    },
  });

  function showUnavailable(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    toast({
      variant: "destructive",
      title: "Feature Not Yet available",
    });
  }

  function onSubmit(values: z.infer<typeof companySchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-7 py-4 sm:py-10"
        >
          <div className="flex w-full flex-wrap-reverse justify-between md:flex-nowrap">
            <div className="flex gap-6 sm:gap-7">
              <Image src={Logo} alt="Sixteen Logo" className="size-24 md:size-28" />
              <div className="my-auto">
                <div className="mb-1.5 flex max-w-max gap-1.5 sm:gap-3">
                  <Button variant="destructive" onClick={showUnavailable}>
                    Remove
                  </Button>
                  <Button variant="outline" onClick={showUnavailable}>
                    Change Photo
                  </Button>
                </div>
                <span className="text-[0.7rem] text-gray-400 sm:text-base">
                  or drag and drop (SVG, PNG, JPG)
                </span>
              </div>
            </div>
            <div className="mb-8 flex w-full gap-3 sm:mb-0 sm:w-max [&>button]:w-full">
              <Button
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  form.reset();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </div>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            <FormInputLabel
              control={form.control}
              name="name"
              type="text"
              label="Company's Name"
            />
            <FormInputLabel
              control={form.control}
              name="website"
              type="url"
              label="Company's Website"
            />
            <FormInputLabel
              control={form.control}
              name="linkedin"
              type="url"
              label="Company's Linkedin"
            />
            <FormInputLabel
              control={form.control}
              name="industry"
              type="text"
              label="Company's Industry"
            />
            <FormField
              control={form.control}
              name="employees"
              render={({ field }) => (
                <FormControl>
                  <FormItem>
                    <FormLabel>Employee Count</FormLabel>
                    <ToggleGroup
                      onValueChange={field.onChange}
                      variant="outline"
                      type="single"
                      defaultValue={field.value}
                      className="w-max"
                      role="radiogroup"
                      {...form.register("employees", { required: true })}
                    >
                      <ToggleGroupItem
                        value="one_to_ten"
                        role="radio"
                        aria-label="Toggle one to ten"
                      >
                        1 - 10
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="ten_to_hundred"
                        role="radio"
                        aria-label="Toggle ten to hundred"
                      >
                        10 - 100
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="hundred_and_one_to_five_hundred"
                        role="radio"
                        aria-label="Toggle one hundred and one to five hundred"
                      >
                        101 - 500
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="one_thousand_plus"
                        role="radio"
                        aria-label="Toggle one thousand and above"
                      >
                        1000+
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormItem>
                </FormControl>
              )}
            />
          </div>
          <div className="grid gap-7">
            <FormInputLabel
              control={form.control}
              name="desc"
              type="text"
              label="Company description"
              description="Your detailed company description"
            />
            <FormInputLabel
              control={form.control}
              name="goals"
              type="text"
              label="What are your company goals?"
            />
            <FormInputLabel
              control={form.control}
              name="headquarters"
              type="text"
              label="Headquarters"
            />
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <FormField
                control={form.control}
                name="funding_round"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="funding_round">Funding Round</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <FormItem>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Funding Round" />
                          </SelectTrigger>
                        </FormItem>
                      </FormControl>
                      <SelectContent align="end">
                        <SelectItem value="no_funding">No Funding</SelectItem>
                        <SelectItem value="pre_seed">Pre Seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series_a">Series A</SelectItem>
                        <SelectItem value="series_b">Series B</SelectItem>
                        <SelectItem value="series_c">Series C</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormInputLabel
              control={form.control}
              name="faqs"
              type="url"
              label="FAQs"
            />
          </div>
        </form>
      </Form>
    </>
  );
}
