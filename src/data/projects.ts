import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Smart Library System",
    href: "/projects",
    tags: ["Python", "AI", "CRUD", "Search"],
    image: {
      LIGHT: "/images/projects/smart-library-light.png",
      DARK: "/images/projects/smart-library-dark.png",
    },
  },
  {
    index: 1,
    title: "Student Management",
    href: "/projects",
    tags: ["Java", "Swing", "Desktop", "PDF"],
    image: {
      LIGHT: "/images/projects/student-management-1.png",
      DARK: "/images/projects/student-management-2.png",
    },
  },
  {
    index: 2,
    title: "Restaurant POS",
    href: "/projects",
    tags: ["Python", "Tkinter", "SQLite", "POS"],
    image: {
      LIGHT: "/images/projects/restaurant-management-1.png",
      DARK: "/images/projects/restaurant-management-2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Smart Library System",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/smart-library-light.png",
      "/images/projects/smart-library-dark.png",
    ],
    description:
      "An AI-powered smart library management system featuring CRUD operations, intelligent search, and interactive visualization.",
    sourceCodeHref: "https://github.com/saifullahtanim/Smart-Library-System",
    liveWebsiteHref: "#",
  },
  {
    name: "Student Management",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/student-management-1.png",
      "/images/projects/student-management-2.png",
      "/images/projects/student-management-3.png",
    ],
    description:
      "A Java Swing desktop application for managing students with login system, record management, search functionality, and PDF export support.",
    sourceCodeHref:
      "https://github.com/saifullahtanim/student-management-system",
    liveWebsiteHref: "#",
  },
  {
    name: "Restaurant POS",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/restaurant-management-1.png",
      "/images/projects/restaurant-management-2.png",
      "/images/projects/restaurant-management-3.png",
    ],
    description:
      "A desktop POS and billing system for restaurants built with Python Tkinter and SQLite.",
    sourceCodeHref:
      "https://github.com/saifullahtanim/Restaurant-Management-Systems",
    liveWebsiteHref: "#",
  },
  {
    name: "AES Encryption",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/aes-encryption-1.png",
      "/images/projects/aes-encryption-2.png",
      "/images/projects/aes-encryption-3.png",
      "/images/projects/aes-encryption-4.png",
      "/images/projects/aes-encryption-5.png",
    ],
    description:
      "A secure text and file encryption system using the AES algorithm with a simple desktop-friendly workflow.",
    sourceCodeHref:
      "https://github.com/saifullahtanim/Sucure-Text-and-File-Encryption-System-Using-AES",
    liveWebsiteHref: "#",
  },
  {
    name: "Bank Management",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/bank-management-1.png",
      "/images/projects/bank-management-2.png",
    ],
    description:
      "An assembly language based bank management system featuring account creation, PIN verification, balance checks, deposits, and withdrawals.",
    sourceCodeHref:
      "https://github.com/saifullahtanim/ST-Bank-Management-System",
    liveWebsiteHref: "#",
  },
  {
    name: "Bookstore Management",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/bookstore-1.png",
      "/images/projects/bookstore-2.png",
      "/images/projects/bookstore-3.png",
      "/images/projects/bookstore-4.png",
    ],
    description:
      "A bookstore management system with CRUD features, inventory tracking, and simple sales workflow built with PHP and MySQL.",
    sourceCodeHref: "https://github.com/saifullahtanim/bookstore",
    liveWebsiteHref: "#",
  },
];
