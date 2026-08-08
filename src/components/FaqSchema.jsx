import React from 'react';

// Emits FAQPage structured data from the same faqData the page already renders.
// Google can surface these as expandable questions directly in search results,
// which takes up more vertical space than a plain blue link.
const FaqSchema = ({ items, lang }) => {
  const entries = items
    .filter((item) => item.question?.[lang] && item.answer?.[lang])
    .map((item) => ({
      '@type': 'Question',
      name: item.question[lang],
      acceptedAnswer: { '@type': 'Answer', text: item.answer[lang] },
    }));

  if (!entries.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: entries,
        }),
      }}
    />
  );
};

export default FaqSchema;
