import {
  CareerContainer,
  CareerHeading,
  CareerCard,
  CareerDate,
  CareerTitle,
  CareerDescription,
  TitleAndDescription,
  Circle,
} from "./CareerStyles";
import careerData from "../../data/career";

const Career = () => {
  return (
    <CareerContainer>
      <CareerHeading>Career</CareerHeading>
      {careerData.map((job, index) => (
        <CareerCard key={index}>
          <CareerDate>{`${job.startDate} - ${job.endDate}`}</CareerDate>
          <TitleAndDescription>
            <Circle />
            <CareerTitle>
              {job.title} @ {job.company}
            </CareerTitle>
            <CareerDescription>{job.description}</CareerDescription>
          </TitleAndDescription>
        </CareerCard>
      ))}
    </CareerContainer>
  );
};

export default Career;
