import FormInputLabel from "@/components/FormInputLabel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Form() {
  return (
    <>
      <div className="grid gap-7">
        <div className="grid gap-7 md:grid-cols-2">
          <FormInputLabel
            control={form.control}
            name="company_name"
            type="name"
            label="Company's Name"
          />
          <FormInputLabel
            control={form.control}
            name="company_website"
            type="url"
            label="Company's Website"
          />
          <FormInputLabel
            control={form.control}
            name="company_linkedin"
            type="url"
            label="Company's Linkedin"
          />
          <FormInputLabel
            control={form.control}
            name="company_industry"
            type="name"
            label="Company's Industry"
          />
          <div>
            <Label>Employee Count</Label>
            <ToggleGroup
              variant="outline"
              type="single"
              defaultValue="one_to_ten"
              className="w-max"
            >
              <ToggleGroupItem
                value="one_to_ten"
                aria-label="Toggle one to ten"
              >
                1 - 10
              </ToggleGroupItem>
              <ToggleGroupItem
                value="ten_to_hundred"
                aria-label="Toggle ten to hundred"
              >
                10 - 100
              </ToggleGroupItem>
              <ToggleGroupItem
                value="hundred_and_one_to_five_hundred"
                aria-label="Toggle one hundred and one to five hundred"
              >
                101 - 500
              </ToggleGroupItem>
              <ToggleGroupItem
                value="one_thousand_pl"
                aria-label="Toggle one thousand and above"
              >
                1000+
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div className="grid gap-7">
          <FormInputLabel
            control={form.control}
            name="company_desc"
            type="name"
            label="Company description"
          />
          <FormInputLabel
            control={form.control}
            name="company_goals"
            type="name"
            label="What are your company goals?"
          />
          <FormInputLabel
            control={form.control}
            name="headquarters"
            type="name"
            label="Headquarters"
          />
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          <FormInputLabel
            control={form.control}
            name="funding"
            type="name"
            label="Funding Round"
          />
          <FormInputLabel
            control={form.control}
            name="faqs"
            type="url"
            label="FAQs"
          />
        </div>
      </div>
    </>
  );
}
