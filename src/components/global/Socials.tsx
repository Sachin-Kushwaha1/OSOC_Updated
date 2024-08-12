import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"; // Updated import

interface Props {
  variant?: "NAV" | "FOOTER";
}

const Socials = ({ variant = "NAV" }: Props) => {
  return (
    <HStack
      spacing="6"
      fontSize="xl"
      display={
        variant === "NAV"
          ? { base: "none", md: "flex" }
          : { base: "flex", md: "none" }
      }
    >
      <Link href="https://www.instagram.com/osoc_nitt/" isExternal aria-label="OSOC Instagram">
        <Icon as={FaInstagram} />
      </Link>
      <Link href="https://www.facebook.com/groups/633779233333438/" isExternal aria-label="OSOC Facebook">
        <Icon as={FaFacebookF} />
      </Link>
      <Link href="https://www.linkedin.com/company/open-source-open-community/" isExternal aria-label="OSOC LinkedIn">
        <Icon as={FaLinkedin} />
      </Link>
      <Link href="https://github.com/osocnitt-dev/" isExternal aria-label="OSOC GitHub">
        <Icon as={FaGithub} />
    </HStack>
  );
};

export default Socials;
