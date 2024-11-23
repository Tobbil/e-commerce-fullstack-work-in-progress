const ProductPage = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

// export async function getStaticPaths() {
//     // Fetch the list of products (replace with your actual API endpoint)
//     const res = await fetch("https://example.com/api/products");
//     const products = await res.json();
  
//     // Generate paths for each product
//     const paths = products.map((product) => ({
//       params: { id: product.id.toString() },
//     }));
  
//     return {
//       paths, // Pre-render these paths
//       fallback: false, // Show 404 for missing products
//     };
//   }
  
//   export async function getStaticProps({ params }) {
//     // Fetch data for a single product based on its id
//     const res = await fetch(`https://example.com/api/products/${params.id}`);
//     const product = await res.json();
  
//     return {
//       props: {
//         product, // Pass product data to the component
//       },
//     };
//   }

export default ProductPage;