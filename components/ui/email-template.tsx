import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  comments: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
  comments,
}) => (
  <Html>
    <Tailwind>
      <Head />
      <Preview>submitted the contact us form</Preview>
      <Body className="bg-white">
        <Container className="mx-auto my-8">
          <Heading className="mb-4 text-2xl font-bold">Travello</Heading>
          <Section className="w-full border-collapse">
            <Row className="border-b border-gray-200 bg-gray-100">
              <Column className="w-24 px-4 py-2 text-gray-600">Field</Column>
              <Column className="px-4 py-2 text-gray-600">Value</Column>
            </Row>
            <Row className="border-b border-gray-200">
              <Column className="w-24 border-r border-gray-200 px-4 py-2">
                Full Name
              </Column>
              <Column className="px-4 py-2">{name}</Column>
            </Row>
            <Row className="border-b border-gray-200">
              <Column className="w-24 border-r border-gray-200 px-4 py-2">
                Email
              </Column>
              <Column className="px-4 py-2">{email}</Column>
            </Row>
            <Row className="border-b border-gray-200 bg-gray-50">
              <Column className="w-24 border-r border-gray-200 px-4 py-2">
                Phone
              </Column>
              <Column className="px-4 py-2">{phone}</Column>
            </Row>
            <Row className="border-b border-gray-200 bg-gray-50">
              <Column className="w-24 border-r border-gray-200 px-4 py-2">
                Comments
              </Column>
              <Column className="px-4 py-2">{comments}</Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
