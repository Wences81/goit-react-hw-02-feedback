import PropTypes from "prop-types";
import { Container } from "./Statistics.styled";
import { StatisticsSection } from "./Statistics.styled";
import { Span } from "./Statistics.styled";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Container>
      {total > 0 && (
        <StatisticsSection>
          <Span>Good: {good} </Span>
          <Span>Neutral: {neutral} </Span>
          <Span>Bad: {bad} </Span>
          <Span>Total: {total} </Span>
          <Span>Positive Feedback: {positivePercentage}% </Span>
        </StatisticsSection>
      )}
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
