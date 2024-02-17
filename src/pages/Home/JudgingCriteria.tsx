import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const JudgingCriteriaSection = () => (
    <div
        className={
            "flex flex-col gap-5 w-[100%] lg:w-[90%] justify-center items-center"
        }
    >
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Judging Criteria
        </h2>
        <Table className={"w-[100%] lg:min-w-[700px] lg:max-w-[90%] m-auto"}>
            <TableHeader>
                <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Criteria</TableHead>
                    <TableHead className={"text-center"}>0</TableHead>
                    <TableHead className={"text-center"}>1</TableHead>
                    <TableHead className={"text-center"}>2</TableHead>
                    <TableHead className={"text-center"}>3</TableHead>
                    <TableHead className={"text-center"}>4</TableHead>
                    <TableHead className={"text-center"}>5</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Feasibility</TableCell>
                    <TableCell>Technical Feasibility</TableCell>
                    <TableCell>No Technical Feasibility</TableCell>
                    <TableCell colSpan={2}>
                        Limited technical feasibility demonstrated.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good technical feasibility demonstrated.
                    </TableCell>
                    <TableCell>
                        Excellent technical feasibility demonstrated.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Feasibility</TableCell>
                    <TableCell>Resource Requirements</TableCell>
                    <TableCell>
                        No consideration of resource requirements.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Limited identification of resource requirements.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good identification of resource requirements.
                    </TableCell>
                    <TableCell>
                        Excellent identification of resource requirements.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Feasibility</TableCell>
                    <TableCell>Risk Analysis</TableCell>
                    <TableCell>No risk analysis provided.</TableCell>
                    <TableCell colSpan={2}>
                        Limited risk analysis with minimal mitigation
                        strategies.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good risk analysis with clear mitigation strategies.
                    </TableCell>
                    <TableCell>
                        Excellent risk analysis with comprehensive mitigation
                        strategies.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Feasibility</TableCell>
                    <TableCell>Scalability</TableCell>
                    <TableCell>No consideration of scalability.</TableCell>
                    <TableCell colSpan={2}>
                        Limited consideration of scalability.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good consideration of scalability.
                    </TableCell>
                    <TableCell>
                        Excellent consideration of scalability.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Feasibility</TableCell>
                    <TableCell>Integration Plan</TableCell>
                    <TableCell>
                        No consideration of integration points.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Limited identification of integration points.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good identification of integration points.
                    </TableCell>
                    <TableCell>
                        Excellent identification of integration points.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Feasibility</TableCell>
                    <TableCell>Integration Plan</TableCell>
                    <TableCell>
                        No consideration of integration points.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Limited identification of integration points.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good identification of integration points.
                    </TableCell>
                    <TableCell>
                        Excellent identification of integration points.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Creativity/Design</TableCell>
                    <TableCell>Innovation Level</TableCell>
                    <TableCell>
                        The product idea has been implemented before and failed.
                    </TableCell>
                    <TableCell colSpan={2}>
                        The product idea has been implemented by someone else,
                        and it works, or the team made some improvements.
                    </TableCell>
                    <TableCell colSpan={2}>
                        The product idea has been implemented, but the team made
                        significant improvements.
                    </TableCell>
                    <TableCell>
                        The product idea is highly innovative and hasn't been
                        implemented and has been researched before.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Creativity/Design</TableCell>
                    <TableCell>Prototyping</TableCell>
                    <TableCell>
                        No prototyping or visualization of the product.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Limited prototyping, such as showing basic blueprints or
                        3D models. Good verbal explanation, but not necessarily
                        vivid.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Adequate prototyping, with a clear visualization,
                        physical product, or 3D-printed components.
                    </TableCell>
                    <TableCell>
                        Excellent prototype, showing great visualization,
                        materialization, or software development skills.
                        Outstanding verbal explanation, vividly describing the
                        concept.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Creativity/Design</TableCell>
                    <TableCell>Aesthetics</TableCell>
                    <TableCell>
                        The mock-up looks unappealing and is not clear at
                        communicating its point or being designed for its users.
                    </TableCell>
                    <TableCell colSpan={2}>
                        The mock-up looks unappealing, and it's not clear at
                        communicating, but is designed with users in mind.
                    </TableCell>
                    <TableCell colSpan={2}>
                        The mock-up looks appealing but is not clear at
                        communicating its point but is still designed for users
                        in mind.
                    </TableCell>
                    <TableCell>
                        The mock-up is aesthetically pleasing with good design.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Presentation</TableCell>
                    <TableCell>Time Management</TableCell>
                    <TableCell>Ran significantly overtime.</TableCell>
                    <TableCell colSpan={2}></TableCell>
                    <TableCell colSpan={2}></TableCell>
                    <TableCell>Within time. </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Presentation</TableCell>
                    <TableCell>Clarity of Idea Explanation</TableCell>
                    <TableCell>
                        Idea was not clearly explained; difficult to understand.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Limited clarity; some aspects of the idea were unclear.{" "}
                    </TableCell>
                    <TableCell colSpan={2}>
                        Clear explanation with minor room for improvement.{" "}
                    </TableCell>
                    <TableCell>
                        Exceptional clarity; the idea was clearly and
                        effectively communicated.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Presentation</TableCell>
                    <TableCell>Slideshow Quality</TableCell>
                    <TableCell>
                        Slideshow was poor, unprofessional, or hindered
                        understanding.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Basic quality, somewhat professional appearance, and
                        limited use of visuals.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good quality, professional appearance, and effective use
                        of visuals.
                    </TableCell>
                    <TableCell>
                        Excellent, visually appealing, and professional
                        slideshow.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Presentation</TableCell>
                    <TableCell>Evidence of Teamwork</TableCell>
                    <TableCell>No team work</TableCell>
                    <TableCell colSpan={2}>
                        Minimal evidence of teamwork.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Moderate evidence of teamwork.
                    </TableCell>
                    <TableCell>
                        Clear that all members of the team were involved in the
                        success of the project.
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Presentation</TableCell>
                    <TableCell>Q/A Session Performance</TableCell>
                    <TableCell>
                        Poor performance in the Q/A session; unable to answer
                        questions effectively.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Limited performance; struggled to address questions.
                    </TableCell>
                    <TableCell colSpan={2}>
                        Good performance; answered questions with clarity.
                    </TableCell>
                    <TableCell>
                        Excellent performance; confidently and effectively
                        handled all questions.
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export default JudgingCriteriaSection;
