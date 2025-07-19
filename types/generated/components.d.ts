import type { Schema, Struct } from '@strapi/strapi';

export interface ColorsModelColors extends Struct.ComponentSchema {
  collectionName: 'components_colors_model_colors';
  info: {
    displayName: 'Model Colors';
  };
  attributes: {
    currentColor: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Model_Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface MenNewAndTrendingNewArrivals extends Struct.ComponentSchema {
  collectionName: 'components_men_new_and_trending_new_arrivals';
  info: {
    displayName: 'New Arrivals';
  };
  attributes: {
    Activity: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Casual', 'Athletic', 'Gaming', 'Premium', 'Outdoor']
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Brand: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Originals',
          'Performance',
          'Sportswear',
          'TERREX',
          'adidas by Stella McCartney',
          'Y-3',
          'Five Ten',
          '',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Categories: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ["Men's", "Women's", 'Originals', 'TERREX', 'Kids']
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Category: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Clothing', 'Shoes', 'Accesories']
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Collection: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '70s',
          'adicolor',
          'Ultimate',
          'Ultimate365',
          '2000s',
          'Gazelle',
          'Teamwear',
          'adizero',
          'Campus',
          '90s',
          'Tiro',
          'ALL SZN',
          'RDY',
          'Designed for Training',
          'SL 72',
          'Agravic',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Color: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Black',
          'White',
          'Gray',
          'Blue',
          'Red',
          'Green',
          'Pink',
          'Brown',
          'Light brown',
          'Purple',
          'Aqua',
          'Wine',
          'Yellow',
          'Orange',
          'Silver',
          'Multi',
          'Gold',
          'Multicolor',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Features: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Quick Dry',
          'Moisture Wicking',
          'Lightweight',
          'Cushioned',
          'Breathable',
          'Stability',
          'Stretch',
          'Waterproof',
          'Water-Repellent',
          'Zip Pockets',
          'Windproof',
          'Low Profile',
          'Spikeless',
          'Shock Absorption',
          'Laptop Compatible',
          'Ankle zips',
          'Compression',
          'Pleated',
          'Water-Resistant',
          'Mesh',
          'Spiked',
          'LED Lights',
          'Hooded',
          'Insulated',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Gender: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Men', 'Women', 'Kids', 'Unisex']
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Material: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Recycled Polyester',
          'Cotton',
          'Leather Upper',
          'Textile Upper',
          'Recycled Nylon',
          'Synthetic Upper',
          'Fleece',
          'Denim',
          'Satin',
          'Nylon',
          'Twistweave',
          'Knit',
          'Twistknit',
          'Cashmere',
          'Corduroy',
          'French Terry',
          'Metal',
          'Velour',
          'Velvet',
          'Woven',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Media: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    Price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0.1;
        },
        number
      >;
    ProductType: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Sneakers',
          'Pants',
          'Shorts',
          'T Shirts',
          'Short Sleeve Shirts',
          'Hoodies & Sweatshirts',
          'Track Suits',
          'Jackets',
          'Jerseys',
          'Cleats',
          'Bags',
          'Hats',
          'Socks',
          'Tank Tops',
          'Skirts & Dresses',
          'Tights & Leggings',
          'Slides',
          'Long Sleeve Shirts',
          'Matching Set',
          'Platform',
          'Flats',
          'Swimwear',
          'Sandals',
          'High Tops',
          'Sport Bras',
          'Water Bottles',
          'Vests',
          'Bike Shoes',
          '',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Sport: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Lifestyle',
          'Soccer',
          'Workout',
          'Golf',
          'Training',
          'Running',
          'Basketball',
          'Hiking',
          'Yoga',
          'Swim',
          'Tennis',
          'Football',
          'Weightlifting',
          'HIIT',
          'Volleyball',
          'Skateboarding',
          'Boxing',
          'Baseball',
          'Dance ',
          'Trail Running',
          'Cycling',
          'Motorsport',
          'Mountain Biking',
          'Softball',
          'Rugby',
          'Climbing',
          'Cricket',
          'Skiing',
          'Snowboarding',
          'Handball',
          'Track & Field',
          'Water Sports',
          '',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface MenProductSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_men_product_specifications';
  info: {
    displayName: 'Product Specifications';
  };
  attributes: {
    Activity: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Casual', 'Athletic', 'Gaming', 'Premium', 'Outdoor']
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Brand: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Originals',
          'Performance',
          'Sportswear',
          'TERREX',
          'adidas by Stella McCartney',
          'Y-3',
          'Five Ten',
          'Fear of God Athletics',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Categories: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          "Men's",
          "Women's",
          'Originals',
          'Boys',
          'TERREX',
          'adidas by Stella McCartney',
          'Kids',
          'Soccer',
          'Kids Unisex',
          'Workout',
          'Training',
          'Five Ten',
          'Volleyball',
          'Sportswear',
          'Lifestyle',
          'Soccer',
          'Workout',
          'Golf',
          'Training',
          'Running',
          'Basketball',
          'Hiking',
          'Yoga',
          'Swim',
          'Tennis',
          'Football',
          'Weightlifting',
          'HIIT',
          'Volleyball',
          'Skateboarding',
          'Boxing',
          'Baseball',
          'Dance ',
          'Trail Running',
          'Cycling',
          'Motorsport',
          'Mountain Biking',
          'Softball',
          'Rugby',
          'Climbing',
          'Cricket',
          'Skiing',
          'Snowboarding',
          'Handball',
          'Track & Field',
          'Water Sports',
          'Fear of God Athletics',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Category: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Clothing', 'Shoes', 'Accesories']
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Collection: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '70s',
          'adicolor',
          'Ultimate',
          'Ultimate365',
          '2000s',
          'Gazelle',
          'Teamwear',
          'adizero',
          'Campus',
          '90s',
          'Tiro',
          'ALL SZN',
          'RDY',
          'Designed for Training',
          'SL 72',
          'Agravic',
          'Samba',
          'Clima',
          'Dugout',
          'Superstar',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Color: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Black',
          'White',
          'Gray',
          'Blue',
          'Red',
          'Green',
          'Pink',
          'Brown',
          'Beige',
          'Purple',
          'Turquoise',
          'Burgundy',
          'Yellow',
          'Orange',
          'Silver',
          'Multi',
          'Gold',
          'Multicolor',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Features: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Quick Dry',
          'Moisture Wicking',
          'Lightweight',
          'Cushioned',
          'Breathable',
          'Stability',
          'Stretch',
          'Waterproof',
          'Water-Repellent',
          'Zip Pockets',
          'Windproof',
          'Low Profile',
          'Spikeless',
          'Shock Absorption',
          'Laptop Compatible',
          'Ankle zips',
          'Compression',
          'Pleated',
          'Water-Resistant',
          'Mesh',
          'Spiked',
          'LED Lights',
          'Hooded',
          'Insulated',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Gender: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Men', 'Women', 'Kids', 'Unisex']
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Material: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Recycled Polyester',
          'Cotton',
          'Leather Upper',
          'Textile Upper',
          'Leather',
          'Recycled Nylon',
          'Synthetic Upper',
          'Fleece',
          'Denim',
          'Satin',
          'Nylon',
          'Twistweave',
          'Knit',
          'Twistknit',
          'Cashmere',
          'Corduroy',
          'French Terry',
          'Metal',
          'Velour',
          'Velvet',
          'Woven',
          'Microfiber',
          'Wool',
          'Mesh Upper',
          'Molded',
          'Suede',
          'Rubber',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Media: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0.1;
        },
        number
      >;
    ProductType: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Sneakers',
          'Pants',
          'Shorts',
          'T Shirts',
          'Short Sleeve Shirts',
          'Hoodies & Sweatshirts',
          'Track Suits',
          'Jackets',
          'Jerseys',
          'Cleats',
          'Bags',
          'Hats',
          'Socks',
          'Tank Tops',
          'Skirts & Dresses',
          'Tights & Leggings',
          'Slides',
          'Long Sleeve Shirts',
          'Matching Set',
          'Platform',
          'Flats',
          'Swimwear',
          'Sandals',
          'High Tops',
          'Sport Bras',
          'Water Bottles',
          'Vests',
          'Bike Shoes',
          'Balls',
          'Gloves',
          'Jumpsuits & Bodysuits',
          'Underwear',
          'Warm Ups',
          'Belts',
          'Shin Guards',
          'Boots',
          'Compression & Braces',
          'E-GIFT CARD',
          'Eyewear',
          'Clogs',
          'Other Accessories',
          'Headbands',
          'Roller Skate',
          'Wallets',
          'Scarves',
          'Towels',
          'Bralette',
          'Hardware',
          'Hijab',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    Sport: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Lifestyle',
          'Soccer',
          'Workout',
          'Golf',
          'Training',
          'Running',
          'Basketball',
          'Hiking',
          'Yoga',
          'Swim',
          'Tennis',
          'Football',
          'Weightlifting',
          'HIIT',
          'Volleyball',
          'Skateboarding',
          'Boxing',
          'Baseball',
          'Dance ',
          'Trail Running',
          'Cycling',
          'Motorsport',
          'Mountain Biking',
          'Softball',
          'Rugby',
          'Climbing',
          'Cricket',
          'Skiing',
          'Snowboarding',
          'Handball',
          'Hiking',
          'Track & Field',
          'Water Sports',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface NavKidsAccesories extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_accesories';
  info: {
    displayName: 'Accesories';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Backpacks & Bags', 'Hats', 'Socks']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Accesories'>;
  };
}

export interface NavKidsBabiesAndToddlers extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_babies_and_toddlers';
  info: {
    displayName: 'Babies & Toddlers';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Baby Girl', 'Baby Boy', 'All Shoes ', 'All Clothing', '']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Babies & Toddlers'>;
  };
}

export interface NavKidsBoysClothing extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_boys_clothings';
  info: {
    displayName: 'Boys Clothing';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Pants',
          'Shorts',
          'Tracksuits',
          'T-Shirts & Tops',
          'Jerseys',
          'Hoodies & Sweatshirts',
          'Matching Sets',
          'Jackets & Coats',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Boys Clothing'>;
  };
}

export interface NavKidsBoysShoes extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_boys_shoes';
  info: {
    displayName: 'Boys Shoes';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Soccer',
          'Slip-On & Straps',
          'Sneakers',
          'Basketball',
          'Slides & Sandals',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Boys Shoes'>;
  };
}

export interface NavKidsGirlsClothing extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_girls_clothings';
  info: {
    displayName: 'Girls Clothing';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Tracksuits',
          'Pants',
          'Hoodies & Sweatshirts',
          'T-Shirts & Tops',
          'Shorts',
          'Tights & Leggings',
          'Jackets & Coats',
          'Matching Sets',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Girls Clothing'>;
  };
}

export interface NavKidsGirlsShoes extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_girls_shoes';
  info: {
    displayName: 'Girls Shoes';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Soccer', 'Slip-On & Straps', 'Sneakers', 'Slides & Sandals']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Girls Shoes'>;
  };
}

export interface NavKidsNewAndTrending extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_new_and_trendings';
  info: {
    displayName: 'New & Trending';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'New Arrivals',
          'Best Sellers',
          'Disney Collection',
          'Shoes Under $80',
          'Graphic Tees',
          'Liberty London Florals',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'New & Trending'>;
  };
}

export interface NavKidsShopByAge extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_shop_by_ages';
  info: {
    displayName: 'Shop by Age';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Youth & Teens (8-16 years)',
          'Children (4-8 years)',
          'Babies & Toddlers (0-4 years)',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Shop by Age'>;
  };
}

export interface NavKidsShopByColor extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_shop_by_colors';
  info: {
    displayName: 'Shop by Color';
  };
  attributes: {
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Shop by Color'>;
  };
}

export interface NavKidsShopBySport extends Struct.ComponentSchema {
  collectionName: 'components_nav_kids_shop_by_sports';
  info: {
    displayName: 'Shop by Sport';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Baseball',
          'Basketball',
          'Football',
          'Golf',
          'Motorsport',
          'Outdoor',
          'Running',
          'Soccer',
          'Volleyball',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Shop by Sport'>;
  };
}

export interface NavMenAccesories extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_accesories';
  info: {
    displayName: 'Accesories';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Bags & Backpacks',
          'Balls',
          'Gloves',
          'Hats',
          'Socks',
          'Underwear',
          'Water Bottles',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Accesories'>;
  };
}

export interface NavMenClothing extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_clothing';
  info: {
    displayName: 'Clothing';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Pants ',
          'Shorts',
          'T-Shirts & Tops',
          'Jerseys',
          'Tracksuites',
          'Hoodies & Sweatshirts',
          'Jackets & Coats',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Clothing'>;
  };
}

export interface NavMenSectionNewAndTrending extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_section_new_and_trendings';
  info: {
    displayName: 'Section New & Trending';
  };
  attributes: {
    list: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'New Arrivals',
          'Best Sellers',
          'Graphic Tees',
          'Liberty London Florals',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'New & Trending'>;
  };
}

export interface NavMenShoes extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_shoes';
  info: {
    displayName: 'Shoes';
  };
  attributes: {
    List: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Running',
          'Soccer ',
          'Sneakers',
          'Basketball ',
          'Golf ',
          'Slides & Sandals',
          'Workout & Gym',
          'Shoes 100% & under',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Shoes'>;
  };
}

export interface NavMenShopByCollection extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_shop_by_collections';
  info: {
    displayName: 'Shop By Collection';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'adicolor',
          'Premium Collaborations',
          'Five Ten',
          'Gazelle',
          'Samba',
          'Superstar',
          'Sportswear',
          'Supernova',
          'TERREX',
          'Ultraboos',
          'Y-3',
          'ZNE',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Shop by Collection'>;
  };
}

export interface NavMenShopBySport extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_shop_by_sports';
  info: {
    displayName: 'Shop By Sport';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Baseball',
          'BasketBall',
          'Cycling',
          'Football',
          'Golf',
          'Hiking',
          'Motorsport',
          'Outdoor',
          'Running',
          'Soccer',
          'Tennis',
          'Workout & Gym',
          'Yoga',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Shop by Sport'>;
  };
}

export interface NavNewAndTrendingCollaborations
  extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_collaborations';
  info: {
    displayName: 'Collaborations';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'adidas by Stella McCartney',
          'Bad Bunny',
          'Bape',
          'Disney',
          'Edison Chen',
          'Fear of God Athletics',
          'Pharrell',
          'Prada',
          'Sporty & Rich',
          'Wales Bonner',
          'Y-3',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Collaborations'>;
  };
}

export interface NavNewAndTrendingCollections extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_collections';
  info: {
    displayName: 'Collections';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '4D',
          'adizero',
          'Copa',
          'F50',
          'Five Ten',
          'Supernova',
          'TERREX',
          'Tiro',
          'Ultraboost',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Collections'>;
  };
}

export interface NavNewAndTrendingOriginals extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_originals';
  info: {
    displayName: 'Originals';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Forum',
          'Gazelle',
          'adicolor',
          'Originals Clothing',
          'Samba',
          'Stan Smith',
          'Superstar',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Originals'>;
  };
}

export interface NavNewAndTrendingOurWorld extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_our_worlds';
  info: {
    displayName: 'Our World';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Impact', 'People', 'Planet', 'Community', 'adiclub']
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Our World'>;
  };
}

export interface NavNewAndTrendingSports extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_sports';
  info: {
    displayName: 'Sports';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Baseball',
          'Basketball',
          'Cricket',
          'Football',
          'Golf',
          'Motorsport',
          'Outdoor',
          'Rugby',
          'Running',
          'Soccer',
          'Skateboarding',
          'Tennis',
          'Workout',
          'Volleyball',
          'Weightlifting',
          'Yoga',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Sports'>;
  };
}

export interface NavNewAndTrendingWhatSNew extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_what_s_new_s';
  info: {
    displayName: "What's new?";
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'New Arrivals',
          'Best Sellers',
          'Trending Now',
          'Release Dates',
          'Blog',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<"What's new?">;
  };
}

export interface NavSaleFeaturedSale extends Struct.ComponentSchema {
  collectionName: 'components_nav_sale_featured_sales';
  info: {
    displayName: 'Featured Sale';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Final Sale']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Featured Sale'>;
  };
}

export interface NavSaleKids extends Struct.ComponentSchema {
  collectionName: 'components_nav_sale_kids';
  info: {
    displayName: 'Kids';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Boys Sale', 'Girls Sale']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Kids'>;
  };
}

export interface NavSaleMen extends Struct.ComponentSchema {
  collectionName: 'components_nav_sale_men';
  info: {
    displayName: 'Men';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Shoes ', 'Clothing', 'Accesories', '']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Men'>;
  };
}

export interface NavSaleWomen extends Struct.ComponentSchema {
  collectionName: 'components_nav_sale_women';
  info: {
    displayName: 'Women';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::multi-select.multi-select', ['x']> &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Women'>;
  };
}

export interface NavWomenAccesories extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_accesories';
  info: {
    displayName: 'Accesories';
    icon: 'crop';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Bags & Backpacks',
          'Balls',
          'Gloves',
          'Hats',
          'Socks',
          'Water Bottles',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavWomenClothing extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_clothing';
  info: {
    displayName: 'Clothing';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Pants ',
          'Dresses & Skirts',
          'Tights & Leggings',
          'Plus Size',
          'Tracksuites',
          'T-Shirts & Tops',
          'Sports Bras',
          'Shorts',
          'Hoodies & Sweatshirts',
          'Jackets & Coats',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavWomenNewAndTrending extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_new_and_trendings';
  info: {
    displayName: 'New & Trending';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'New Arrivals',
          'Best Sellers',
          'Graphic Tees',
          'Taekwondo & Tokyo',
          'Liberty London Florals',
          'Soft Lux: All-Day Comfort',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavWomenShoes extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_shoes';
  info: {
    displayName: 'Shoes';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Running',
          'Soccer ',
          'Sneakers',
          'Golf ',
          'Slides & Sandals',
          'Workout & Gym',
          'Shoes 100% & under',
          'Basketball ',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavWomenShopByCollection extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_shop_by_collections';
  info: {
    displayName: 'Shop by Collection';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'adicolor',
          'Premium Collaborations',
          'adidas by Stella McCartney',
          'Gazelle',
          'Originals',
          'Samba',
          'Superstar',
          'Sportswear',
          'Supernova',
          'TERREX',
          'Ultrabost',
          'Y-3',
          'ZNE',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Shop by Collection'>;
  };
}

export interface NavWomenShopBySport extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_shop_by_sports';
  info: {
    displayName: 'Shop by Sport';
  };
  attributes: {
    ListOfSections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Basketball',
          'Cycling',
          'Golf',
          'Hiking',
          'Motorsport',
          'Outdoor',
          'Running',
          'Soccer',
          'Softball',
          'Swim',
          'Tennis',
          'Volleyball',
          'Workout & Gym',
          'Yoga',
          '',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    SectionName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavKidSSection extends Struct.ComponentSchema {
  collectionName: 'components_nav_kid_s_sections';
  info: {
    displayName: "Kid's section";
  };
  attributes: {
    Accesories: Schema.Attribute.Component<'nav-kids.accesories', false> &
      Schema.Attribute.Required;
    BabiesAndToddlers: Schema.Attribute.Component<
      'nav-kids.babies-and-toddlers',
      false
    > &
      Schema.Attribute.Required;
    BoysClothing: Schema.Attribute.Component<'nav-kids.boys-clothing', false> &
      Schema.Attribute.Required;
    BoysShoes: Schema.Attribute.Component<'nav-kids.boys-shoes', false> &
      Schema.Attribute.Required;
    GirlsClothing: Schema.Attribute.Component<
      'nav-kids.girls-clothing',
      false
    > &
      Schema.Attribute.Required;
    GirlsShoes: Schema.Attribute.Component<'nav-kids.girls-shoes', false> &
      Schema.Attribute.Required;
    NewAndTrending: Schema.Attribute.Component<
      'nav-kids.new-and-trending',
      false
    > &
      Schema.Attribute.Required;
    ShopByAge: Schema.Attribute.Component<'nav-kids.shop-by-age', false> &
      Schema.Attribute.Required;
    ShopByColor: Schema.Attribute.Component<'nav-kids.shop-by-color', false> &
      Schema.Attribute.Required;
    ShopBySport: Schema.Attribute.Component<'nav-kids.shop-by-sport', false> &
      Schema.Attribute.Required;
  };
}

export interface NavMediaModel extends Struct.ComponentSchema {
  collectionName: 'components_nav_media_models';
  info: {
    displayName: 'Media Model';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavMenSSection extends Struct.ComponentSchema {
  collectionName: 'components_nav_men_s_sections';
  info: {
    displayName: "Men's section";
  };
  attributes: {
    Accesories: Schema.Attribute.Component<'nav-men.accesories', false> &
      Schema.Attribute.Required;
    Clothing: Schema.Attribute.Component<'nav-men.clothing', false> &
      Schema.Attribute.Required;
    NewAndTrending: Schema.Attribute.Component<
      'nav-men.section-new-and-trending',
      false
    > &
      Schema.Attribute.Required;
    Shoes: Schema.Attribute.Component<'nav-men.shoes', false> &
      Schema.Attribute.Required;
    ShopByCollection: Schema.Attribute.Component<
      'nav-men.shop-by-collection',
      false
    > &
      Schema.Attribute.Required;
    ShopBySport: Schema.Attribute.Component<'nav-men.shop-by-sport', false> &
      Schema.Attribute.Required;
  };
}

export interface NavNewAndTrendingSection extends Struct.ComponentSchema {
  collectionName: 'components_nav_new_and_trending_sections';
  info: {
    displayName: 'New & Trending section';
  };
  attributes: {
    Collaborations: Schema.Attribute.Component<
      'nav-new-and-trending.collaborations',
      false
    > &
      Schema.Attribute.Required;
    Collections: Schema.Attribute.Component<
      'nav-new-and-trending.collections',
      false
    > &
      Schema.Attribute.Required;
    Originals: Schema.Attribute.Component<
      'nav-new-and-trending.originals',
      false
    > &
      Schema.Attribute.Required;
    OurWorld: Schema.Attribute.Component<
      'nav-new-and-trending.our-world',
      false
    > &
      Schema.Attribute.Required;
    Sport: Schema.Attribute.Component<'nav-new-and-trending.sports', false> &
      Schema.Attribute.Required;
    WhatsNew: Schema.Attribute.Component<
      'nav-new-and-trending.what-s-new',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface NavSaleSection extends Struct.ComponentSchema {
  collectionName: 'components_nav_sale_sections';
  info: {
    displayName: 'Sale section';
  };
  attributes: {
    FeaturedSale: Schema.Attribute.Component<'nav-sale.featured-sale', false> &
      Schema.Attribute.Required;
    Kids: Schema.Attribute.Component<'nav-sale.kids', false> &
      Schema.Attribute.Required;
    Men: Schema.Attribute.Component<'nav-sale.men', false> &
      Schema.Attribute.Required;
    Women: Schema.Attribute.Component<'nav-sale.women', false> &
      Schema.Attribute.Required;
  };
}

export interface NavSectionList extends Struct.ComponentSchema {
  collectionName: 'components_nav_section_lists';
  info: {
    displayName: 'Section Shoes';
  };
  attributes: {
    list: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['x', 'y']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavWomenSSection extends Struct.ComponentSchema {
  collectionName: 'components_nav_women_s_sections';
  info: {
    displayName: "Women's Section";
  };
  attributes: {
    Accesories: Schema.Attribute.Component<'nav-women.accesories', false> &
      Schema.Attribute.Required;
    Clothing: Schema.Attribute.Component<'nav-women.clothing', true> &
      Schema.Attribute.Required;
    NewAndTrending: Schema.Attribute.Component<
      'nav-women.new-and-trending',
      false
    > &
      Schema.Attribute.Required;
    Shoes: Schema.Attribute.Component<'nav-women.shoes', false> &
      Schema.Attribute.Required;
    ShopByCollection: Schema.Attribute.Component<
      'nav-women.shop-by-collection',
      false
    > &
      Schema.Attribute.Required;
    ShopBySport: Schema.Attribute.Component<'nav-women.shop-by-sport', false> &
      Schema.Attribute.Required;
  };
}

export interface ProductOverviewColor extends Struct.ComponentSchema {
  collectionName: 'components_product_overview_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    currentColor: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    ModelImage: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface ProductOverviewDescriptionComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_product_overview_description_components';
  info: {
    displayName: 'Description Component';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    Media: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface ProductOverviewSelectSizeType extends Struct.ComponentSchema {
  collectionName: 'components_product_overview_select_size_types';
  info: {
    displayName: 'Select Size Type';
  };
  attributes: {
    MenAndWomenSizes: Schema.Attribute.Component<
      'select-size-type.men-s-sizes',
      false
    >;
    StandardSizes: Schema.Attribute.Component<
      'select-size-type.standard-sizes',
      false
    >;
  };
}

export interface ProductOverviewShortDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_product_overview_short_descriptions';
  info: {
    displayName: 'Short Description';
  };
  attributes: {
    ShortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SelectSizeTypeBraSizes extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_bra_sizes';
  info: {
    displayName: 'Bra Sizes';
  };
  attributes: {
    braSizes: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '2XS A-B',
          'XS A-B',
          'S A-B',
          'M A-B',
          'L A-B',
          'XL A-B',
          '2X A-B',
          '2XS C-D',
          'XS C-D',
          'S C-D',
          'M C-D',
          'L C-D',
          'XL C-D',
          '2X C-D',
          'XS DD-F',
          'S DD-F',
          'M DD-F',
          'L DD-F',
          'XL DD-F',
          '2X DD-F',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface SelectSizeTypeChildrenClothingSizes
  extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_children_clothing_sizes';
  info: {
    displayName: 'children-clothing-sizes';
  };
  attributes: {
    childrenClothingSizes: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['4T', '5T', '2XS', 'XS']
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface SelectSizeTypeClothing extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_clothing';
  info: {
    displayName: 'Clothing';
  };
  attributes: {
    ClothingSizes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL']
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface SelectSizeTypeDualSizes extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_dual_sizes';
  info: {
    displayName: 'Dual Sizes';
  };
  attributes: {
    dualSizes: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['S/M', 'L/XL', 'M/L']
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface SelectSizeTypeKidsSizes extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_kids_sizes';
  info: {
    displayName: 'Kids Sizes';
  };
  attributes: {
    KidsSizes: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '10.5K',
          '11K',
          '11.5K',
          '12K',
          '12.5K',
          '13K',
          '13.5K',
          '1',
          '1.5',
          '2',
          '2.5',
          '3',
          '3.5',
          '4',
          '4.5',
          '5',
          '5.5',
          '6',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface SelectSizeTypeMenSSizes extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_men_s_sizes';
  info: {
    displayName: 'Men and Women Sizes';
  };
  attributes: {
    MenAndWomenSizes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'M 4 / W 5',
          '',
          'M 4.5 / W 5.5',
          '',
          'M 5 / W 6',
          '',
          'M 5.5 / W 6.5',
          '',
          'M 6 / W 7',
          '',
          'M 6.5 / W 7.5',
          '',
          'M 7 / W 8',
          '',
          'M 7.5 / W 8.5',
          '',
          'M 8 / W 9',
          '',
          'M 8.5 / W 9.5',
          '',
          'M 9 / W 10',
          '',
          'M 9.5 / W 10.5',
          '',
          'M 10 / W 11',
          '',
          'M 10.5 / W 11.5',
          '',
          'M 11 / W 12',
          '',
          'M 11.5 / W 12.5',
          '',
          'M 12 / W 13',
          '',
          'M 12.5 / W 13.5',
          '',
          'M 13 / W 14',
          '',
          'M 13.5 / W 14.5',
          '',
          'M 14 / W 15',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<"['M 4 / W 5','M 4.5 / W 5.5','M 5 / W 6','M 5.5 / W 6.5','M 6 / W 7','M 6.5 / W 7.5','M 7 / W 8','M 7.5 / W 8.5','M 8 / W 9','M 8.5 / W 9.5','M 9 / W 10','M 9.5 / W 10.5','M 10 / W 11','M 10.5 / W 11.5','M 11 / W 12','M 11.5 / W 12.5','M 12 / W 13','M 12.5 / W 13.5','M 13 / W 14','M 13.5 / W 14.5','M 14 / W 15']">;
  };
}

export interface SelectSizeTypeStandardSizes extends Struct.ComponentSchema {
  collectionName: 'components_select_size_type_standard_sizes';
  info: {
    displayName: 'Standard Sizes';
  };
  attributes: {
    StandardSizes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '3.5',
          '4',
          '4.5',
          '5',
          '5.5',
          '6.5',
          '',
          '7',
          '7.5',
          '',
          '8',
          '',
          '8.5',
          '',
          '9',
          '',
          '9.5',
          '',
          '10',
          '',
          '10.5',
          '',
          '11',
          '',
          '11.5',
          '',
          '12',
          '',
          '12.5',
          '',
          '13',
          '',
          '14',
          '',
          '15',
          '',
          '6.5',
          '',
          '7',
          '',
          '7.5',
          '',
          '8',
          '',
          '8.5',
          '',
          '9',
          '',
          '9.5',
          '',
          '10',
          '',
          '10.5',
          '',
          '11',
          '',
          '11.5',
          '',
          '12',
          '',
          '12.5',
          '',
          '13',
          '',
          '13.5',
          '',
          '14',
          '',
          '14.5',
          '',
          '15',
          '',
          '16',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'colors.model-colors': ColorsModelColors;
      'men-new-and-trending.new-arrivals': MenNewAndTrendingNewArrivals;
      'men.product-specifications': MenProductSpecifications;
      'nav-kids.accesories': NavKidsAccesories;
      'nav-kids.babies-and-toddlers': NavKidsBabiesAndToddlers;
      'nav-kids.boys-clothing': NavKidsBoysClothing;
      'nav-kids.boys-shoes': NavKidsBoysShoes;
      'nav-kids.girls-clothing': NavKidsGirlsClothing;
      'nav-kids.girls-shoes': NavKidsGirlsShoes;
      'nav-kids.new-and-trending': NavKidsNewAndTrending;
      'nav-kids.shop-by-age': NavKidsShopByAge;
      'nav-kids.shop-by-color': NavKidsShopByColor;
      'nav-kids.shop-by-sport': NavKidsShopBySport;
      'nav-men.accesories': NavMenAccesories;
      'nav-men.clothing': NavMenClothing;
      'nav-men.section-new-and-trending': NavMenSectionNewAndTrending;
      'nav-men.shoes': NavMenShoes;
      'nav-men.shop-by-collection': NavMenShopByCollection;
      'nav-men.shop-by-sport': NavMenShopBySport;
      'nav-new-and-trending.collaborations': NavNewAndTrendingCollaborations;
      'nav-new-and-trending.collections': NavNewAndTrendingCollections;
      'nav-new-and-trending.originals': NavNewAndTrendingOriginals;
      'nav-new-and-trending.our-world': NavNewAndTrendingOurWorld;
      'nav-new-and-trending.sports': NavNewAndTrendingSports;
      'nav-new-and-trending.what-s-new': NavNewAndTrendingWhatSNew;
      'nav-sale.featured-sale': NavSaleFeaturedSale;
      'nav-sale.kids': NavSaleKids;
      'nav-sale.men': NavSaleMen;
      'nav-sale.women': NavSaleWomen;
      'nav-women.accesories': NavWomenAccesories;
      'nav-women.clothing': NavWomenClothing;
      'nav-women.new-and-trending': NavWomenNewAndTrending;
      'nav-women.shoes': NavWomenShoes;
      'nav-women.shop-by-collection': NavWomenShopByCollection;
      'nav-women.shop-by-sport': NavWomenShopBySport;
      'nav.kid-s-section': NavKidSSection;
      'nav.media-model': NavMediaModel;
      'nav.men-s-section': NavMenSSection;
      'nav.new-and-trending-section': NavNewAndTrendingSection;
      'nav.sale-section': NavSaleSection;
      'nav.section-list': NavSectionList;
      'nav.women-s-section': NavWomenSSection;
      'product-overview.color': ProductOverviewColor;
      'product-overview.description-component': ProductOverviewDescriptionComponent;
      'product-overview.select-size-type': ProductOverviewSelectSizeType;
      'product-overview.short-description': ProductOverviewShortDescription;
      'select-size-type.bra-sizes': SelectSizeTypeBraSizes;
      'select-size-type.children-clothing-sizes': SelectSizeTypeChildrenClothingSizes;
      'select-size-type.clothing': SelectSizeTypeClothing;
      'select-size-type.dual-sizes': SelectSizeTypeDualSizes;
      'select-size-type.kids-sizes': SelectSizeTypeKidsSizes;
      'select-size-type.men-s-sizes': SelectSizeTypeMenSSizes;
      'select-size-type.standard-sizes': SelectSizeTypeStandardSizes;
    }
  }
}
