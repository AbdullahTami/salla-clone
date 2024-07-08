import CostumeIcon from "@/assets/costumes.png";
import RestaurantIcon from "@/assets/restaurants.png";
import ServiceIcon from "@/assets/services.png";
import CharityIcon from "@/assets/charity.png";
import DigitalProductsIcon from "@/assets/digitalProducts.png";
import ContentIcon from "@/assets/content.png";
import WholeSaleIcon from "@/assets/wholeSale.png";
// features
import DesignImage from "@/assets/design.png";
import LanguagesImage from "@/assets/languages.png";
import PaymentImage from "@/assets/payment.png";
import ShippingImage from "@/assets/shipping.png";
import MarketingImage from "@/assets/marketing.png";
import CheckoutImage from "@/assets/checkout.png";
import MobileImage from "@/assets/mobile.png";
import AppleStoreImage from "@/assets/appstore.png";
import GooglePlayImage from "@/assets/get-it-on-google-play-badge.png";
// partners
import BlancoLogo from "@/assets/blanco.png";
import AlbaddahOudLogo from "@/assets/albaddah-oud.png";
import EyeCleanLogo from "@/assets/eye-clean.png";
import GaudyLogo from "@/assets/gaudy.png";
import LaverneLogo from "@/assets/laverne.png";
import AmoudiLogo from "@/assets/amoudi-oud.png";
import DarlenaLogo from "@/assets/darlena.png";
import CvaleyLogo from "@/assets/cvaley.png";
import AlfalehLogo from "@/assets/alfaleh.png";
import AlhumaidhiLogo from "@/assets/alhumaidhi.png";
import AlnaqlyLogo from "@/assets/alnaqly.png";
import CardialLogo from "@/assets/cardial.png";
import AsnansLogo from "@/assets/asnans.png";
import Gameboy from "@/assets/gameboy.png";
import GlizerLogo from "@/assets/glizer.png";
import LadonLogo from "@/assets/ladon.png";
import MinisoLogo from "@/assets/miniso.png";
import IconStoreLogo from "@/assets/iconstore.png";
import IdealOilLogo from "@/assets/ideal-oil.png";
import Mokaab from "@/assets/mokaab.png";
import Mothilla from "@/assets/mothillah.png";
import NiceLogo from "@/assets/nicelogo.png";
import SleepHighLogo from "@/assets/sleephigh.png";
import ZyrosLogo from "@/assets/zyros.png";
// NavLinks Icons
import React from "react";
import { nanoid } from "nanoid";
import NavDigitalProducts from "@/assets/nav-digital-products.png";
import NavFashionIcon from "@/assets/nav-fashion-sector.png";
import NavHealthAndFitnessIcon from "@/assets/nav-health-and-fitness-sector.png";
import NavElectronicsIcon from "@/assets/nav-electronics-sector.png";
import NavJewelryIcon from "@/assets/nav-jewelry-sector.png";
import NavBeautyIcon from "@/assets/nav-beauty-sector.png";
import NavFoodIcon from "@/assets/nav-food-sector.png";
import NavHomeIcon from "@/assets/nav-home-sector.png";
import NavSallaAllIcon from "@/assets/nav-salla-sectors.png";
import NavDesignServicesIcon from "@/assets/nav-design-services-sector.png";
//
import NavApplicationStoreIcon from "@/assets/nav-applications-store.png";
import NavApplicationMakerIcon from "@/assets/nav-applications-maker.png";
import NavPaymentIcon from "@/assets/nav-payment.png";
import NavSallaSpecialIcon from "@/assets/nav-salla-special.png";
import NavMarketingIcon from "@/assets/nav-marketing.png";
import NavLocalMerchantsIcon from "@/assets/nav-local-merchants.png";
//
import NavHelpCenterIcon from "@/assets/nav-help-center.png";
import NavSallaCommunityIcon from "@/assets/nav-salla-community.png";
import NavSallaBlogIcon from "@/assets/nav-salla-blog.png";
import NavDevSpaceIcon from "@/assets/nav-dev-space.png";
import NavSallaAcademyIcon from "@/assets/nav-salla-academy.png";

// Slider Images
import SlideOne from "@/assets/slide-one-image.png";
import SlideTwo from "@/assets/slide-two-image.png";
import SlideThree from "@/assets/slide-three-image.png";
import SlideFour from "@/assets/slide-four-image.png";
import SlideFive from "@/assets/slide-five-image.png";

export const storeCategories = [
  {
    storeCategory: "عبايات وأزياء",
    description: "مزايا عديدة تلائم تجارتك",
    imageSrc: CostumeIcon,
  },
  {
    storeCategory: "قطاع الجملة",
    description: "نقلة نوعية في البيع للشركات والمؤسسات",
    imageSrc: WholeSaleIcon,
  },
  {
    storeCategory: "المطاعم والمقاهي",
    description: "جميع ما تحتاجه لإدارة أعمالك رقميًا",
    imageSrc: RestaurantIcon,
  },
  {
    storeCategory: "صناعة المحتوى",
    description: "المكان الأنسب لتحويل شغفك بصناعة المحتوى إلى أرباح",
    imageSrc: ContentIcon,
  },
  {
    storeCategory: "تقديم الخدمات",
    description: "حلول مميزة لتقديم خدماتك وإدارة أعمالك",
    imageSrc: ServiceIcon,
  },
  {
    storeCategory: "المنتجات الرقمية",
    description: "المكان الأنسب لبيع كافة المنتجات الرقمية",
    imageSrc: DigitalProductsIcon,
  },
  {
    storeCategory: "الجمعيات الخيرية",
    description: "حلول سهلة لكافة الاحتياجات الرقمية لجمعيتكم",
    imageSrc: CharityIcon,
  },
] as const;

export const featuresData = [
  {
    title: "متجرك، على ذوقك",
    description: "نجاحك التجاري يحتاج لمظهر أنيق، اختر مظهرًا يناسب علامتك.",
    bulletPoints: [
      "مكتبة متنوعة من الثيمات الجاهزة القابلة للتخصيص حسب رغبتك.",
      "تخصيص تفاصيل التصميم عن طريق JS و CSS.",
      "كما يمكنك صنع ثيمك الخاص مع Salla Twilight.",
    ],
    imageSrc: DesignImage,
    hrefAppStore: "",
    hrefGooglePlay: "",
  },
  {
    title: "تجارة لا تعرف حدودًا",
    description: "من السعوديَّة لكل العالم بكل سهولة.",
    bulletPoints: [
      "دعم أكثر من 40 لغة.",
      "استقبال المدفوعات من أكثر من 79 دولة.",
      "شحن دولي يغطي معظم دول العالم.",
      "إمكانية إضافة فروع ومستودعات متعددة لمتجرك.",
    ],
    imageSrc: LanguagesImage,
    hrefAppStore: "",
    hrefGooglePlay: "",
  },
  {
    title: "مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!",
    description:
      "استفد من نظام سلة المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات متجرك وعملائك",
    bulletPoints: [
      "وسائل دفع متنوعة تلبي كافة احتياجات عملائك.",
      "تفعيل سريع لنظام المدفوعات خلال يوم واحد.",
      "تحصيل المدفوعات بعد 24 ساعة.",
      "حماية عالية وأمان لكافة عملياتك.",
    ],
    imageSrc: PaymentImage,
    hrefAppStore: "",
    hrefGooglePlay: "",
  },
  {
    title: "أسطول شحن متكامل في خدمة منتجاتك",
    description: "خيارات شحن متنوعة تربط متجرك بالعالم",
    bulletPoints: [
      "ربط سهل بدون عقود.",
      "اربط متجرك بأكثر من 100 شركة شحن وتوصيل محليَّة ودوليَّة.",
      "خدمات شحن ولوجستيات مخصًّصة لجميع أنواع المنتجات.",
      "شحن دولي ومحلي يغطي جميع المدن والقرى، والأماكن البعيدة.",
    ],
    imageSrc: ShippingImage,
    hrefAppStore: "",
    hrefGooglePlay: "",
  },
  {
    title: "حلول تسويقيَّة في مكان واحد",
    description: "استهدف المزيد من العملاء بحلول تسويقية مخصصة",
    bulletPoints: [
      "قدم لعملائك كوبونات خصم مميزة تشجعهم على إتمام الشراء.",
      "تحكم بكافة تفاصيل العروض والخصومات.",
      "دعم التسويق بالعمولة لمتجرك.",
      "استهداف دقيق للسلات المتروكة.",
      "إدارة الحملات الإعلانية على مختلف المنصات.",
    ],
    imageSrc: MarketingImage,
    hrefAppStore: "",
    hrefGooglePlay: "",
  },
  {
    title: "أسعد عملاءك بتجربة شراء سهلة",
    description: "قدم لعملائك أسهل تجربة شراء مع متجرك في سلة",
    bulletPoints: [
      "الشراء مباشرة دون تعقيد أو إنشاء حساب.",
      "الدفع إلكترونياً بخطوات بسيطة.",
    ],
    imageSrc: CheckoutImage,
    hrefAppStore: "",
    hrefGooglePlay: "",
  },
  {
    title: "ركز على البيع، وخل التسويق علينا",
    description:
      "منصة محلي تجمع التاجر المحلي، بالمستهلك المحلي .. لدعم الاقتصاد المحلي.",
    bulletPoints: [
      "قناة تسويق جديدة مجانية لمتجرك.",
      "اجذب شريحة عملاء أكبر ومبيعات أكثر.",
      "اعرض منتجاتك لجمهور مستعد للشراء.",
      "عزز مبيعات متجرك بخطوات بسيطة.",
    ],
    imageSrc: MobileImage,
    hrefAppStore: AppleStoreImage,
    hrefGooglePlay: GooglePlayImage,
  },
] as const;

export const partners = [
  {
    id: nanoid(),
    logo: ZyrosLogo,
  },
  {
    id: nanoid(),
    logo: AlbaddahOudLogo,
  },
  {
    id: nanoid(),
    logo: AmoudiLogo,
  },
  {
    id: nanoid(),
    logo: LadonLogo,
  },
  {
    id: nanoid(),
    logo: IconStoreLogo,
  },
  {
    id: nanoid(),
    logo: LaverneLogo,
  },
  {
    id: nanoid(),
    logo: GaudyLogo,
  },
  {
    id: nanoid(),
    logo: Gameboy,
  },
  {
    id: nanoid(),
    logo: SleepHighLogo,
  },
  {
    id: nanoid(),
    logo: NiceLogo,
  },
  {
    id: nanoid(),
    logo: CardialLogo,
  },
  {
    id: nanoid(),
    logo: CvaleyLogo,
  },
  {
    id: nanoid(),
    logo: EyeCleanLogo,
  },
  {
    id: nanoid(),
    logo: BlancoLogo,
  },
  {
    id: nanoid(),
    logo: Mokaab,
  },
  {
    id: nanoid(),
    logo: Mothilla,
  },
  {
    id: nanoid(),
    logo: MinisoLogo,
  },
  {
    id: nanoid(),
    logo: DarlenaLogo,
  },
  {
    id: nanoid(),
    logo: AlfalehLogo,
  },
  {
    id: nanoid(),
    logo: AlhumaidhiLogo,
  },
  {
    id: nanoid(),
    logo: AlnaqlyLogo,
  },
  {
    id: nanoid(),
    logo: AsnansLogo,
  },
  {
    id: nanoid(),
    logo: GlizerLogo,
  },
  {
    id: nanoid(),
    logo: IdealOilLogo,
  },
];

export const footerLinks = [
  {
    pageId: nanoid(),
    about: "سلة",
    subLinks: [
      {
        id: nanoid(),
        label: "انضم لفريق سلة",
        url: "https://jobs.salla.com/?_gl=1*1b1sngm*_ga*MTUyNjkzODE1MC4xNzE1ODkwODA1*_ga_XVFRL1SHLE*MTcxODIyMDMyMy4yMi4xLjE3MTgyMjA0ODAuNjAuMC4w*_ga_EDXGGGNPZC*MTcxODIyMDMyMy4yMS4xLjE3MTgyMjA0ODAuNjAuMC4w*_gcl_au*MTUyODM3NDA1Ni4xNzE1ODkwODA3&_ga=2.177296485.1779931955.1718214890-1526938150.1715890805",
      },
      {
        id: nanoid(),
        label: "مركز التحديثات",
        url: "https://changelog.salla.sa/",
      },
      {
        id: nanoid(),
        label: "اتفاقية الاستخدام",
        url: "https://salla.com/terms/",
      },
      {
        id: nanoid(),
        label: "سياسة الخصوصية",
        url: "https://salla.com/privacy/",
      },
    ],
  },
  {
    pageId: nanoid(),
    about: "متجر التطبيقات",
    subLinks: [
      {
        id: nanoid(),
        label: "ما هو متجر تطبيقات سلة؟",
        url: "https://apps.salla.sa/ar/faq",
      },
      {
        id: nanoid(),
        label: "تصفح التطبيقات",
        url: "https://apps.salla.sa/ar/categories",
      },
    ],
  },
  {
    pageId: nanoid(),
    about: "صانع التطبيقات",
    subLinks: [
      {
        id: nanoid(),
        label: "ماهو صانع التطبيقات؟",
        url: "https://app-maker.salla.sa/",
      },
      {
        id: nanoid(),
        label: "اصنع تطبيقاً لمتجرك",
        url: "https://s.salla.sa/mobile-app",
      },
    ],
  },
  {
    pageId: nanoid(),
    about: "الخدمات المساندة",
    subLinks: [
      {
        id: nanoid(),
        label: "مركز المساعدة",
        url: "https://help.salla.sa/",
      },
      {
        id: nanoid(),
        label: "أكاديمية سلة",
        url: "https://salla.academy/",
      },
      {
        id: nanoid(),
        label: "مجتمع تجار سلة",
        url: "https://salla.link/Salla-Telegram",
      },
      {
        id: nanoid(),
        label: "منصة الشكاوي",
        url: "https://complaint.salla.sa/",
      },
    ],
  },
] as const;

export const navLinks = [
  {
    pageId: nanoid(),
    page: "الرئيسية",
    url: "https://salla.com/",
    subLinks: [],
  },
  {
    pageId: nanoid(),
    page: "التعليم",
    subLinks: [
      {
        id: nanoid(),
        label: "مركز المساعدة",
        description: "مكتبة متكاملة لكل ما تحتاجه لبدء تجاربك مع سلة",
        icon: NavHelpCenterIcon,
        url: "https://help.salla.sa/?__hstc=11184619.49219377ef35e900ee6a2fcdda1d1749.1711294942649.1713117920466.1713119988139.34&__hssc=11184619.6.1713119988139&__hsfp=2283343417",
      },
      {
        id: nanoid(),
        label: "مجتمع سلة",
        description: "تبادل الخبرات والتجارب واستلهم طرقًا مميزة للنجاح",
        icon: NavSallaCommunityIcon,
        url: "https://salla.link/Salla-Telegram",
      },
      {
        id: nanoid(),
        label: "مدونة سلة",
        description: "وسع دائرة معارفك بالعديد من الموضوعات المثيرة ",
        icon: NavSallaBlogIcon,
        url: "https://salla.com/blog/",
      },
      {
        id: nanoid(),
        label: "منصة المطورين",
        description: "انضم الى مجتمع مطوري سلة",
        icon: NavDevSpaceIcon,
        url: "https://salla.dev/",
      },
      {
        id: nanoid(),
        label: "أكاديمية سلة",
        description: "دورات احترافية تساعدك على نجاحك التجاري",
        icon: NavSallaAcademyIcon,
        url: "https://salla.academy/",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "الحلول",
    subLinks: [
      {
        id: nanoid(),
        label: "متجر التطبيقات",
        description: "أدوات عديدة لنجاح متجرك",
        icon: NavApplicationStoreIcon,
        url: "https://apps.salla.sa/?__hstc=11184619.49219377ef35e900ee6a2fcdda1d1749.1711294942649.1713117920466.1713119988139.34&__hssc=11184619.6.1713119988139&__hsfp=2283343417https://apps.salla.sa/?__hstc=11184619.49219377ef35e900ee6a2fcdda1d1749.1711294942649.1713117920466.1713119988139.34&__hssc=11184619.6.1713119988139&__hsfp=2283343417",
      },
      {
        id: nanoid(),
        label: "صانع التطبيقات",
        description: "اصنع تطبيقًا خاصًا لمتجرك",
        icon: NavApplicationMakerIcon,
        url: "https://app-maker.salla.sa/?__hstc=11184619.49219377ef35e900ee6a2fcdda1d1749.1711294942649.1713117920466.1713119988139.34&__hssc=11184619.6.1713119988139&__hsfp=2283343417",
      },
      {
        id: nanoid(),
        label: "سلة سبيشل",
        description: "حلول تقنية متقدمة لنمو أعمال كبار التجار",
        icon: NavSallaSpecialIcon,
        url: "https://salla.com/specialplan/",
      },
      {
        id: nanoid(),
        label: "المدفوعات",
        description: "طرق دفع متنوعة وآمنة تناسب عملائك",
        icon: NavPaymentIcon,
        url: "https://salla.com/payment/",
      },
      {
        id: nanoid(),
        label: "أدوات التسويق",
        description: "حلول تسويقية عديدة تزيد مبيعاتك",
        icon: NavMarketingIcon,
        url: "https://salla.com/marketing/",
      },
      {
        id: nanoid(),
        label: "محلّي",
        description: "منصة تجمع التاجر المحلي، بالمستهلك المحلي",
        icon: NavLocalMerchantsIcon,
        url: "https://mahally.com/pages/merchants",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "القطاعات",
    subLinks: [
      {
        id: nanoid(),
        label: "عبايات وأزياء",
        description: "تجارة أنيقة بدون تعقيد",
        icon: NavFashionIcon,
        url: "https://salla.com/fashion-sector/",
      },
      {
        id: nanoid(),
        label: "المنتجات الرقمية",
        description: "منتجات رقمية بدون صعوبات تقنية",
        icon: NavDigitalProducts,
        url: "https://salla.com/digital-sector/",
      },
      {
        id: nanoid(),
        label: "الصحة واللياقة",
        description: "قدّم منتجاتك بصورة مقنعة لعميلك",
        icon: NavHealthAndFitnessIcon,
        url: "https://salla.com/health-and-fitness-sector/",
      },
      {
        id: nanoid(),
        label: "الإلكترونيات",
        description: "أسهل تجربة لبيع الإلكترونيات",
        icon: NavElectronicsIcon,
        url: "https://salla.com/electronics-sector/",
      },
      {
        id: nanoid(),
        label: "المجوهرات",
        description: "مزايا متعددة تبرز تميز مجوهراتك",
        icon: NavJewelryIcon,
        url: "https://salla.com/jewelry-sector/",
      },
      {
        id: nanoid(),
        label: "العناية والتجميل",
        description: "مع سلة تفهم عميلك الباحث عن الجمال",
        icon: NavBeautyIcon,
        url: "https://salla.com/beauty-sector/",
      },
      {
        id: nanoid(),
        label: "المطاعم والكافيهات",
        description: "حلول لانهائية لدعم المنتجات الاستهلاكية",
        icon: NavFoodIcon,
        url: "https://salla.com/food-sector/",
      },
      {
        id: nanoid(),
        label: "مستلزمات المنزل",
        description: "تجربة مريحة لك و لعميلك",
        icon: NavHomeIcon,
        url: "https://salla.com/home-sector/",
      },
      {
        id: nanoid(),
        label: "تصميم الخدمات",
        description: "تسليم فوري لمنتجاتك",
        icon: NavDesignServicesIcon,
        url: "https://salla.com/design-services-sector/",
      },
      {
        id: nanoid(),
        label: "متاجر سلة في القطاعات",
        description: "",
        icon: NavSallaAllIcon,
        url: "https://salla.com/blog/sectors/fashion/",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "الأسعار",
    url: "https://salla.com/plans/",
    subLinks: [],
  },
];

export const countryList = [
  // 253 countries
  { name: "Afghanistan (افغانستان)", code: "AF", phone: 93 },
  { name: "Aland Islands", code: "AX", phone: 358 },
  { name: "(Shqipëri) Albania", code: "AL", phone: 355 },
  { name: "Algeria (الجزائر)", code: "DZ", phone: 213 },
  { name: "American Samoa", code: "AS", phone: 1684 },
  { name: "Andorra", code: "AD", phone: 376 },
  { name: "Angola", code: "AO", phone: 244 },
  { name: "Anguilla", code: "AI", phone: 1264 },
  { name: "Antarctica", code: "AQ", phone: 672 },
  { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
  { name: "Argentina", code: "AR", phone: 54 },
  { name: "(Հայաստան) Armenia", code: "AM", phone: 374 },
  { name: "Aruba", code: "AW", phone: 297 },
  { name: "Australia", code: "AU", phone: 61 },
  { name: "(Österreich) Austria", code: "AT", phone: 43 },
  { name: "(Azərbaycan) Azerbaijan", code: "AZ", phone: 994 },
  { name: "Bahamas", code: "BS", phone: 1242 },
  { name: "Bahrain (البحرين)", code: "BH", phone: 973 },
  { name: "(বাংলাদেশ) Bangladesh", code: "BD", phone: 880 },
  { name: "Barbados", code: "BB", phone: 1246 },
  { name: "Belarus (Беларусь)", code: "BY", phone: 375 },
  { name: "Belgium (België)", code: "BE", phone: 32 },
  { name: "Belize", code: "BZ", phone: 501 },
  { name: "Belgium (België)", code: "BJ", phone: 229 },
  { name: "Bermuda", code: "BM", phone: 1441 },
  { name: "Bhutan (འབྲུག)", code: "BT", phone: 975 },
  { name: "Bolivia", code: "BO", phone: 591 },
  { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
  {
    name: "Bosnia and Herzegovina (Босна и Херцеговина)",
    code: "BA",
    phone: 387,
  },
  { name: "Botswana", code: "BW", phone: 267 },
  { name: "Bouvet Island", code: "BV", phone: 55 },
  { name: "Brazil (Brasil)", code: "BR", phone: 55 },
  { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
  { name: "Brunei Darussalam", code: "BN", phone: 673 },
  { name: "Bulgaria (България)", code: "BG", phone: 359 },
  { name: "Burkina Faso", code: "BF", phone: 226 },
  { name: "Burundi (Uburundi)", code: "BI", phone: 257 },
  { name: "Cambodia (កម្ពុជា)", code: "KH", phone: 855 },
  { name: "Cameroon (Cameroun)", code: "CM", phone: 237 },
  { name: "Canada", code: "CA", phone: 1 },
  { name: "Cape Verde (Kabu Verdi)", code: "CV", phone: 238 },
  { name: "Cayman Islands", code: "KY", phone: 1345 },
  {
    name: "Central African Republic (République centrafricaine)",
    code: "CF",
    phone: 236,
  },
  { name: "Chad (Tchad)", code: "TD", phone: 235 },
  { name: "Chile", code: "CL", phone: 56 },
  { name: "China (中国)", code: "CN", phone: 86 },
  { name: "Christmas Island", code: "CX", phone: 61 },
  { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
  { name: "Colombia", code: "CO", phone: 57 },
  { name: "Comoros (جزر القمر)", code: "KM", phone: 269 },
  {
    name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Knongo)",
    code: "CG",
    phone: 242,
  },
  { name: "Congo (Republic) (Congo-Brazzaville)", code: "CD", phone: 242 },
  { name: "Cook Islands", code: "CK", phone: 682 },
  { name: "Costa Rica", code: "CR", phone: 506 },
  { name: "Cote D'Ivoire", code: "CI", phone: 225 },
  { name: "Croatia (Hrvatska)", code: "HR", phone: 385 },
  { name: "Cuba", code: "CU", phone: 53 },
  { name: "Curacao", code: "CW", phone: 599 },
  { name: "Cyprus (Κύπρος)", code: "CY", phone: 357 },
  { name: "Czech Republic (Česká republika)", code: "CZ", phone: 420 },
  { name: "Denmark (Danmark)", code: "DK", phone: 45 },
  { name: "Djibouti", code: "DJ", phone: 253 },
  { name: "Dominica", code: "DM", phone: 1767 },
  {
    name: "Dominican Republic (República Dominicana)",
    code: "DO",
    phone: 1809,
  },
  { name: "Ecuador", code: "EC", phone: 593 },
  { name: "Egypt (مصر)", code: "EG", phone: 20 },
  { name: "El Salvador", code: "SV", phone: 503 },
  { name: "Equatorial Guinea (Guinea Ecuatorial)", code: "GQ", phone: 240 },
  { name: "Eritrea", code: "ER", phone: 291 },
  { name: "Estonia (Eesti)", code: "EE", phone: 372 },
  { name: "Ethiopia", code: "ET", phone: 251 },
  { name: "Falkland Islands (Islas Malvinas)", code: "FK", phone: 500 },
  { name: "Faroe Islands (Føroyar)", code: "FO", phone: 298 },
  { name: "Fiji", code: "FJ", phone: 679 },
  { name: "Finland (Suomi)", code: "FI", phone: 358 },
  { name: "France", code: "FR", phone: 33 },
  { name: "French Guiana (Guyane française)", code: "GF", phone: 594 },
  { name: "French Polynesia (Polynésie française)", code: "PF", phone: 689 },
  { name: "French Southern Territories", code: "TF", phone: 262 },
  { name: "Gabon", code: "GA", phone: 241 },
  { name: "Gambia", code: "GM", phone: 220 },
  { name: "Georgia (საქართველო)", code: "GE", phone: 995 },
  { name: "Germany (Deutschland)", code: "DE", phone: 49 },
  { name: "Ghana", code: "GH", phone: 233 },
  { name: "Gibraltar", code: "GI", phone: 350 },
  { name: "Greece (Ελλάδα)", code: "GR", phone: 30 },
  { name: "Greenland (Kalaallit Nunaat)", code: "GL", phone: 299 },
  { name: "Grenada", code: "GD", phone: 1473 },
  { name: "Guadeloupe", code: "GP", phone: 590 },
  { name: "Guam", code: "GU", phone: 1671 },
  { name: "Guatemala", code: "GT", phone: 502 },
  { name: "Guernsey", code: "GG", phone: 44 },
  { name: "Guinea (Guinée)", code: "GN", phone: 224 },
  { name: "Guinea-Bissau (Guiné-Bissau)", code: "GW", phone: 245 },
  { name: "Guyana", code: "GY", phone: 592 },
  { name: "Haiti", code: "HT", phone: 509 },
  { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
  { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
  { name: "Honduras", code: "HN", phone: 504 },
  { name: "Hong Kong (香港)", code: "HK", phone: 852 },
  { name: "Hungary (Magyarország)", code: "HU", phone: 36 },
  { name: "Iceland (Ísland)", code: "IS", phone: 354 },
  { name: "India (भारत)", code: "IN", phone: 91 },
  { name: "Indonesia", code: "ID", phone: 62 },
  { name: "Islamic Republic of Iran (ايران)", code: "IR", phone: 98 },
  { name: "Iraq (العراق)", code: "IQ", phone: 964 },
  { name: "Ireland", code: "IE", phone: 353 },
  { name: "Isle of Man", code: "IM", phone: 44 },
  { name: "(ישראל) Israeli Occupation", code: "IL", phone: 972 },
  { name: "Italy (Italia)", code: "IT", phone: 39 },
  { name: "Jamaica", code: "JM", phone: 1876 },
  { name: "Japan (日本)", code: "JP", phone: 81 },
  { name: "Jersey", code: "JE", phone: 44 },
  { name: "Jordan (الأردن)", code: "JO", phone: 962 },
  { name: "Kazakhstan (Казахстан)", code: "KZ", phone: 7 },
  { name: "Kenya", code: "KE", phone: 254 },
  { name: "Kiribati", code: "KI", phone: 686 },
  { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
  { name: "Korea, Republic of", code: "KR", phone: 82 },
  { name: "Kosovo", code: "XK", phone: 383 },
  { name: "Kuwait (الكويت)", code: "KW", phone: 965 },
  { name: "Kyrgyzstan (Кыргызстан)", code: "KG", phone: 996 },
  { name: "Laos (ລາວ)", code: "LA", phone: 856 },
  { name: "Latvia (Latvija)", code: "LV", phone: 371 },
  { name: "Lebanon (لبنان)", code: "LB", phone: 961 },
  { name: "Lesotho", code: "LS", phone: 266 },
  { name: "Liberia", code: "LR", phone: 231 },
  { name: "Libya (ليبيا)", code: "LY", phone: 218 },
  { name: "Liechtenstein", code: "LI", phone: 423 },
  { name: "Lithuania (Lietuva)", code: "LT", phone: 370 },
  { name: "Luxembourg", code: "LU", phone: 352 },
  { name: "Macau (澳門)", code: "MO", phone: 853 },
  {
    name: "Macedonia (FYROM) (Македонија)",
    code: "MK",
    phone: 389,
  },
  { name: "Madagascar (Madagasikara)", code: "MG", phone: 261 },
  { name: "Malawi", code: "MW", phone: 265 },
  { name: "Malaysia", code: "MY", phone: 60 },
  { name: "Maldives", code: "MV", phone: 960 },
  { name: "Mali", code: "ML", phone: 223 },
  { name: "Malta", code: "MT", phone: 356 },
  { name: "Marshall Islands", code: "MH", phone: 692 },
  { name: "Martinique", code: "MQ", phone: 596 },
  { name: "Mauritania (موريتانيا)", code: "MR", phone: 222 },
  { name: "Mauritius (Moris)", code: "MU", phone: 230 },
  { name: "Mayotte", code: "YT", phone: 262 },
  { name: "Mexico (México)", code: "MX", phone: 52 },
  { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
  { name: "Moldova (Republic Moldova)", code: "MD", phone: 373 },
  { name: "Monaco", code: "MC", phone: 377 },
  { name: "Mongolia (Монгол)", code: "MN", phone: 976 },
  { name: "Montenegro (Crna Gora)", code: "ME", phone: 382 },
  { name: "Montserrat", code: "MS", phone: 1664 },
  { name: "Morocco (المغرب)", code: "MA", phone: 212 },
  { name: "Mozambique (Moçambique)", code: "MZ", phone: 258 },
  { name: "Myanmar (Burma) (မြန်မာ)", code: "MM", phone: 95 },
  { name: "Namibia (Namibië)", code: "NA", phone: 264 },
  { name: "Nauru", code: "NR", phone: 674 },
  { name: "Nepal (नेपाल)", code: "NP", phone: 977 },
  { name: "Netherlands (Nederland)", code: "NL", phone: 31 },
  { name: "Netherlands Antilles", code: "AN", phone: 599 },
  { name: "New Caledonia (Nouvelle-Calédonie)", code: "NC", phone: 687 },
  { name: "New Zealand", code: "NZ", phone: 64 },
  { name: "Nicaragua", code: "NI", phone: 505 },
  { name: "Niger (Nijar)", code: "NE", phone: 227 },
  { name: "Nigeria", code: "NG", phone: 234 },
  { name: "Niue", code: "NU", phone: 683 },
  { name: "Norfolk Island", code: "NF", phone: 672 },
  { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
  { name: "Norway (Norge)", code: "NO", phone: 47 },
  { name: "Oman (عُمان)", code: "OM", phone: 968 },
  { name: "Pakistan (پاکستان)", code: "PK", phone: 92 },
  { name: "Palau", code: "PW", phone: 680 },
  { name: "Palestine (فلسطين)", code: "PS", phone: 970 },
  { name: "Panama (Panamá)", code: "PA", phone: 507 },
  { name: "Papua New Guinea", code: "PG", phone: 675 },
  { name: "Paraguay", code: "PY", phone: 595 },
  { name: "Peru (Perú)", code: "PE", phone: 51 },
  { name: "Philippines", code: "PH", phone: 63 },
  { name: "Pitcairn", code: "PN", phone: 64 },
  { name: "Poland (Polska)", code: "PL", phone: 48 },
  { name: "Portugal", code: "PT", phone: 351 },
  { name: "Puerto Rico", code: "PR", phone: 1787 },
  { name: "Qatar (قطر)", code: "QA", phone: 974 },
  { name: "Réunion (La Réunion)", code: "RE", phone: 262 },
  { name: "Romania (România)", code: "RO", phone: 40 },
  { name: "Russia (Россия)", code: "RU", phone: 7 },
  { name: "Rwanda", code: "RW", phone: 250 },
  { name: "Saint Barthélemy", code: "BL", phone: 590 },
  { name: "Saint Helena", code: "SH", phone: 290 },
  { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
  { name: "Saint Lucia", code: "LC", phone: 1758 },
  {
    name: "Saint Martin (Saint-Martin (partie française))",
    code: "MF",
    phone: 590,
  },
  {
    name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    code: "PM",
    phone: 508,
  },
  { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
  { name: "Samoa", code: "WS", phone: 684 },
  { name: "San Marino", code: "SM", phone: 378 },
  {
    name: "São Tomé and Príncipe (São Tomé e Príncipe)",
    code: "ST",
    phone: 239,
  },
  { name: "Saudi Arabia (المملكة العربية السعودية)", code: "SA", phone: 966 },
  { name: "Senegal (Sénégal)", code: "SN", phone: 221 },
  { name: "Serbia (Србија)", code: "RS", phone: 381 },
  { name: "Seychelles", code: "SC", phone: 248 },
  { name: "Sierra Leone", code: "SL", phone: 232 },
  { name: "Singapore", code: "SG", phone: 65 },
  { name: "St Martin", code: "SX", phone: 721 },
  { name: "Slovakia (Slovensko)", code: "SK", phone: 421 },
  { name: "Slovenia (Slovenija)", code: "SI", phone: 386 },
  { name: "Solomon Islands", code: "SB", phone: 677 },
  { name: "Somalia (Soomaaliya)", code: "SO", phone: 252 },
  { name: "South Korea (대한민국)", code: "ZA", phone: 27 },
  { name: "South Sudan (جنوب السودان)", code: "SS", phone: 211 },
  { name: "Spain (España)", code: "ES", phone: 34 },
  { name: "Sri Lanka (ශ්‍රී ලංකාව)", code: "LK", phone: 94 },
  { name: "Sudan (السودان)", code: "SD", phone: 249 },
  { name: "Suriname", code: "SR", phone: 597 },
  { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
  { name: "Swaziland", code: "SZ", phone: 268 },
  { name: "Sweden (Sverige)", code: "SE", phone: 46 },
  { name: "Switzerland (Schweiz)", code: "CH", phone: 41 },
  { name: "Syria (سوريا)", code: "SY", phone: 963 },
  { name: "Taiwan (台灣)", code: "TW", phone: 886 },
  { name: "Tajikistan", code: "TJ", phone: 992 },
  { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
  { name: "Thailand (ไทย)", code: "TH", phone: 66 },
  { name: "Timor-Leste", code: "TL", phone: 670 },
  { name: "Togo", code: "TG", phone: 228 },
  { name: "Tokelau", code: "TK", phone: 690 },
  { name: "Tonga", code: "TO", phone: 676 },
  { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
  { name: "Tunisia (تونس)", code: "TN", phone: 216 },
  { name: "Turkey (Türkiye)", code: "TR", phone: 90 },
  { name: "Turkmenistan", code: "TM", phone: 7370 },
  { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
  { name: "Tuvalu", code: "TV", phone: 688 },
  { name: "Uganda", code: "UG", phone: 256 },
  { name: "Ukraine (Україна)", code: "UA", phone: 380 },
  {
    name: "United Arab Emirates (الإمارات العربية المتحدة)",
    code: "AE",
    phone: 971,
  },
  { name: "United Kingdom", code: "GB", phone: 44 },
  { name: "United States", code: "US", phone: 1 },
  { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
  { name: "Uruguay", code: "UY", phone: 598 },
  { name: "Uzbekistan (O'zbekiston)", code: "UZ", phone: 998 },
  { name: "Vanuatu", code: "VU", phone: 678 },
  { name: "Venezuela", code: "VE", phone: 58 },
  { name: "Vietnam (Việt Nam)", code: "VN", phone: 84 },
  { name: "Virgin Islands, British", code: "VG", phone: 1284 },
  { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
  { name: "Wallis and Futuna (Wallis-et-Futuna)", code: "WF", phone: 681 },
  { name: "Western Sahara (الصحراء الغربية)", code: "EH", phone: 212 },
  { name: "Yemen (اليمن)", code: "YE", phone: 967 },
  { name: "Zambia", code: "ZM", phone: 260 },
  { name: "Zimbabwe", code: "ZW", phone: 263 },
] as const;

export const slides = [
  {
    id: nanoid(),
    image: SlideOne,
    text: [
      "تحتاج شحن مبرد؟ سواءً كنت تبيع مواد غذائية ومثلجات أو ورود أو أدوية ومستحضرات تجميل، الآن مع شركة أدوار للنقل المبرد في بوليصات سلة كل شحناتك التي تتطلب حفظ بدرجة حرارة معينة ستصل لعملائك بحالتها الأصلية تمامًا كما سلّمتها!",
      "مميزات الربط مع أدوار للشحن المبرد:",
      "جميع مراحل فرز  وتوزيع الشحنات مبردة بدرجات حرارة مناسبة.",
    ],
  },
  {
    id: nanoid(),
    image: SlideTwo,
    text: [
      "قد يكون التحدي الأكبر الذي تواجهه كتاجر منتجات رقمية هو معرفة طريقة حماية منتجك الرقمي من السرقة، أو إعادة البيع، أو النشر والتوزيع بشكل مجاني، والذي قد يعود بالضرر المادي على تجارتك، لذا وفّرنا لك ميزة حماية المنتج الرقمي لرفع من أمان تجارتك، وحفظ حقوق منتجاتك الرقمية.",
      "مزايا حماية الحقوق الفكرية للمنتج الرقمي:",
    ],
  },
  {
    id: nanoid(),
    image: SlideThree,
    text: [
      "قدِّم لعملائك تجربة شحن سريعة ومبتكرة مع شركة ريد بوكس ضمن بوليصات سلة، وأتِح خيار استلام الطلب من نقطة ريد بوكس الأقرب للعميل دون الحاجة لأي تنسيق وتواصل مع مناديب التوصيل!",
      "اشحن طلباتك الآن مع بوليصات ريد بوكس, لأكثر",
      " من 1000 خزانة ذكية منتشرة في +60 مدينة حول المملكة.",
    ],
  },
  {
    id: nanoid(),
    image: SlideFour,
    text: [
      "ثيم استثنائي لقطاع المطاعم والمقاهي مصمم خصيصًا ليلبي كافة احتياجات مطعمك أو مقهاك أو مطبخك وينقله إلى مستوى آخر من الحِرفية, ويسهل الطلب على عملائك. ",
      "أبرز مزايا ثيم منيو:",
      "1. عناصر تصميم مخصصة (قائمة الطعام، أوقات العمل، الموقع، معلومات التواصل, بانر تحميل التطبيق).",
    ],
  },
  {
    id: nanoid(),
    image: SlideFive,
    text: [
      "انطلاقًا من دعمنا واعتزازنا بالصناعة الوطنية، أضفنا في محلي قسم “صُنع في السعودية” ليجمع كل منتجات تجارنا المصنوعة بفخر في السعودية في مكان واحد لتكون أقرب لمئات الآلاف من العملاء. ",
      "في محلي؛ صُنع في السعودية ،آفاق من الفرص من بينها",
      "1- التسويق: قسم خاص بصُنع في السعودية ليبرز منتجاتك للعملاء دون أي رسوم.",
    ],
  },
] as const;
