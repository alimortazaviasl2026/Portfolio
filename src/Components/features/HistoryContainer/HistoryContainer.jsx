import { Col, Container, Row } from "react-bootstrap"
import HistoryWork from "./fragments/HistoryWork"
import HistorySchool from "./fragments/HistorySchool"


function HistoryContainer() {





return (
  <>
  <Container>
    <Row className="g-5">
       <Col sm={12} md={6}>
        <HistoryWork/>
       </Col>
       <Col sm={12} md={6}>
        <HistorySchool/>
        </Col>
    </Row>
  </Container>
  </>
)
}

export default HistoryContainer









