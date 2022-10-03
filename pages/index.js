import Head from 'next/head';
import CoreFeatureSection from '../components/CoreFeatureSection';
import FeaturesQualitySection from '../components/FeaturesQualitySection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import SupportSection from '../components/SupportSection';
import Testomonials from '../components/Testomonials';

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
      <Testomonials testimonials={data.testimonials} />
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
    testimonials: [
      {
        id: 1,
        avatar: '../images/testimonials/1.png',
        name: 'Veona Watson',
        username: '@hi.veona',
        text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
      },
      {
        id: 2,
        avatar: '../images/testimonials/2.png',
        name: 'Minnie Horn',
        username: '@hello.mimmie',
        text: `I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.`,
      },
      {
        id: 3,
        avatar: '../images/testimonials/3.png',
        name: 'Merryn Manley',
        username: '@merryn.manley',
        text: `Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.`,
      },
      {
        id: 4,
        avatar: '../images/testimonials/4.png',
        name: 'Paseka Nku',
        username: '@hey.nku',
        text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
      },
      {
        id: 5,
        avatar: '../images/testimonials/5.png',
        name: 'Cherice Justin',
        username: '@cherice.me',
        text: `Thank you for all your help. Your service was excellent and very FAST.`,
      },
      {
        id: 6,
        avatar: '../images/testimonials/6.png',
        name: 'Thais Carballal',
        username: '@myself.thais',
        text: `For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend`,
      },
      {
        id: 7,
        avatar: '../images/testimonials/7.png',
        name: 'Veona Watson',
        username: '@hi.veona',
        text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
      },
      {
        id: 8,
        avatar: '../images/testimonials/8.png',
        name: 'Minnie Horn',
        username: '@hello.mimmie',
        text: `I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.`,
      },
      {
        id: 9,
        avatar: '../images/testimonials/1.png',
        name: 'Veona Watson',
        username: '@hi.veona',
        text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you`,
      },
      {
        id: 10,
        avatar: '../images/testimonials/2.png',
        name: 'Minnie Horn',
        username: '@hello.mimmie',
        text: `I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.`,
      },
      {
        id: 12,
        avatar: '../images/testimonials/4.png',
        name: 'Cherice Justin',
        username: '@cherice.me',
        text: `Thank you for all your help. Your service was excellent and very FAST.`,
      },
      {
        id: 11,
        avatar: '../images/testimonials/5.png',
        name: 'Thais Carballal',
        username: '@myself.thais',
        text: `For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend`,
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
}
