// import { notFound } from 'next/navigation';
// import { fetchCamperById } from '@/lib/api/campers';
// import DetailsHeader from '@/components/CamperDetails/DetailsHeader';
// import Gallery from '@/components/CamperDetails/Gallery';
// import Tabs from '@/components/CamperDetails/Tabs';

// type PageProps = {
//   params: Promise<{ id: string }>;
// };

// export default async function CamperDetailsPage({ params }: PageProps) {
//   const { id } = await params;

//   const camper = await fetchCamperById(id).catch(() => null);

//   if (!camper) {
//     notFound();
//   }

//   return (
//     <main className="container">
//       <DetailsHeader camper={camper} />
//       <Gallery images={camper.gallery} />
//       <p>{camper.description}</p>
//       <Tabs camper={camper} />
//     </main>
//   );
// }
