
export default defineAppConfig({
  siteName:  "Nasha Store" ,
  shortDescription:  "t('messages.general.shortDescription')" ,
  description:  "t('messages.general.description')" ,
  baseUrl: 'https://nahastore.com/',
  siteImage: 'http://192.168.99.176:3001/images/logo.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: false,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: false,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
    isNative: false ,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    googlePlayLink:"https://play.google.com/store/apps/details?id=com.nasha.store",
  },
});

