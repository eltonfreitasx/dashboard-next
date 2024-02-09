import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 py-2">
      <img
        src="https://github.com/eltonfreitasx.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Elton Freitas
        </span>
        <span className="truncate text-sm text-zinc-500">
          xelton207@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}