'use client'

import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Menu, Search, SquareStack, Users } from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UserSpaceWidget } from "./UserSpaceWidget";
import { Profile } from "./Profile";
import * as Collpasible from '@radix-ui/react-collapsible'
import { InputControl, InputPrefix, InputRoot } from "../Input";
import { Button } from "../Button";

export function Sidebar() {
    return (
        <Collpasible.Root className="fixed data-[state=open:bottom-0 lg:data-[state=closed]:bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
            <div className="flex items-center justify-between">
                <Logo />
                <Collpasible.Trigger asChild className="lg:hidden">
                    <Button variant="ghost">
                        <Menu className="h-6 w-6" />
                    </Button>
                </Collpasible.Trigger>
            </div>
            <Collpasible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
            <InputRoot>
                <InputPrefix>
                    <Search className="h-5 w-5 text-zinc-500"/>
                </InputPrefix>
                <InputControl placeholder="Search"/>
            </InputRoot>
            
            <nav className="space-y-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart} />
                <NavItem title="Projects" icon={SquareStack} />
                <NavItem title="Tasks" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
            </nav>

            <div className="flex flex-col gap-6">
                <nav className="">
                <NavItem title="Support" icon={LifeBuoy} />
                <NavItem title="Settings" icon={Cog} />
                <UserSpaceWidget />

                </nav>
                <div className="h-px bg-zinc-200">
                    <Profile />
                </div>
            </div>
            </Collpasible.Content>
        </Collpasible.Root>
    )
}