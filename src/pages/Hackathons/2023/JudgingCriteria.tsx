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
        <Table className={"w-[100%] lg:min-w-[700px] lg:max-w-[60%] m-auto"}>
            <TableHeader>
                <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell >Feasibility</TableCell>
                    <TableCell>
                        The team has clearly identified a problem related to the
                        prompt
                    </TableCell>
                    <TableCell className="text-right">15</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >Feasibility</TableCell>
                    <TableCell>
                        The team has clearly described a solution that utilizes
                        technology to address the problem
                    </TableCell>
                    <TableCell className="text-right">15</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >Feasibility</TableCell>
                    <TableCell>
                        The proposed solution has the potential for deployment
                        and scaleability
                    </TableCell>
                    <TableCell className="text-right">10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >
                        Creativity/Design
                    </TableCell>
                    <TableCell>
                        The solution shows creativity and introduces a new
                        “approach” to offsetting carbon emissions
                    </TableCell>
                    <TableCell className="text-right">15</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >
                        Creativity/Design
                    </TableCell>
                    <TableCell>
                        The solution takes into consideration both environmental
                        impact and the well-being of staff involved in the
                        industry delivery process
                    </TableCell>
                    <TableCell className="text-right">10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >
                        Creativity/Design
                    </TableCell>
                    <TableCell>
                        If implemented successfully, this would significantly
                        impact carbon emissions
                    </TableCell>
                    <TableCell className="text-right">10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >Presentation</TableCell>
                    <TableCell>
                        The presentation is clear, concise, on time and provides
                        evidence for decisions
                    </TableCell>
                    <TableCell className="text-right">10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Presentation</TableCell>
                    <TableCell>
                        The slideshow/visual presentation is professional in
                        appearance and appropriately designed
                    </TableCell>
                    <TableCell className="text-right">5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >Presentation</TableCell>
                    <TableCell>
                        There is evidence of teamwork and leveraging the
                        strengths of the whole team
                    </TableCell>
                    <TableCell className="text-right">5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell >Presentation</TableCell>
                    <TableCell>The team responded well to questions</TableCell>
                    <TableCell className="text-right">5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2} className="font-bold">
                        Total
                    </TableCell>
                    <TableCell className="text-right font-bold">100</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export default JudgingCriteriaSection;
