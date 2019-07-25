export interface FaqCategory
{
    id: string;
    slug: string;
    title: string;
}

export interface Faq
{
    id: string;
    categoryId: string;
    question: string;
    answer: string;
}

export interface FaqGroup
{
    category: FaqCategory;
    faqs: Faq[];
}

export interface GuideCategory
{
    id: string;
    slug: string;
    title: string;
}

export interface Guide
{
    id: string;
    categoryId: string;
    slug: string;
    title: string;
    content: string;
}

export interface GuideGroup
{
    category: GuideCategory;
    guides: Guide[];
    moreAvailable: boolean;
}
