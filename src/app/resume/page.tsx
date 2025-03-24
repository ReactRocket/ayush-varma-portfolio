// src/app/resume/page.tsx
import { baseURL } from "@/app/resources";
import { Button, Column, Flex, Heading } from "@/once-ui/components";

export async function generateMetadata() {
  const title = "Resume";
  const description = "View and download my resume.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/resume`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Resume() {
  return (
    <Column
      maxWidth="m"
      padding="l"
      className="flex flex-col items-center justify-center h-screen"
    >
      <Heading variant="display-strong-xl" marginBottom="m" align="center">
        Resume
      </Heading>
      <Flex gap="m" horizontal="center">
        {/* Download Button */}
        <Button
          href="/pdf/resume.pdf" // Adjust path if needed (previously /docs/resume.pdf)
          download="resume.pdf"
          variant="primary"
          label="Download"
        />

        {/* View Button */}
        <Button
          href="/pdf/resume.pdf" // Adjust path if needed
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          label="View"
        />
      </Flex>
    </Column>
  );
}