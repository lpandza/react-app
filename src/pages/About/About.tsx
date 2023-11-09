import { aboutPageContent } from './aboutPageContent.ts';

export function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="mb-12 text-center text-5xl font-bold text-gray-800">{aboutPageContent.title}</h1>

        <div className="rounded-lg bg-white p-8 shadow-xl md:p-16">
          <p className="mb-8 text-xl text-gray-700 md:text-2xl">{aboutPageContent.description}</p>

          <h2 className="mb-6 text-3xl font-semibold text-gray-800">{aboutPageContent.poweredBy}</h2>
          <p className="mb-8 text-lg text-gray-600">{aboutPageContent.apiDescription}</p>

          <ul className="mb-8 list-disc pl-6 text-gray-600">
            {aboutPageContent.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
