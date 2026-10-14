import React from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function OrganizationJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "GeneralContractor", "HomeAndConstructionBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: company.legalName,
        alternateName: company.name,
        legalName: company.legalName,
        slogan: company.tagline,
        description: company.description,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/brand/logo.png`,
          caption: "FURSCH INFRA LLP Official Logo",
        },
        image: `${siteUrl}/images/team/team-bkc-station.jpg`,
        email: company.contact.email,
        telephone: [company.contact.phonePrimary, company.contact.phoneSecondary],
        sameAs: [company.contact.instagram],
        priceRange: "$$$",
        currenciesAccepted: "INR",
        paymentAccepted: "Bank Transfer, Cheque",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "19.0760",
          longitude: "72.8777",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Pune" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "City", name: "Lucknow" },
          { "@type": "City", name: "Patna" },
          { "@type": "Country", name: "India" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Turnkey Contracting & Architectural Finishing Capabilities",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${siteUrl}/expertise/${service.slug}#service`,
              name: service.title,
              description: service.shortDescription,
              url: `${siteUrl}/expertise/${service.slug}`,
            },
          })),
        },
        knowsAbout: [
          "Turnkey Civil Contracting",
          "Architectural Finishing",
          "Marble, Stone and Tile Flooring",
          "Interior and Exterior Cladding",
          "Gypsum Work, Wall Punning and False Ceilings",
          "Interior and Exterior Painting",
          "Electrical Conduiting and Distribution",
          "Plumbing Lines and Sanitary Fixtures",
          "Metro Station Architectural Finishing",
          "±0.5mm Engineering Tolerance",
          "Material-Wastage Reduction",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: company.name,
        description: company.positioning,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.legalName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(image ? { image } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({
  name,
  description,
  client,
  location,
  sector,
  url,
  image,
}: {
  name: string;
  description: string;
  client?: string;
  location?: string;
  sector?: string;
  url: string;
  image?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    creator: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.legalName,
    },
    ...(client ? { sponsor: { "@type": "Organization", name: client } } : {}),
    ...(location ? { contentLocation: { "@type": "Place", name: location } } : {}),
    ...(sector ? { genre: sector } : {}),
    ...(image ? { image } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
