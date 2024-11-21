import { ProductsOrderByEnum } from "#build/gql/default";

let allProducts = [] as Product[];

export function useProducts() {
  // Declare the state variables and the setter functions
  const products = useState<Product[]>('products');
  const isLoading = useState<boolean>('isLoading', () => false);
  /**
   * Sets the products state variable and the allProducts variable.
   * @param {Product[]} newProducts - The new products to set.
   */
  function setProducts(newProducts: Product[]): void {
    isLoading.value = true;
    if (!Array.isArray(newProducts)) throw new Error('Products must be an array.');
    products.value = newProducts ?? [];
    allProducts = JSON.parse(JSON.stringify(newProducts));
    isLoading.value = false;
  }

  const updateProductList = async (): Promise<void> => {
    const { scrollToTop } = useHelpers();
    const { isSortingActive, sortProducts } = useSorting();
    const { isFiltersActive, filterProducts } = useFiltering();
    const { isSearchActive, searchProducts } = useSearching();

    // scroll to top of page
    scrollToTop();

    // return all products if no filters are active
    if (!isFiltersActive.value && !isSearchActive.value && !isSortingActive.value) {
      products.value = allProducts;
      return;
    }

    // otherwise, apply filter, search and sorting in that order
    try {
      let newProducts = [...allProducts];
      if (isFiltersActive.value) newProducts = filterProducts(newProducts);
      if (isSearchActive.value) newProducts = searchProducts(newProducts);
      if (isSortingActive.value) newProducts = sortProducts(newProducts);

      products.value = newProducts;
    } catch (error) {
      console.error(error);
    }
  };



    // Define persistent state for categories, popular products, and new arrivals
    const productCategories = useState<Product[]>('productCategories', () => []);
    const popularProducts = useState<Product[]>('popularProducts', () => []);
    const newArrivalProducts = useState<Product[]>('newArrivalProducts', () => []);
  
    // Loading states
    const isLoadingCategories = useState<boolean>('isLoadingCategories', () => true);
    const isLoadingProducts = useState<boolean>('isLoadingProducts', () => true);

     /**
   * Fetches product data only if not already loaded.
   */
  const fetchData = async () => {
    if (
      productCategories.value.length > 0 &&
      popularProducts.value.length > 0 &&
      newArrivalProducts.value.length > 0
    ) {
      isLoadingCategories.value = false;
      isLoadingProducts.value = false;
      // Data is already loaded, no need to fetch again
      return;
    }

    try {
      // Set loading states
      isLoadingCategories.value = true;
      isLoadingProducts.value = true;

      // Fetch data concurrently
      const [categoriesResult, popularProductsResult, newArrivalsResult] = await Promise.all([
        useAsyncGql('getProductCategories', { first: 6 }),
        useAsyncGql('getProducts', { first: 8, orderby: ProductsOrderByEnum.POPULARITY }),
        useAsyncGql('getProducts', { first: 8, orderby: ProductsOrderByEnum.DATE }),
      ]);

      // Update state with fetched data
      productCategories.value = categoriesResult.data.value?.productCategories?.nodes || [];
      popularProducts.value = popularProductsResult.data.value.products?.nodes || [];
      newArrivalProducts.value = newArrivalsResult.data.value.products?.nodes || [];
    } catch (error) {
      console.error('Failed to fetch data', error);
    } finally {
      // Reset loading states
      isLoadingCategories.value = false;
      isLoadingProducts.value = false;
    }
  };
  return { products, allProducts, setProducts, updateProductList , isLoading, 
    productCategories,
    popularProducts,
    newArrivalProducts,
    fetchData,
    isLoadingCategories,
    isLoadingProducts,};
}

