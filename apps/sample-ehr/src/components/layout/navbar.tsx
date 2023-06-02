import {
  Center,
  Code,
  Group,
  NavLink,
  Navbar,
  Stack,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconFlame,
  IconHome,
  IconLogout2,
  IconThumbUp,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { link: "/", label: "Dashboard", icon: <IconHome /> },
  { link: "/patients", label: "Patients", icon: <IconUsers /> },
  { link: "/performance", label: "Performance", icon: <IconThumbUp /> },
];

export default function CustomNavbar() {
  const router = useRouter();
  return (
    <Navbar height="100vh" width={{ sm: 210 }}>
      <Navbar.Section m="sm">
        <Stack>
          <Group spacing="xs">
            <ThemeIcon radius="xl" size="lg" color="red">
              <IconFlame />
            </ThemeIcon>
            <Title order={3}>Sample EHR</Title>
          </Group>
        </Stack>
      </Navbar.Section>
      <Navbar.Section grow>
        <Stack spacing="xs">
          {links.map((link) => (
            <NavLink
              key={link.label}
              component={Link}
              href={link.link}
              icon={link.icon}
              label={link.label}
              active={
                link.link === "/"
                  ? router.pathname === link.link
                  : router.pathname.startsWith(link.link)
              }
            />
          ))}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack>
          <NavLink
            component={Link}
            href="/logout"
            icon={<IconLogout2 />}
            label="Log out"
          />
          <Code block color="blue">
            <Center>version: {process.env.PACKAGE_VERSION || "local"}</Center>
          </Code>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}