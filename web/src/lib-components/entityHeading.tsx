type EntityHeaderProps = {
  entityHeader: string;
};

export const EntityHeader = (props: EntityHeaderProps) => {
  const { entityHeader } = props;

  return (
    <h4 className='font-bold text-2xl text-center md:text-start text-organization-name'>
      {entityHeader}
    </h4>
  );
};
