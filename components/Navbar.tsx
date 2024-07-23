import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navbar() {
    return (
        <NavigationMenu.Root>
            <NavigationMenu.List className = "flex flex-row justify-around">
                <NavigationMenu.Item>
                    <NavigationMenu.Link href="/pages/dashboard">Dashboard</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link href="/pages/inventory">Inventory</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link href="/pages/internship-vault">Internship Vault</NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}