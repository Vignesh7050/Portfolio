type SectionHeaderProps = {
  headerName: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const { headerName } = props;
  return (
    <h3 className='font-bold text-3xl text-header-color text-center'>
      {headerName}
    </h3>
  );
};
