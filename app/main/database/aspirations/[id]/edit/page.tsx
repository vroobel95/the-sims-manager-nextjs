import { fetchAspirationById } from '@/app/lib/aspirations/data';
import Breadcrumbs from '@/app/ui/database/aspirations/breadcrumbs';
import Form from '@/app/ui/database/aspirations/edit-form';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Aspiration',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const aspiration = await fetchAspirationById(id);

  if (!aspiration) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Aspirations', href: '/main/database/aspirations' },
          {
            label: 'Edit Aspiration',
            href: `/main/database/aspirations/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form
        aspirationId={id}
        defaultValues={{ name: aspiration.name, iconFile: aspiration.icon_url }}
      />
    </main>
  );
}
