import FeaturesSection from '../components/FeaturesSection';
import Hero from '../components/Hero';
import SupportSection from '../components/SupportSection';

export default function Home({ data }) {
  return (
    <>
      <Hero />
      <SupportSection />
      <FeaturesSection accordionData={data.accordion} />
    </>
  );
}
export async function getStaticProps() {
  const data = {
    accordion: [
      {
        heading: 'Organize your project content',
        desc: 'Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.',
      },
      {
        heading: 'Collaborate your documents easily',
        desc: 'Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.',
      },
      {
        heading: 'Build your teams knowledge base system',
        desc: 'Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.',
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
}
