import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps {
    questions: {
        question: string;
        answer: React.ReactNode;
    }[];
    className?: string;
}

const Faq = ({ questions, className }: FaqProps) => (
    <Accordion type="single" collapsible className={className}>
        {questions.map(({ question, answer }, i) => (
            <AccordionItem value={`faq-item-${i}`} key={i}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

export default Faq;
