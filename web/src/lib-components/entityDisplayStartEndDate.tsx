type EntityDisplayStartEndDateProps = {
  startDate: string;
  endDate: string;
  className?: string;
};

export const EntityDisplayStartEndDate = (
  props: EntityDisplayStartEndDateProps
) => {
  const { startDate, endDate, className } = props;
  return (
    <p className={`text-md font-bold text-experience-date ${className}`}>
      ({startDate} - {endDate})
    </p>
  );
};
