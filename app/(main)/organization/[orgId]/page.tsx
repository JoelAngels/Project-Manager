interface Params {
  orgId: string;
}

const Organization = ({ params }: { params: Params }) => {
  const { orgId } = params;
  return <div>{orgId}</div>;
};

export default Organization;
