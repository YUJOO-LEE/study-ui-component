const ItemPage = ({ params: { item }}: { params: { item: string[]} }) => {
  const path = ['', ...item].join('/');

  return (
    <div>
      item page: {path}
    </div>
  );
};

export default ItemPage;