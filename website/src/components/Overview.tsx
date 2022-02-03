import * as React from "react";

import { MetaIcon } from "../types";

import * as Bootstrap from "@chakra-icons/bootstrap";
import * as FlatIcon from "@chakra-icons/flat-icon";
import {
  Code,
  ComponentWithAs,
  IconProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";

type Icon = Omit<MetaIcon, "iconPath" | "sources" | "clonePath" | "sourcePath"> & {
  creator: string;
  code: string;
};

const Item = ({ children, name, code }: StackProps & Icon) => {
  const color = "gray.300";
  const hoverColor = "blue.500";
  return (
    <Popover isLazy placement="top-start">
      <PopoverTrigger>
        <Stack
          cursor="pointer"
          borderWidth="0.3vh"
          borderStyle="dotted"
          color={color}
          fill={color}
          borderColor={color}
          borderRadius="lg"
          _hover={{
            color: hoverColor,
            fill: hoverColor,
            borderStyle: "solid",
            borderColor: hoverColor,
          }}
          boxSize="15vh"
          alignItems="center"
          justifyContent="center"
          aria-label={name}
        >
          {React.isValidElement(children) ? React.cloneElement(children, { boxSize: "5vh" }) : null}
          <Text fontWeight="bold" fontSize="xs" isTruncated maxW="full" px="2">
            {name}
          </Text>
        </Stack>
      </PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverHeader fontWeight="semibold">{name}</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Code colorScheme="blackAlpha">{code}</Code>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export function Overview({ icons }: { icons: Icon[] }) {
  return (
    <SimpleGrid columns={[3, 6, 6, 7]} spacing={[8, 5, 5, 5]}>
      {icons
        .map((icon) => {
          const { name: iconName, creator } = icon;
          const getComponent = (name: string): ComponentWithAs<"svg", IconProps> | undefined =>
            Bootstrap
              ? // @ts-expect-error this is access submodule
                Bootstrap[name] || FlatIcon[name]
              : undefined;

          const Component = getComponent(iconName);

          if (Component) {
            return (
              <Item key={`${iconName}${creator}`} {...icon}>
                <Component />
              </Item>
            );
          }
          return null;
        })
        .filter(Boolean)}
    </SimpleGrid>
  );
}