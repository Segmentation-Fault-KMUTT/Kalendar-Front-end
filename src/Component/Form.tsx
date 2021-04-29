const Form = ({
  onSubmit,
  enabledSubmit,
  children,
}: {
  onSubmit: () => void;
  enabledSubmit: boolean;
  children: JSX.Element;
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (enabledSubmit) {
          onSubmit();
        }
      }}>
      {children}
    </form>
  );
};

export default Form;
