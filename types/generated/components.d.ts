import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialMediaIconsSocialMediaIcons extends Schema.Component {
  collectionName: 'components_social_media_icons_social_media_icons';
  info: {
    displayName: 'socialMediaIcons';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    img: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface NewsNews extends Schema.Component {
  collectionName: 'components_news_news';
  info: {
    displayName: 'news';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface MoreDescMoreDesc extends Schema.Component {
  collectionName: 'components_more_desc_more_descs';
  info: {
    displayName: 'moreDesc';
    description: '';
  };
  attributes: {
    desc: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.String;
    btnText: Attribute.String;
    img: Attribute.Media<'images' | 'files'>;
  };
}

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    fAQ: Attribute.Component<'about.f-aq', true>;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
  };
}

export interface EventsSectionEventsSection extends Schema.Component {
  collectionName: 'components_events_section_events_sections';
  info: {
    displayName: 'eventsSection';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    events: Attribute.Component<'events.events', true>;
  };
}

export interface EventsEvents extends Schema.Component {
  collectionName: 'components_events_events';
  info: {
    displayName: 'events';
    description: '';
  };
  attributes: {
    eventBy: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    date: Attribute.Date;
    location: Attribute.String;
    img: Attribute.Media<'images'>;
    event: Attribute.Relation<'events.events', 'oneToOne', 'api::event.event'>;
  };
}

export interface EventSectionEventSection extends Schema.Component {
  collectionName: 'components_event_section_event_sections';
  info: {
    displayName: 'eventSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    events: Attribute.Relation<
      'event-section.event-section',
      'oneToMany',
      'api::event.event'
    >;
  };
}

export interface EventContentEventContent extends Schema.Component {
  collectionName: 'components_event_content_event_contents';
  info: {
    displayName: 'Event Content';
  };
  attributes: {
    tabTitle: Attribute.String;
    tabDescription: Attribute.RichText;
  };
}

export interface BooksBooks extends Schema.Component {
  collectionName: 'components_books_books';
  info: {
    displayName: 'books';
  };
  attributes: {
    bookName: Attribute.String;
    continents: Attribute.String;
    language: Attribute.String;
    imgCover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgSpine: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BookSectionBookSection extends Schema.Component {
  collectionName: 'components_book_section_book_sections';
  info: {
    displayName: 'bookSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
  };
}

export interface AboutAuthorAboutAuthor extends Schema.Component {
  collectionName: 'components_about_author_about_authors';
  info: {
    displayName: 'About Author';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    img: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface AboutYearsTimeLine extends Schema.Component {
  collectionName: 'components_about_years_time_lines';
  info: {
    displayName: 'yearsTimeLine';
  };
  attributes: {
    year: Attribute.String;
  };
}

export interface AboutTimeline extends Schema.Component {
  collectionName: 'components_about_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
    header: Attribute.String & Attribute.Required;
    subHeader: Attribute.String;
    BooksNumber: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    yearsTimeline: Attribute.Component<'about.years-time-line', true>;
  };
}

export interface AboutFAq extends Schema.Component {
  collectionName: 'components_about_f_aqs';
  info: {
    displayName: 'fAQ';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.String & Attribute.Required;
  };
}

export interface AboutBooksDescription extends Schema.Component {
  collectionName: 'components_about_books_descriptions';
  info: {
    displayName: 'booksDescription';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface AboutBestSelling extends Schema.Component {
  collectionName: 'components_about_best_sellings';
  info: {
    displayName: 'bestSelling';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    booksDescription: Attribute.Component<'about.books-description', true>;
    img: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'about';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.Text;
    moreDesc: Attribute.Component<'more-desc.more-desc', true>;
    img: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social-media-icons.social-media-icons': SocialMediaIconsSocialMediaIcons;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'news.news': NewsNews;
      'more-desc.more-desc': MoreDescMoreDesc;
      'hero.hero': HeroHero;
      'gallery.gallery': GalleryGallery;
      'faq.faq': FaqFaq;
      'events-section.events-section': EventsSectionEventsSection;
      'events.events': EventsEvents;
      'event-section.event-section': EventSectionEventSection;
      'event-content.event-content': EventContentEventContent;
      'books.books': BooksBooks;
      'book-section.book-section': BookSectionBookSection;
      'about-author.about-author': AboutAuthorAboutAuthor;
      'about.years-time-line': AboutYearsTimeLine;
      'about.timeline': AboutTimeline;
      'about.f-aq': AboutFAq;
      'about.books-description': AboutBooksDescription;
      'about.best-selling': AboutBestSelling;
      'about.about': AboutAbout;
    }
  }
}
