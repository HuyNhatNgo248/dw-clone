/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'service-offers': ServiceOffer;
    footers: Footer;
    'navigation-bars': NavigationBar;
    'subscription-forms': SubscriptionForm;
    'navigation-menus': NavigationMenu;
    'main-menu-items': MainMenuItem;
    'order-details': OrderDetail;
    'order-items': OrderItem;
    'payment-details': PaymentDetail;
    'user-payment': UserPayment;
    discounts: Discount;
    'product-categories': ProductCategory;
    'product-inventory': ProductInventory;
    products: Product;
    'product-variants': ProductVariant;
    'product-size-guides': ProductSizeGuide;
    'cart-item': CartItem;
    'shopping-session': ShoppingSession;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'service-offers': ServiceOffersSelect<false> | ServiceOffersSelect<true>;
    footers: FootersSelect<false> | FootersSelect<true>;
    'navigation-bars': NavigationBarsSelect<false> | NavigationBarsSelect<true>;
    'subscription-forms': SubscriptionFormsSelect<false> | SubscriptionFormsSelect<true>;
    'navigation-menus': NavigationMenusSelect<false> | NavigationMenusSelect<true>;
    'main-menu-items': MainMenuItemsSelect<false> | MainMenuItemsSelect<true>;
    'order-details': OrderDetailsSelect<false> | OrderDetailsSelect<true>;
    'order-items': OrderItemsSelect<false> | OrderItemsSelect<true>;
    'payment-details': PaymentDetailsSelect<false> | PaymentDetailsSelect<true>;
    'user-payment': UserPaymentSelect<false> | UserPaymentSelect<true>;
    discounts: DiscountsSelect<false> | DiscountsSelect<true>;
    'product-categories': ProductCategoriesSelect<false> | ProductCategoriesSelect<true>;
    'product-inventory': ProductInventorySelect<false> | ProductInventorySelect<true>;
    products: ProductsSelect<false> | ProductsSelect<true>;
    'product-variants': ProductVariantsSelect<false> | ProductVariantsSelect<true>;
    'product-size-guides': ProductSizeGuidesSelect<false> | ProductSizeGuidesSelect<true>;
    'cart-item': CartItemSelect<false> | CartItemSelect<true>;
    'shopping-session': ShoppingSessionSelect<false> | ShoppingSessionSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug: string;
  serviceOffers?: (number | null) | ServiceOffer;
  navigationBar?: (number | null) | NavigationBar;
  dynamicZone?: (HeroBlock | PromoBlock | ProductGridBlock | IntroductionTextBlock | ProductCategoriesBlock)[] | null;
  subscriptionForm?: (number | null) | SubscriptionForm;
  footer?: (number | null) | Footer;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-offers".
 */
export interface ServiceOffer {
  id: number;
  title: string;
  layout?: ListItemBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ListItemBlock".
 */
export interface ListItemBlock {
  text?: string | null;
  link?: string | null;
  iconField?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'list-item';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-bars".
 */
export interface NavigationBar {
  id: number;
  title: string;
  navigationMenu?: (number | null) | NavigationMenu;
  layout?: NavigationBarBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-menus".
 */
export interface NavigationMenu {
  id: number;
  title: string;
  layout?: NavigationMenuBlock[] | null;
  serviceOffers?: ListItemBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavigationMenuBlock".
 */
export interface NavigationMenuBlock {
  layout?: (ListItemBlock | MainMenuItemBlock)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Navigation Menu';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MainMenuItemBlock".
 */
export interface MainMenuItemBlock {
  mainMenuItems?: (number | MainMenuItem)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'main-menu-item';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu-items".
 */
export interface MainMenuItem {
  id: number;
  title: string;
  categoryTitle?: string | null;
  slug: string;
  subcategories?:
    | {
        subcategoryTitle?: string | null;
        layout?: (ListItemBlock | ImageBlock)[] | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageBlock".
 */
export interface ImageBlock {
  image: number | Media;
  caption?: string | null;
  description?: string | null;
  link?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'image';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavigationBarBlock".
 */
export interface NavigationBarBlock {
  layout?: (FirstLevelBlock | SecondLevelBlock)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Navigation Bar';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FirstLevelBlock".
 */
export interface FirstLevelBlock {
  leftIconList?: FirstLevelItemBlock[] | null;
  title?: string | null;
  rightIconList?: FirstLevelItemBlock[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'First Level';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FirstLevelItemBlock".
 */
export interface FirstLevelItemBlock {
  text?: string | null;
  link?: string | null;
  iconField?: string | null;
  type?: ('menu-trigger' | 'link') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'First Level Item';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SecondLevelBlock".
 */
export interface SecondLevelBlock {
  layout?: SecondLevelItemBlock[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Second Level';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SecondLevelItemBlock".
 */
export interface SecondLevelItemBlock {
  text?: string | null;
  link?: string | null;
  iconField?: string | null;
  mainMenuItems?: (number | MainMenuItem)[] | null;
  type?: ('menu-trigger' | 'link') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Second Level Item';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  heading?: string | null;
  subheading?: string | null;
  subtitle?: string | null;
  layout?: (ButtonBlock | ImageBlock)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ButtonBlock".
 */
export interface ButtonBlock {
  text: string;
  link: string;
  iconField?: string | null;
  variant?: ('primary' | 'secondary' | 'tertiary') | null;
  size?: ('small' | 'medium' | 'large') | null;
  openInNewTab?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Button';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PromoBlock".
 */
export interface PromoBlock {
  heading?: string | null;
  subheading?: string | null;
  subtitle?: string | null;
  body?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  layout?: (ButtonBlock | ImageBlock)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Promo';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProductGridBlock".
 */
export interface ProductGridBlock {
  heading?: string | null;
  subheading?: string | null;
  layout?: ImageBlock[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ProductGrid';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IntroductionTextBlock".
 */
export interface IntroductionTextBlock {
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'Introduction Text Block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProductCategoriesBlock".
 */
export interface ProductCategoriesBlock {
  productCategories?: (number | ProductCategory)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Product Categories';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-categories".
 */
export interface ProductCategory {
  id: number;
  slug: string;
  title: string;
  desc?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "subscription-forms".
 */
export interface SubscriptionForm {
  id: number;
  title: string;
  layout?: SubscriptionFormBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SubscriptionFormBlock".
 */
export interface SubscriptionFormBlock {
  heading?: string | null;
  subheading?:
    | {
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  layout?: FormBlock[] | null;
  privacyStatement?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'SubscriptionForm';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormBlock".
 */
export interface FormBlock {
  heading?: string | null;
  subheading?: string | null;
  layout?: (InputBlock | ButtonBlock)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Form';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "InputBlock".
 */
export interface InputBlock {
  label?: string | null;
  placeholder?: string | null;
  helperText?: string | null;
  type: 'text' | 'email' | 'password';
  id?: string | null;
  blockName?: string | null;
  blockType: 'Input';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footers".
 */
export interface Footer {
  id: number;
  title: string;
  layout?: FooterBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FooterBlock".
 */
export interface FooterBlock {
  navColumns?:
    | {
        title?: string | null;
        layout?: ListItemBlock[] | null;
        id?: string | null;
      }[]
    | null;
  socialMedia?: ListItemBlock[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Footer';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order-details".
 */
export interface OrderDetail {
  id: number;
  user_id: string;
  total: number;
  payment_id: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order-items".
 */
export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payment-details".
 */
export interface PaymentDetail {
  id: number;
  order_id: number;
  amount: number;
  provider: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-payment".
 */
export interface UserPayment {
  id: number;
  user_id: number;
  payment_type: string;
  provider: string;
  account_no: number;
  expiry: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "discounts".
 */
export interface Discount {
  id: number;
  name: string;
  desc?: string | null;
  discount_percent: number;
  active?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-inventory".
 */
export interface ProductInventory {
  id: number;
  quantity: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: number;
  name: string;
  category: number | ProductCategory;
  variants: (number | ProductVariant)[];
  layout?: (number | null) | ServiceOffer;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-variants".
 */
export interface ProductVariant {
  id: number;
  name: string;
  color: string;
  size:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  sizeGuide?: (number | null) | ProductSizeGuide;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  price: number;
  discount?: (number | null) | Discount;
  images?: ImageBlock[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-size-guides".
 */
export interface ProductSizeGuide {
  id: number;
  name: string;
  guide: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cart-item".
 */
export interface CartItem {
  id: number;
  session_id: number;
  product_id: number;
  quantity: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shopping-session".
 */
export interface ShoppingSession {
  id: number;
  user_id: string;
  total: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'service-offers';
        value: number | ServiceOffer;
      } | null)
    | ({
        relationTo: 'footers';
        value: number | Footer;
      } | null)
    | ({
        relationTo: 'navigation-bars';
        value: number | NavigationBar;
      } | null)
    | ({
        relationTo: 'subscription-forms';
        value: number | SubscriptionForm;
      } | null)
    | ({
        relationTo: 'navigation-menus';
        value: number | NavigationMenu;
      } | null)
    | ({
        relationTo: 'main-menu-items';
        value: number | MainMenuItem;
      } | null)
    | ({
        relationTo: 'order-details';
        value: number | OrderDetail;
      } | null)
    | ({
        relationTo: 'order-items';
        value: number | OrderItem;
      } | null)
    | ({
        relationTo: 'payment-details';
        value: number | PaymentDetail;
      } | null)
    | ({
        relationTo: 'user-payment';
        value: number | UserPayment;
      } | null)
    | ({
        relationTo: 'discounts';
        value: number | Discount;
      } | null)
    | ({
        relationTo: 'product-categories';
        value: number | ProductCategory;
      } | null)
    | ({
        relationTo: 'product-inventory';
        value: number | ProductInventory;
      } | null)
    | ({
        relationTo: 'products';
        value: number | Product;
      } | null)
    | ({
        relationTo: 'product-variants';
        value: number | ProductVariant;
      } | null)
    | ({
        relationTo: 'product-size-guides';
        value: number | ProductSizeGuide;
      } | null)
    | ({
        relationTo: 'cart-item';
        value: number | CartItem;
      } | null)
    | ({
        relationTo: 'shopping-session';
        value: number | ShoppingSession;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  serviceOffers?: T;
  navigationBar?: T;
  dynamicZone?:
    | T
    | {
        Hero?: T | HeroBlockSelect<T>;
        Promo?: T | PromoBlockSelect<T>;
        ProductGrid?: T | ProductGridBlockSelect<T>;
        'Introduction Text Block'?: T | IntroductionTextBlockSelect<T>;
        'Product Categories'?: T | ProductCategoriesBlockSelect<T>;
      };
  subscriptionForm?: T;
  footer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  heading?: T;
  subheading?: T;
  subtitle?: T;
  layout?:
    | T
    | {
        Button?: T | ButtonBlockSelect<T>;
        image?: T | ImageBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ButtonBlock_select".
 */
export interface ButtonBlockSelect<T extends boolean = true> {
  text?: T;
  link?: T;
  iconField?: T;
  variant?: T;
  size?: T;
  openInNewTab?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageBlock_select".
 */
export interface ImageBlockSelect<T extends boolean = true> {
  image?: T;
  caption?: T;
  description?: T;
  link?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PromoBlock_select".
 */
export interface PromoBlockSelect<T extends boolean = true> {
  heading?: T;
  subheading?: T;
  subtitle?: T;
  body?: T;
  layout?:
    | T
    | {
        Button?: T | ButtonBlockSelect<T>;
        image?: T | ImageBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProductGridBlock_select".
 */
export interface ProductGridBlockSelect<T extends boolean = true> {
  heading?: T;
  subheading?: T;
  layout?:
    | T
    | {
        image?: T | ImageBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IntroductionTextBlock_select".
 */
export interface IntroductionTextBlockSelect<T extends boolean = true> {
  content?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ProductCategoriesBlock_select".
 */
export interface ProductCategoriesBlockSelect<T extends boolean = true> {
  productCategories?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-offers_select".
 */
export interface ServiceOffersSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        'list-item'?: T | ListItemBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ListItemBlock_select".
 */
export interface ListItemBlockSelect<T extends boolean = true> {
  text?: T;
  link?: T;
  iconField?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footers_select".
 */
export interface FootersSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        Footer?: T | FooterBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FooterBlock_select".
 */
export interface FooterBlockSelect<T extends boolean = true> {
  navColumns?:
    | T
    | {
        title?: T;
        layout?:
          | T
          | {
              'list-item'?: T | ListItemBlockSelect<T>;
            };
        id?: T;
      };
  socialMedia?:
    | T
    | {
        'list-item'?: T | ListItemBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-bars_select".
 */
export interface NavigationBarsSelect<T extends boolean = true> {
  title?: T;
  navigationMenu?: T;
  layout?:
    | T
    | {
        'Navigation Bar'?: T | NavigationBarBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavigationBarBlock_select".
 */
export interface NavigationBarBlockSelect<T extends boolean = true> {
  layout?:
    | T
    | {
        'First Level'?: T | FirstLevelBlockSelect<T>;
        'Second Level'?: T | SecondLevelBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FirstLevelBlock_select".
 */
export interface FirstLevelBlockSelect<T extends boolean = true> {
  leftIconList?:
    | T
    | {
        'First Level Item'?: T | FirstLevelItemBlockSelect<T>;
      };
  title?: T;
  rightIconList?:
    | T
    | {
        'First Level Item'?: T | FirstLevelItemBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FirstLevelItemBlock_select".
 */
export interface FirstLevelItemBlockSelect<T extends boolean = true> {
  text?: T;
  link?: T;
  iconField?: T;
  type?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SecondLevelBlock_select".
 */
export interface SecondLevelBlockSelect<T extends boolean = true> {
  layout?:
    | T
    | {
        'Second Level Item'?: T | SecondLevelItemBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SecondLevelItemBlock_select".
 */
export interface SecondLevelItemBlockSelect<T extends boolean = true> {
  text?: T;
  link?: T;
  iconField?: T;
  mainMenuItems?: T;
  type?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "subscription-forms_select".
 */
export interface SubscriptionFormsSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        SubscriptionForm?: T | SubscriptionFormBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SubscriptionFormBlock_select".
 */
export interface SubscriptionFormBlockSelect<T extends boolean = true> {
  heading?: T;
  subheading?:
    | T
    | {
        text?: T;
        id?: T;
      };
  layout?:
    | T
    | {
        Form?: T | FormBlockSelect<T>;
      };
  privacyStatement?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormBlock_select".
 */
export interface FormBlockSelect<T extends boolean = true> {
  heading?: T;
  subheading?: T;
  layout?:
    | T
    | {
        Input?: T | InputBlockSelect<T>;
        Button?: T | ButtonBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "InputBlock_select".
 */
export interface InputBlockSelect<T extends boolean = true> {
  label?: T;
  placeholder?: T;
  helperText?: T;
  type?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-menus_select".
 */
export interface NavigationMenusSelect<T extends boolean = true> {
  title?: T;
  layout?:
    | T
    | {
        'Navigation Menu'?: T | NavigationMenuBlockSelect<T>;
      };
  serviceOffers?:
    | T
    | {
        'list-item'?: T | ListItemBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "NavigationMenuBlock_select".
 */
export interface NavigationMenuBlockSelect<T extends boolean = true> {
  layout?:
    | T
    | {
        'list-item'?: T | ListItemBlockSelect<T>;
        'main-menu-item'?: T | MainMenuItemBlockSelect<T>;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MainMenuItemBlock_select".
 */
export interface MainMenuItemBlockSelect<T extends boolean = true> {
  mainMenuItems?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu-items_select".
 */
export interface MainMenuItemsSelect<T extends boolean = true> {
  title?: T;
  categoryTitle?: T;
  slug?: T;
  subcategories?:
    | T
    | {
        subcategoryTitle?: T;
        layout?:
          | T
          | {
              'list-item'?: T | ListItemBlockSelect<T>;
              image?: T | ImageBlockSelect<T>;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order-details_select".
 */
export interface OrderDetailsSelect<T extends boolean = true> {
  user_id?: T;
  total?: T;
  payment_id?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "order-items_select".
 */
export interface OrderItemsSelect<T extends boolean = true> {
  order_id?: T;
  product_id?: T;
  quantity?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payment-details_select".
 */
export interface PaymentDetailsSelect<T extends boolean = true> {
  order_id?: T;
  amount?: T;
  provider?: T;
  status?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-payment_select".
 */
export interface UserPaymentSelect<T extends boolean = true> {
  user_id?: T;
  payment_type?: T;
  provider?: T;
  account_no?: T;
  expiry?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "discounts_select".
 */
export interface DiscountsSelect<T extends boolean = true> {
  name?: T;
  desc?: T;
  discount_percent?: T;
  active?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-categories_select".
 */
export interface ProductCategoriesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  desc?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-inventory_select".
 */
export interface ProductInventorySelect<T extends boolean = true> {
  quantity?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products_select".
 */
export interface ProductsSelect<T extends boolean = true> {
  name?: T;
  category?: T;
  variants?: T;
  layout?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-variants_select".
 */
export interface ProductVariantsSelect<T extends boolean = true> {
  name?: T;
  color?: T;
  size?: T;
  sizeGuide?: T;
  description?: T;
  price?: T;
  discount?: T;
  images?:
    | T
    | {
        image?: T | ImageBlockSelect<T>;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "product-size-guides_select".
 */
export interface ProductSizeGuidesSelect<T extends boolean = true> {
  name?: T;
  guide?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cart-item_select".
 */
export interface CartItemSelect<T extends boolean = true> {
  session_id?: T;
  product_id?: T;
  quantity?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shopping-session_select".
 */
export interface ShoppingSessionSelect<T extends boolean = true> {
  user_id?: T;
  total?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}