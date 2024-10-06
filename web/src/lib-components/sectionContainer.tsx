import { SectionHeader } from '.';

type SectionsContainerProps = {
  id: string;
  children: React.ReactNode;
  headerName?: string;
};

export const SectionContainer = (props: SectionsContainerProps) => {
  const { id, children, headerName } = props;
  return (
    <section
      id={id}
      className={`bg-section-bg w-full h-max flex flex-col px-6 py-12 border-t border-header-border scroll-mt-18 gap-10`}
    >
      {headerName && <SectionHeader headerName={headerName} />}
      {children}
    </section>
  );
};
