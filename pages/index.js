import Head from 'next/head';
import CoreFeatureSection from '../components/CoreFeatureSection';
import FeaturesQualitySection from '../components/FeaturesQualitySection';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import SupportSection from '../components/SupportSection';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Agency landing page</title>
      </Head>

      <Hero />
      <SupportSection />
      <CoreFeatureSection accordionData={data.accordion} />
      <FeaturesQualitySection featureQuality={data.featureQulity} />
      <Pricing pricing={data.pricing} />
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
    pricing: {
      monthly: [
        {
          packName: 'Startup Pack',
          price: '$25.99/mo',
          audience: 'For the startup team who work with new come data stack',
          benefits: [
            {
              name: 'Ultimate access to all course, exercises and assessments',
              avaliable: true,
            },
            {
              name: 'Free acess for all kind of exercise corrections with downloads.',
              avaliable: true,
            },
            {
              name: 'Total assessment corrections with free download access system',
              avaliable: true,
            },
            {
              name: 'Unlimited download of courses on the mobile app contents',
              avaliable: false,
            },
            {
              name: 'Download and print courses and exercises in PDF',
              avaliable: false,
            },
          ],
        },
        {
          packName: 'Premium Pack',
          price: '$49.99/mo',
          audience: 'For the Pro users who work with modern data stack',
          benefits: [
            {
              name: 'Ultimate access to all course, exercises and assessments',
              avaliable: true,
            },
            {
              name: 'Free acess for all kind of exercise corrections with downloads.',
              avaliable: true,
            },
            {
              name: 'Total assessment corrections with free download access system',
              avaliable: true,
            },
            {
              name: 'Unlimited download of courses on the mobile app contents',
              avaliable: true,
            },
            {
              name: 'Download and print courses and exercises in PDF',
              avaliable: true,
            },
          ],
        },
      ],
      annual: [
        {
          packName: 'Startup Pack',
          price: '$249.99/mo',
          audience: 'For the startup team who work with new come data stack',
          benefits: [
            {
              name: 'Ultimate access to all course, exercises and assessments',
              avaliable: true,
            },
            {
              name: 'Free acess for all kind of exercise corrections with downloads.',
              avaliable: true,
            },
            {
              name: 'Total assessment corrections with free download access system',
              avaliable: true,
            },
            {
              name: 'Unlimited download of courses on the mobile app contents',
              avaliable: false,
            },
            {
              name: 'Download and print courses and exercises in PDF',
              avaliable: false,
            },
          ],
        },
        {
          packName: 'Premium Pack',
          price: '$309.99/mo',

          audience: 'For the Pro users who work with modern data stack',
          benefits: [
            {
              name: 'Ultimate access to all course, exercises and assessments',
              avaliable: true,
            },
            {
              name: 'Free acess for all kind of exercise corrections with downloads.',
              avaliable: true,
            },
            {
              name: 'Total assessment corrections with free download access system',
              avaliable: true,
            },
            {
              name: 'Unlimited download of courses on the mobile app contents',
              avaliable: true,
            },
            {
              name: 'Download and print courses and exercises in PDF',
              avaliable: true,
            },
          ],
        },
      ],
    },
  };

  return {
    props: {
      data,
    },
  };
}
