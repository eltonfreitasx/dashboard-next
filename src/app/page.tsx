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
      <h1 className="to-zinc-900 text-3xl font-medium">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lh font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
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

        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"

        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 lg:grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Elton" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue="Freitas" />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
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

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500 mt-0.5 block">
                This will be displayed on your profile.
              </span>
            </label>
            <Root className="flex items-start gap-5">
              <ImagePreview />
              <Trigger />
              <Control />
            </Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700"
            >
              Role
            </label>
            <div className="gap-6">
              <Input.InputRoot>
                <Input.InputControl id="role" type="email" defaultValue="desenvolvedor Jr." />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="Country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
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

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700"
            >
              Bio
              <span className="text-sm font-normal text-zinc-500 mt-0.5 block">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
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
                    <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
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
      </div>
    </>
  );
}
