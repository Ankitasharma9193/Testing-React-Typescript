type propsType = {
  name?: string;
};

export const Greet = (props: propsType) => {
  return <div>I am in greet {props.name}</div>;
};
