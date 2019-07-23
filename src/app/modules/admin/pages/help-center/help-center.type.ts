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

export interface Faqs
{
    category: FaqCategory;
    faqs: Faq[];
}
