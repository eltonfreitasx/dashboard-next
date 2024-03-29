import { SettingsTabs } from './components/SettingsTabs';
import * as Input from './components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react';
import { Control, FileList, ImagePreview, Root, Trigger } from './components/Form/FileInput';
import { Select } from './components/Form/Select';
import { SelectItem } from './components/Form/Select/Select.Item';
import { Textarea } from './components/Form/Textarea';
import { Button } from './components/Button';

export default function Home() {
  return (
    <>
      <h1 className="to-zinc-900 text-3xl font-medium dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"

      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.InputRoot>
              <Input.InputControl id="firstName" defaultValue="Elton" />
            </Input.InputRoot>
            <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
              >
                Last name
              </label>

              <Input.InputRoot>
                <Input.InputControl id="lastName" defaultValue="Fernandes" />
              </Input.InputRoot>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email address
          </label>
          <div className="gap-6">
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500 mr-2 " />
              </Input.InputPrefix>
              <Input.InputControl id="email" type="email" defaultValue="xelton207@gmail.com" />
            </Input.InputRoot>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Your photo
            <span className="text-sm font-normal text-zinc-500 mt-0.5 block">
              This will be displayed on your profile.
            </span>
          </label>
          <Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <ImagePreview />
            <Trigger />
            <Control />
          </Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Role
          </label>
          <div className="gap-6">
            <Input.InputRoot>
              <Input.InputControl id="role" type="email" defaultValue="desenvolvedor Jr." />
            </Input.InputRoot>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="Country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United States" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Timezone
          </label>
          <Select placeholder="Select a timezone...">
            <SelectItem
              value="utc8"
              text="Pacific Standard Time (UTC-08:00)"
            />
            <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="bio"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Bio
            <span className="text-sm font-normal text-zinc-500 mt-0.5 block">
              Write a short introduction.
            </span>
          </label>

          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem
                  value="normal"
                  defaultChecked
                  text="Normal Text"
                />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
              </div>
            </div>
            <Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Portfolio projects
            <span className="text-sm font-normal text-zinc-500 mt-0.5 block">
              Share a few snippets of your work.
            </span>
          </label>
          <Root>
            <Trigger />
            <FileList />
            <Control multiple />
          </Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>

    </>
  );
}
