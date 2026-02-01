import { notFound } from 'next/navigation';
import { fetchCamperById } from '@/lib/api/campers';
import DetailsHeader from '@/components/CamperDetails/DetailsHeader/DetailsHeader';
import Gallery from '@/components/CamperDetails/Gallery/Gallery';
import Tabs from '@/components/CamperDetails/Tabs/Tabs';

import css from './page.module.css';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CamperDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const camper = await fetchCamperById(id).catch(() => null);

  if (!camper) {
    notFound();
  }

  return (
    <main className="container">
      <DetailsHeader camper={camper} />
      <Gallery images={camper.gallery} />
      <p className={css.description}>{camper.description}</p>
      <Tabs camper={camper} />
    </main>
  );
}