import CoreFeatureSection from '../components/CoreFeatureSection';
import FeaturesQualitySection from '../components/FeaturesQualitySection';
import Hero from '../components/Hero';
import SupportSection from '../components/SupportSection';

export default function Home({ data }) {
  return (
    <>
      <Hero />
      <SupportSection />
      <CoreFeatureSection accordionData={data.accordion} />
      <FeaturesQualitySection featureQuality={data.featureQulity} />
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
    featureQulity: [
      {
        name: 'Budget Overview',
        icon: '../images/icons/budget.svg',
        heading:
          'Introduce quality feature that boost your website rank & performance',
        desc: 'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.',
      },
      {
        name: 'Create & adjust',
        icon: '../images/icons/manage.svg',
        heading:
          'Introduce quality feature that boost your website rank & performance',
        desc: 'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.',
      },
      {
        name: 'View Reports',
        icon: '../images/icons/reports.svg',
        heading:
          'Introduce quality feature that boost your website rank & performance',
        desc: 'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.',
      },
      {
        name: 'Optimize website',
        icon: '../images/icons/optimize.svg',
        heading:
          'Introduce quality feature that boost your website rank & performance',
        desc: 'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.',
      },
      {
        name: 'Custom Dashboard',
        icon: '../images/icons/custom-dash.svg',
        heading:
          'Introduce quality feature that boost your website rank & performance',
        desc: 'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.',
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
}
